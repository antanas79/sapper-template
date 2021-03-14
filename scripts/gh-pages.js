const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/sapper-template',
    {
        branch: 'master',
        repo: 'https://github.com/antanas79/sapper-template.git',
        user: {
            name: 'antanas79',
            email: 'antanas.popliauskis@yahoo.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)