export declare abstract class BaseClass {

	readonly className: string;


	protected _returnThis_after(voidExpression: any): this;


	protected _errorIfPropertyHasNoValue(property: string, displayNameInError?: string): void;


	protected _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	): void;
}


export interface IGetterSetterConfiguration {
	get_setterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => Function;
	get_getterFunction?: (propertyName: string, index?: number, propertyNames?: string[]) => Function;
}
