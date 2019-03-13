// main.js
var load = require('bundle-loader!./main2.js');

load(function(file) {
    document.open();
    document.write('<h1>' + file + '</h1>');
    document.close();
});