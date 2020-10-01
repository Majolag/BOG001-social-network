var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'docs'), {
    branch: master,
    //add: true,
    repo: 'https://github.com/Majolag/BOG001-social-network.git',
    //branch: master,
    remote: 'github',
    user: {
        //user options
    }
}, callback);