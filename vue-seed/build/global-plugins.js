/**
 * Created by moon on 16/8/31.
 */
var webpack = require('webpack')

//增加全局依赖
var plugins = [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        'datepicker': 'admin-lte/plugins/datepicker/bootstrap-datepicker.js',
        'adminlte' : 'admin-lte',
        'bootstrap' : 'admin-lte/bootstrap/js/bootstrap.min',
        'pace' : 'admin-lte/plugins/pace/pace.min'
    })
];

module.exports = {
    plugins: plugins
}
