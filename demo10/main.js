// main.js
require.ensure(['./main2'], function(require) {
    var content = require('./main2');
    document.open();
    document.write('<h1>' + content + ' !</h1>');
    document.close();
});