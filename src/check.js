'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        if (Object.getPrototypeOf(this) == Object.prototype ||
            Object.getPrototypeOf(this) == Array.prototype) {
            for (var key in keys) {
                if (keys.hasOwnProperty(key) && !this.hasOwnProperty(keys[key])) {
                    return false;
                }
            }
            return true;
        }
        throw 'Wrong Type Exception';
    };

    Object.prototype.checkHasKeys = function (keys) {
        return (this.checkContainsKeys(keys) && Object.keys(this).length == keys.length);
    };

    Object.prototype.checkContainsValues = function (values) {
        if (Object.getPrototypeOf(this) == Object.prototype ||
            Object.getPrototypeOf(this) == Array.prototype) {
            for (var value in values) {
                if (values.hasOwnProperty(value)) {
                    var hasValue = false;
                    for (var objectKey in this) {
                        if (this.hasOwnProperty(objectKey) && (this[objectKey] === values[value])) {
                            hasValue = true;
                        }
                    }
                    if (!hasValue) {
                        return false;
                    }
                }
            }
            return true;
        }
        throw 'Wrong Type Exception';
    };

    Object.prototype.checkHasValues = function (values) {
        return (this.checkContainsValues(values) && Object.keys(this).length == values.length);
    };

    Object.prototype.checkHasValueType = function (key, type) {
        if (Object.getPrototypeOf(this) == Object.prototype ||
            Object.getPrototypeOf(this) == Array.prototype) {
            if (this.hasOwnProperty(key)) {
                if (typeof this[key] == typeof type()) {
                    return true;
                }
            }
            return false;
        }
        throw 'Wrong Type Exception';
    };

    Object.prototype.checkHasLength = function (length) {
        if (Object.getPrototypeOf(this) == String.prototype ||
            Object.getPrototypeOf(this) == Array.prototype) {
            return (this.length == length);
        }
        throw 'Wrong Type Exception';
    };

    Function.prototype.checkHasParamsCount = function (count) {
        return (this.length == count);
    };

    String.prototype.checkHasWordsCount = function (count) {
        return (this.split(' ').length == count);
    };
};
