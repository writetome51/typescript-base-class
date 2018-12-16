export abstract class BaseClass {


	get className() {
		// @ts-ignore
		return this.constructor.name; // this works.
	}


	protected _returnThis_after(voidExpression: any): this {
		return this;
	}


	protected _runMethod_and_returnThis(
		callingObject, method: Function, methodArgs: any[], additionalAction?: Function
	): this {
		let result = method.apply(callingObject, methodArgs);
		if (additionalAction) {
			additionalAction(result);
		}
		return this;
	}


	// Use this method when you have a bunch of properties that need getter and/or setter
	// functions that all do the same thing. It attaches the same getter function and
	// setter function to each property.

	protected _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
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


export interface IGetterSetterConfiguration {
	// This function takes the string property name as argument and returns the setter function.
	// The setter function must take one parameter and return void.
	get_setterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => Function;

	// This function takes the string property name as argument and returns the getter function.
	// The getter function must return something.
	get_getterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => Function;
}
