export declare abstract class BaseClass {
	readonly className: any;


	protected _returnThis_after(voidExpression: any): this;


	protected _runMethod_and_returnThis(
		callingObject: any,
		method: Function,
		methodArgs: any[],
		additionalAction?: Function
	): this;


	protected _createGetterAndOrSetterForEach(propertyNames: string[], configuration: GetterSetterConfiguration): void;
}


export interface GetterSetterConfiguration {
	get_setterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => Function;
	get_getterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => Function;
}
