// Exporting methods and bring it to life

const encryption = require('./lib/Encryption.js')
const logging = require('./lib/Logging.js')
const checkers = require('./lib/TrueFalse.js')

module.exports = {
  encryption: encryption,
  ezlog: logging,
  checkers: checkers
}