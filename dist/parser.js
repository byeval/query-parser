'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parser;
function parser(url) {
  var ret = Object.create(null);
  var str = url.split('?')[1] || '';

  if (!str || typeof str !== 'string') {
    return ret;
  }

  var arr = str.split('&');
  for (var i = 0; i < arr.length; i++) {
    // browser will replace space with '+'
    var pair = arr[i].trim().replace(/\+/g, ' ').split('=');
    var key = pair[0];
    var val = pair[1];
    key = tryDecodeURIComponent(key);
    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : tryDecodeURIComponent(val);
    if (isNumber(val)) {
      val = Number(val);
    }
    if (isBoolean(val)) {
      val = val === 'true';
    }
    if (!ret[key]) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
  }
  return ret;
}

function tryDecodeURIComponent(value) {
  try {
    return decodeURIComponent(value);
  } catch (e) {
    // Ignore any invalid uri component
  }
}

function isNumber(obj) {
  return (/^-?[\d.]+(?:e-?\d+)?$/.test(obj)
  );
}

function isBoolean(obj) {
  return (/true|false/.test(obj)
  );
}