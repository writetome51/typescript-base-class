import {getProperty} from '@writetome51/get-property';
import {noValue} from '@writetome51/has-value-no-value';


export class BaseClass {
	get className() {
		// @ts-ignore
		return this.constructor.name; // this works.
	}


	_returnThis_after(voidExpression) {
		return this;
	}


	// `property` can contain dot-notation, i.e., 'property.subproperty.subsubproperty'

	_errorIfPropertyHasNoValue(property, propertyNameInError = '') {
		let propValue = getProperty(property, this);
		if (noValue(propValue)) {
			if (!(propertyNameInError))
				propertyNameInError = property;
			throw new Error(`The property "${propertyNameInError}" has no value`);
		}
	}


	// Use this method when you have a bunch of properties that need getter and/or setter
	// functions that all do the same thing. It attaches the same getter function and
	// setter function to each property.

	_createGetterAndOrSetterForEach(propertyNames, configuration // See interface defined below.
	) {
		propertyNames.forEach((propertyName, index, propertyNames) => {
			let propertyDefinition = {enumerable: true, configurable: true};
			if (configuration.get_getterFunction) {
				propertyDefinition['get'] =
					configuration.get_getterFunction(propertyName, index, propertyNames);
			}
			if (configuration.get_setterFunction) {
				propertyDefinition['set'] =
					configuration.get_setterFunction(propertyName, index, propertyNames);
			}
			Object.defineProperty(this, propertyName, propertyDefinition);
		});
	}
}
