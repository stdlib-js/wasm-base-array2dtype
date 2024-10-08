/*
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="@stdlib/types"/>

import { RealOrComplexTypedArray, Complex128Array, Complex64Array, BooleanArray, AccessorArrayLike, DataType } from '@stdlib/types/array';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
*
* var dt = array2dtype( new Float64Array( [ 1, 2, 3 ] ) );
* // returns 'float64'
*
* @example
* var dt = array2dtype( [ 1, 2, 3 ] );
* // returns 'float64'
*/
declare function array2dtype( array: Float64Array | Array<any> ): 'float64';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
*
* var dt = array2dtype( new Float32Array( [ 1, 2, 3 ] ) );
* // returns 'float32'
*/
declare function array2dtype( array: Float32Array ): 'float32';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Complex128Array = require( '@stdlib/array-complex128' );
*
* var dt = array2dtype( new Complex128Array( [ 1, 2, 3, 4 ] ) );
* // returns 'complex128'
*/
declare function array2dtype( array: Complex128Array ): 'complex128';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Complex64Array = require( '@stdlib/array-complex64' );
*
* var dt = array2dtype( new Complex64Array( [ 1, 2, 3, 4 ] ) );
* // returns 'complex64'
*/
declare function array2dtype( array: Complex64Array ): 'complex64';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Int32Array = require( '@stdlib/array-int32' );
*
* var dt = array2dtype( new Int32Array( [ 1, 2, 3 ] ) );
* // returns 'int32'
*/
declare function array2dtype( array: Int32Array ): 'int32';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Int16Array = require( '@stdlib/array-int16' );
*
* var dt = array2dtype( new Int16Array( [ 1, 2, 3 ] ) );
* // returns 'int16'
*/
declare function array2dtype( array: Int16Array ): 'int16';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Int8Array = require( '@stdlib/array-int8' );
*
* var dt = array2dtype( new Int8Array( [ 1, 2, 3 ] ) );
* // returns 'int8'
*/
declare function array2dtype( array: Int8Array ): 'int8';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Uint32Array = require( '@stdlib/array-uint32' );
*
* var dt = array2dtype( new Uint32Array( [ 1, 2, 3 ] ) );
* // returns 'uint32'
*/
declare function array2dtype( array: Uint32Array ): 'uint32';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Uint16Array = require( '@stdlib/array-uint16' );
*
* var dt = array2dtype( new Uint16Array( [ 1, 2, 3 ] ) );
* // returns 'uint16'
*/
declare function array2dtype( array: Uint16Array ): 'uint16';

/**
* Returns the WebAssembly data type for a provided array.
*
* @param array - input value
* @returns data type
*
* @example
* var Uint8Array = require( '@stdlib/array-uint8' );
*
* var dt = array2dtype( new Uint8Array( [ 1, 2, 3 ] ) );
* // returns 'uint8'
*
* @example
* var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
*
* var dt = array2dtype( new Uint8ClampedArray( [ 1, 2, 3 ] ) );
* // returns 'uint8'
*
* @example
* var BooleanArray = require( '@stdlib/array-bool' );
*
* var dt = array2dtype( new BooleanArray( [ true, false, true, false ] ) );
* // returns 'uint8'
*/
declare function array2dtype( array: Uint8Array | Uint8ClampedArray | BooleanArray ): 'uint8';

/**
* Returns the WebAssembly data type for a provided array.
*
* ## Notes
*
* -   If provided an argument having an unknown or unsupported type, the function assumes that the values can be stored as double-precision floating-point numbers and returns `'float64'`.
*
* @param array - input value
* @returns data type
*
* @example
* var dt = array2dtype( [ 1, 2, 3 ] );
* // returns 'float64'
*
* var dt = array2dtype( 'beep' );
* // returns 'float64'
*/
declare function array2dtype( array: Array<any> | RealOrComplexTypedArray | AccessorArrayLike<any> ): DataType;


// EXPORTS //

export = array2dtype;
