const { fromJS } = require('immutable');

/**
 * Converts a plain JavaScript object into an Immutable Map.
 * 
 * @param {Object} object - The object to convert to an Immutable Map.
 * @returns {Immutable.Map} - The Immutable Map created from the object.
 */
function getImmutableObject(object) {
    return fromJS(object);
}

module.exports = getImmutableObject;
