const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body',
	loaders: [
		{
			test: /\.css$/,
			loaders: ['style-loader', 'css-loader?modules=true&camelCase=true'],
		},
		{
			test: /\.html$/,
			exclude: [/node_modules/, require.resolve('./index.html')],
			use: {
				loader: 'file-loader',
				query: {
					name: '[name].[ext]'
				},
			},
		},
		{
			test: /\.html$/,
			loader: 'html-loader'
		}
	],
})
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          }
        }
      },
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: [
					'style-loader',
					{
						loader: 'css-loader?modules=true&camelCase=true',
						options: {
							importLoaders: 1
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: {
					loader: 'css-loader?modules=true&camelCase=true',
				},
			}
    ],
 },
 plugins: [HtmlWebpackPluginConfig]
}
