/**
  * True or false
  * Your conditions will be handled and you may choose a way to handle it.
**/

class BooleanException extends Error {
  constructor() {
    super("ERROR: BooleanException thrown. Something went wrong");
    this.name = "BooleanException";
  }
}

function handleBoolean(condition, options={
	action: 'ignore'
}) {
	if(typeof condition !== 'boolean') {
		console.warn('You are using an unsupported method. Please use handleBooleanUnsafe method.')
	}
	if(condition === true || !!condition) {
    if(!!options.handler) {
      return true;
    }
		return true;
	} else {
    if(!!options.handler) {
      return false;
    }
		if(options.action === 'ignore') return false;
		if(options.action === 'throw') throw new BooleanException()
	}
}

function handleBooleanUnsafe(condition, options={
  action: 'ignore'
}) {
	if(condition) {
    if(!!options.handler) {
      return false;
    }
		return true;
	} else {
    if(!!options.handler) {
      return false;
    }
		if(options.action === 'ignore') return false;
		if(options.action === 'throw') throw new BooleanException()
	}
}

// Of course! Exporting them...
module.exports = {
	BooleanException,
	handleBoolean,
	handleBooleanUnsafe,
  getboolean: handleBooleanUnsafe
}