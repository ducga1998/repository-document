module.exports = {
 entry: ["./global.js" , "./app.js"],
 output: {
   filename: "bundle.js"
 },
 module: {
   preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
   ],
   loaders: [
     {
       test: /\.es6$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
          cacheDirectory: true, 
          presets: ['react', 'es2015'] 
       }
      }
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 }
}
#các  pluin opzime trong webpack
const prodPlugins = [
  new webpack.DefinePlugin({
   'process.env.NODE_ENV': '"production"'
  }),
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.optimize.AggressiveMergingPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.NoErrorsPlugin(),
];
