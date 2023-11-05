// DEMO FILE
// Only use up-to-date methods. Current version of modules is 0.145.17a
const encryption = require('./lib/Encryption.js')
const logging = require('./lib/Logging.js')
const checkers = require('./lib/TrueFalse.js')

// Fristly with encryption
var encrypted = encryption.d64Encrypt('Hello, World!')
var decrypted = encryption.d64Decrypt(encrypted)
console.log(encrypted + ' => ' + decrypted)

// Logging:
logging.error('error test')
logging.error('error test raw', {mode:'raw'})
logging.warn('warn test')
logging.warn('warn test raw', {mode:'raw'})
logging.log('log test')

// Checkers
console.log("Is 5 ≥ 3? ", checkers.handleBoolean(5 >= 3))
console.log("Is 5 ≤ 3? ", checkers.handleBoolean(5 <= 3))
// To avoid conflicts, the unsafe method wasn't added.