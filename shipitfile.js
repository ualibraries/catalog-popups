const osUser = require('os').userInfo().username
const argv = require('yargs').argv
let user

if (argv.user) {
  user = argv.user
} else {
  user = osUser
}

module.exports = function (shipit) {
  require('shipit-deploy')(shipit)

  shipit.initConfig({
    default: {
      workspace: '/tmp/catalog-popups',
      deployTo: '/data1/mainsite/vendor-support/catalog-popups',
      repositoryUrl: 'https://github.com/ualibraries/catalog-popups.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 8,
      shallowClone: true
    },
    dev: {
      branch: 'develop',
      servers: `${user}@www.library.arizona.edu`
    },
    prod: {
      servers: `${user}@www.library.arizona.edu`
    }
  })
}
