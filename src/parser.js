export default function parser(url) {
  let ret = Object.create(null)
  let str = url.split('?')[1] || ''

  if (!str || typeof str !== 'string') {
    return ret
  }

  let arr = str.split('&')
  for (let i = 0; i < arr.length; i++) {
    // browser will replace space with '+'
    let pair = arr[i].trim().replace(/\+/g, ' ').split('=')
    let key = pair[0]
    let val = pair[1]
    key = tryDecodeURIComponent(key)
    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : tryDecodeURIComponent(val)
    if (isNumber(val)) {
      val = Number(val)
    }
    if(isBoolean(val)){
      val = Boolean(val)
    }
    if (!ret[key]) {
      ret[key] = val
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val)
    } else {
      ret[key] = [ret[key], val]
    }
  }
  return ret
}

function tryDecodeURIComponent(value) {
  try {
    return decodeURIComponent(value)
  } catch (e) {
    // Ignore any invalid uri component
  }
}

function isNumber(obj) {
  return !isNaN(parseFloat(obj))
}

function isBoolean(obj) {
  return /true|false/.test(obj)
}