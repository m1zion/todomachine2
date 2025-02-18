const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/todomachine2/'
    },
    mode: 'development',
    resolve:{  //Extensiones admintidas
        extensions: ['.js','.jsx'],
        alias:{
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@pages': path.resolve(__dirname, 'src/pages/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@routes': path.resolve(__dirname, 'src/routes/'),
            '@icons': path.resolve(__dirname, 'src/assets/icons/'),
            '@logos': path.resolve(__dirname, 'src/assets/logos/'),
        }
    },
    
    module:{  //reglas loaders y plugins
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [  //Le decimos que lo use con el loader que instalamos
                    {
                        loader:'html-loader',
                    }
                ]
            },
            {
                //test: /\.s[as]ss$/i, //La del curso esta mal
                test: /\.(css|scss)$/i,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer:{
        historyApiFallback: true,
        //contentBase: path.join(__dirname,'dist'),
        //compress:true,
        //port:3005,
    }
}