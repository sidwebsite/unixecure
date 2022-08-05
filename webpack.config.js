const path = require('path');
// MiniCssExtractPlugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 
const meta = {
    title:'unixecure',
    viewport: 'width=device-width, initial-scale=1.0',
    description: 'ree Web Tutorial',
    keywords: 'HTML,CSS,JavaScript',
    author: 'Mike',
    image: '',
    url: ''
}
const favicon = './src/images/favicon.ico';
const metaDate = {
    'UTF-8': {charset: "UTF-8"},
    'X-UA-Compatible': { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    viewport: meta.viewport,
    description: meta.description,
    keywords: meta.keywords,
    author: meta.author,
    'google-name': {'itemprop':'name', content:meta.title},
    'google-image': {'itemprop':'image', content:meta.image},
    'google-description': {'itemprop':'description', content:meta.description},
    'facebook-title': {'property':'og:title',content: meta.title},
    'facebook-url': {'property':'og:url',content: meta.url},
    'facebook-image': {'property':'og:image',content: meta.image},
    'facebook-description': {'property':'og:description',content: meta.description},
}

module.exports = {
    entry: {
        main: './src/javascript/main.js',
        index: './src/javascript/index.js',
        news:'./src/javascript/news.js',
        video: './src/javascript/video.js',
        share: './src/javascript/share.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './javascript/[name].js?[hash:8]',
        clean: true
    },
    module: {
        rules: [
            // css loader
            {
                test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
                exclude: /node_modules/
            },
            // scss
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
                include: path.resolve(__dirname, './src/scss')
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg|ico)$/i,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                },
                generator: {
                    filename: 'images/[name][ext][query]'
                }
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                type: 'asset/inline',
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: 'css/style.css?[hash:8]'
        }),
        // index
        new HtmlWebpackPlugin({
            template: './src/html/index.html',
            filename: 'index.html',
            meta: metaDate,
            chunks: ['main', 'index'],
            favicon: favicon,
            minify: false 
        }),
        // about
        new HtmlWebpackPlugin({
            template: './src/html/about.html',
            filename: 'about.html',
            meta: metaDate,
            chunks: ['main'],
            favicon: favicon,
            minify: false
        }),
        // contact
        new HtmlWebpackPlugin({
            template: './src/html/contact.html',
            filename: 'contact.html',
            meta: metaDate,
            chunks: ['main'],
            favicon: favicon,
            minify: false
        }),
        // serve
        new HtmlWebpackPlugin({
            template: './src/html/serve-moc.html',
            filename: 'serve-moc.html',
            meta: metaDate,
            chunks: ['main'],
            favicon: favicon,
            minify: false
        }),
        // news
        new HtmlWebpackPlugin({
            template: './src/html/news.html',
            filename: 'news.html',
            meta: metaDate,
            chunks: ['main', 'news'],
            favicon: favicon,
            minify: false
        }),
        // news content
        new HtmlWebpackPlugin({
            template: './src/html/news-content-01.html',
            filename: 'news-content-01.html',
            meta: metaDate,
            chunks: ['main'],
            favicon: favicon,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/html/news-content-02.html',
            filename: 'news-content-02.html',
            meta: metaDate,
            chunks: ['main'],
            favicon: favicon,
            minify: false
        }),
        // video
        new HtmlWebpackPlugin({
            template: './src/html/video.html',
            filename: 'video.html',
            meta: metaDate,
            chunks: ['main', 'video'],
            favicon: favicon,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/html/video-content-01.html',
            filename: 'video-content-01.html',
            meta: metaDate,
            chunks: ['main'],
            favicon: favicon,
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: './src/html/video-content-02.html',
            filename: 'video-content-02.html',
            meta: metaDate,
            chunks: ['main'],
            favicon: favicon,
            minify: false 
        }),
        // Copyright and Privacy Statement
        new HtmlWebpackPlugin({
            template: './src/html/copyright-privacy.html',
            filename: 'copyright-privacy.html',
            meta: metaDate,
            chunks: ['main'],
            favicon: favicon,
            minify: false
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        host: 'localhost',
        port: '5000',
        open: true
    },
    mode: 'development',
    devtool: 'source-map'
};