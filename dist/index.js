"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var get_property_1 = require("@writetome51/get-property");
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
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
    // `property` can contain dot-notation, i.e., 'property.subproperty.subsubproperty'
    BaseClass.prototype._errorIfPropertyHasNoValue = function (property, propertyNameInError) {
        if (propertyNameInError === void 0) { propertyNameInError = ''; }
        var propValue = get_property_1.getProperty(property, this);
        if (has_value_no_value_1.noValue(propValue)) {
            if (!(propertyNameInError))
                propertyNameInError = property;
            throw new Error("The property \"" + propertyNameInError + "\" has no value");
        }
    };
    // Use this method when you have a bunch of properties that need getter and/or setter
    // functions that all do the same thing. It attaches the same getter function and
    // setter function to each property.
    BaseClass.prototype._createGetterAndOrSetterForEach = function (propertyNames, configuration // See interface defined below.
    ) {
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
