const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				rules: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						use: {
							loader: 'babel-loader',
						},
					},
					{
						test: /\.css$/, // Правило для CSS файлов
						use: ['style-loader', 'css-loader'],
					},
					{
						test: /\.scss$/, // Применять loader только к файлам .scss
						use: [
							'style-loader', // Создает стили из строк JavaScript
							'css-loader', // Преобразует CSS в JavaScript
							'sass-loader', // Компилирует Sass в CSS
						],
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // Путь к исходному HTML-файлу
			filename: 'index.html', // Имя файла, который будет создан в папке dist
			inject: 'body',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, './src/assets/images'),
					to: path.resolve(__dirname, 'dist/assets'),
				},
			],
		}),
		new CleanWebpackPlugin(),
	],
};
