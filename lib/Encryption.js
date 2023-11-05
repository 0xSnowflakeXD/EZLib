/**
  * Some kind of encryption that flown into my idea
  * Encode your string to base 64, and encode it again
**/

function doubleB64Encr(input) {
  let inp;

  if(typeof input !== 'string') {
    inp = input.toString()
  } else {
    inp = input

    step1 = Buffer.from(inp, 'utf8').toString('base64')
    out = Buffer.from(step1, 'utf8').toString('base64')
    return out
  }
}

function doubleB64Decr(input) {
  let inp;

  if(typeof input !== 'string') {
    throw new TypeError('Input must be a string.')
  } else {
    inp = input

    step1 = Buffer.from(inp, 'base64').toString('utf-8')
    out = Buffer.from(step1, 'base64').toString('utf-8')
    return out
  }
}

// Of course! Exporting them...
module.exports = {
  d64Encrypt: doubleB64Encr,
  d64Decrypt: doubleB64Decr
}