var ghpages = require('gh-pages');

ghpages.publish('public', function(error) { console.log(error) });
