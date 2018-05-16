import { action } from 'mobx'

class Generic {

  /**
   * Set - Generic React Set Action
   * @param {object|Array} target Target
   * @param {string} property Target Property
   * @param {mixed} value Properties Value
   */
  @action set(target, property, value) {
    target[property] = value
  }

  /**
   * Map Set
   * @param {ObservableMap} target MobX Map Observable
   * @param {string} property Property To Set
   * @param {mixed} value Value Of The Property
   */
  @action mapSet(target, property, value) {
    target.set(property, value)
  }

  /**
   * Map Replace
   * @param {ObservableMap} target MobX Map Observable
   * @param {Object} values Object with keys and values
   */
  @action mapReplace(target, values) {
    // As the current MobX version does not have Map.replace()
    // First clear, then merge.
    target.clear()
    target.merge(values)
  }

  /**
   * Map Delete
   * @param {ObservableMap} target MobX Map Observable
   * @param {string} property Property To Delete
   */
  @action mapDelete(target, property) {
    target.delete(property)
  }

  /**
   * Array Push
   * @param {ObservableMap} target MobX Array Observable
   * @param {string} value Value To Push
   */
  @action arrayPush(target, value) {
    target.push(value)
  }

  /**
   * Event Setter - Generic Input To Target
   * @param {object} target Target
   * @param {string} property Target Property
   * @return {function} Setter Function
   */
  @action eventSetter(target, property) {
    return (event) => {
      this.set(target, property, event.target.value)
    }
  }

  /**
   * Case Insensitise Structure
   * @param {mixed} input Input To Format
   * @return {object|Array} Formatted Input
   */
  caseInsensitiseStructure(input) {

    // Handle Non Object Type
    if (typeof input !== 'object') {
      return input
    }

    // Determine Base Input Structure
    const isArray = typeof input.length === 'number'
    var output = isArray ? [] : {}

    // Iterate Nested Structures
    for (var key in input) {

      // Satisfy eslint for-in-guard Rule
      if (typeof key !== 'object') {

        // Lowercase Object Properties
        var modifiedKey = key
        if (isArray === false) {
          modifiedKey = String(key).toLowerCase()
        }

        // Recurse
        output[modifiedKey] = this.caseInsensitiseStructure(input[key])
      }
    }

    return output
  }

  /**
   * Always True Method
   * @return {function} Function Always Returning true
   */
  alwaysTrueMethod() {
    return true
  }
}

export default new Generic()
