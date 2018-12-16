# BaseClass

An abstract Typescript/Javascript class with properties and methods that maybe   
every class should have.


## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/base-class
```

## Loading
```
// If using TypeScript:
import { BaseClass } from '@writetome51/base-class';
// If using ES5 JavaScript:
var BaseClass = require('@writetome51/base-class').BaseClass;
```


## Properties

#### className: string (read-only)


## Methods

```
protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
	   /*********************
	   IGetterSetterConfiguration is this object:
	   {
	        get_setterFunction?: (
	            propertyName: string, index?: number, propertyNames?: string[]
	        ) => Function,
	            // get_setterFunction takes the string property name as first argument and 
	            // returns the setter function.  The setter function must take one 
	            // parameter and return void.
	        
	        get_getterFunction?: (
	            propertyName: string, index?: number, propertyNames?: string[]
	        ) => Function
	            // get_getterFunction takes the string property name as first argument and 
	            // returns the getter function.  The getter function must return something.
	   }
	   *********************/ 
	   
	   
protected   _returnThis_after(voidExpression: any) : this
    // Executes voidExpression and returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function
) : this
    // additionalAction takes the result returned by method as an argument.
```


## Usage Examples

```

```



## License
[MIT](https://choosealicense.com/licenses/mit/)