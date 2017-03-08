/**
 *
 * @module fun-try
 */
;(function () {
  'use strict'

  /* imports */
  var Task = require('data.task')

  /* exports */
  module.exports = funTry

  /**
   *
   * @function module:fun-try.funTry
   *
   * @param {Function} f - an n-ary function that may throw
   *
   * @return {Function} a -> Task f(a)
   */
  function funTry (f) {
    return function () {
      var args = Array.prototype.slice.call(arguments, 0, f.length)

      return new Task(function (onError, onSuccess) {
        try {
          onSuccess(f.apply(null, args))
        } catch (error) {
          onError(error)
        }
      })
    }
  }
})()

