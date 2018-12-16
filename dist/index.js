"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    Object.defineProperty(BaseClass.prototype, "className", {
        get: function () {
            // @ts-ignore
            return this.constructor.name; // this works.
        },
        enumerable: true,
        configurable: true
    });
    BaseClass.prototype._returnThis_after = function (voidExpression) {
        return this;
    };
    BaseClass.prototype._runMethod_and_returnThis = function (callingObject, method, methodArgs, additionalAction) {
        var result = method.apply(callingObject, methodArgs);
        if (additionalAction) {
            additionalAction(result);
        }
        return this;
    };
    // Use this method when you have a bunch of properties that need getter and/or setter
    // functions that all do the same thing. It attaches the same getter function and
    // setter function to each property.
    BaseClass.prototype._createGetterAndOrSetterForEach = function (propertyNames, configuration) {
        var _this = this;
        propertyNames.forEach(function (propertyName, index, propertyNames) {
            var propertyDefinition = { enumerable: true, configurable: true };
            if (configuration.get_getterFunction) {
                propertyDefinition['get'] =
                    configuration.get_getterFunction(propertyName, index, propertyNames);
            }
            if (configuration.get_setterFunction) {
                propertyDefinition['set'] =
                    configuration.get_setterFunction(propertyName, index, propertyNames);
            }
            Object.defineProperty(_this, propertyName, propertyDefinition);
        });
    };
    return BaseClass;
}());
exports.BaseClass = BaseClass;
