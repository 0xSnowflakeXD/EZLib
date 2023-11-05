/**
  I would like to tell you that this only give the "error" and "warn" methods become useful.
  "log" method act the same as "console.log"
**/


require('colors');

function error(message='', options={
  mode: 'colorful',
  throw: false,
}) {
  // A function for logging error
  if(typeof message !== 'string') {
    throw new TypeError('Message must be a string.')
  }
  if(!message || message === '') {
    throw new Error('No message provided.'.yellow)
  }
  if(message) {
    if(options.mode === 'colorful') {
      if(options.throw === 'true') throw new Error(message)
      console.error(message.red)
      return false
    }
    if(options.mode === 'raw') {
      if(options.throw === 'true') throw new Error(message)
      console.error(message)
      return false
    }
  }
}

function warn(message='', options={
  mode: 'colorful',
}) {
  // A function for logging error
  if(typeof message !== 'string') {
    throw new TypeError('Message must be a string.')
  }
  if(!message || message === '') {
    throw new Error('No message provided.')
  }
  if(message) {
    if(options.mode === 'colorful') {
      console.error(message.yellow)
      return false
    }
    if(options.mode === 'raw') {
      console.error(message)
      return false
    }
  }
}

function log() {
  new Array(...arguments).forEach((item) => {
    console.log(item)
  })
}

// Of course! Exporting them...
module.exports = {
  error,
  warn,
  log
}