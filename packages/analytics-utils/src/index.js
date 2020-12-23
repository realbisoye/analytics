import dotProp from 'dlv'
import storage, {
  getCookie,
  setCookie,
  removeCookie,
  globalContext
} from '@analytics/storage-utils'
import {
  isFunction,
  isString,
  isObject,
  isUndefined,
  isBoolean,
  isArray
} from './typeCheck'

export {
  storage,
  getCookie,
  setCookie,
  globalContext,
  removeCookie,
  isFunction,
  isString,
  isArray,
  isObject,
  isUndefined,
  isBoolean,
  dotProp,
}
export { default as decodeUri } from './decodeUri.js'
export { default as getBrowserLocale } from './getBrowserLocale.js'
export { default as getTimeZone } from './getTimeZone.js'
export { default as inBrowser } from './inBrowser.js'
export { default as isExternalReferrer } from './isExternalReferrer.js'
export { default as isScriptLoaded } from './isScriptLoaded.js'
export { default as noOp } from './noOp.js'
export { default as paramsClean } from './paramsClean.js'
export { default as paramsGet } from './paramsGet.js'
export { default as paramsParse } from './paramsParse.js'
export { default as paramsRemove } from './paramsRemove.js'
export { default as parseReferrer } from './parseReferrer.js'
export { default as url } from './url.js'
export { default as uuid } from './uuid.js'
export { default as throttle } from './throttle.js'
