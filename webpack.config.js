const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
					loader: 'babel-loader', // Если вы используете Babel
				},
			},
		],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					// Добавьте Babel loader, если это необходимо
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
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/i,
				use: [
					{
						loader: 'file-loader',
						options: {
							// name: '[name].[ext]', // Имя выходного файла
							// outputPath: 'images', // Папка для выходных файлов
						},
					},
				],
			},
			// Правило для обработки изображений с помощью url-loader (опционально)
			// {
			// 	test: /\.(png|jpg|jpeg|gif|svg)$/i,
			// 	loader: 'url-loader',
			// 	options: {
			// 		limit: 8192, // Если изображение меньше 8 КБ, оно будет встроено в код как Data URL
			// 		// name: '[name].[ext]', // Имя выходного файла
			// 		// outputPath: 'images', // Папка для выходных файлов
			// 	},
			// },
			// Правило для обработки HTML файлов с вставленными изображениями
			{
				test: /\.html$/,
				use: ['html-loader'],
			},
			// Другие правила, если есть
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html', // Путь к исходному HTML-файлу
			filename: 'index.html', // Имя файла, который будет создан в папке dist
			inject: 'body',
		}),
		new CleanWebpackPlugin(),
	],
};
