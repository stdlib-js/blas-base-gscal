/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
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

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array-float64' );
var toAccessorArray = require( '@stdlib/array-base-to-accessor-array' );
var gscal = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof gscal, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function has an arity of 4', function test( t ) {
	t.strictEqual( gscal.length, 4, 'returns expected value' );
	t.end();
});

tape( 'the function multiplies `x` by a constant', function test( t ) {
	var expected;
	var x;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	expected = [
		20.0,
		10.0,
		-15.0,
		25.0,
		-5.0,
		10.0,
		-25.0,
		30.0
	];

	gscal( x.length, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	expected = [ 5.0, 10.0 ];

	gscal( x.length, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function multiplies `x` by a constant (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		4.0,
		2.0,
		-3.0,
		5.0,
		-1.0,
		2.0,
		-5.0,
		6.0
	];
	expected = [
		20.0,
		10.0,
		-15.0,
		25.0,
		-5.0,
		10.0,
		-25.0,
		30.0
	];

	gscal( x.length, 5.0, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = [ 1.0, 2.0 ];
	expected = [ 5.0, 10.0 ];

	gscal( x.length, 5.0, toAccessorArray( x ), 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a reference to the input array', function test( t ) {
	var out;
	var x;

	x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
	out = gscal( x.length, 3.0, x, 1 );

	t.strictEqual( out, x, 'returns expected value' );
	t.end();
});

tape( 'the function returns a reference to the input array (accessors)', function test( t ) {
	var out;
	var x;

	x = toAccessorArray( [ 1.0, 2.0, 3.0, 4.0, 5.0 ] );
	out = gscal( x.length, 3.0, x, 1 );

	t.strictEqual( out, x, 'returns expected value' );
	t.end();
});

tape( 'if provided an `N` parameter less than or equal to `0`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 3.0, -4.0, 1.0 ];

	gscal( 0, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	gscal( -4, 5.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if `alpha` equals `1`, the function returns `x` unchanged', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];
	expected = [ 3.0, -4.0, 1.0, 15.0, 4.0, 3.0 ];

	gscal( x.length, 1.0, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports specifying a stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		10.0,  // 0
		-3.0,
		-25.0, // 1
		7.0,
		30.0   // 2
	];

	gscal( 3, 5.0, x, 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports specifying a stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 0
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 2
	];
	expected = [
		10.0,  // 0
		-3.0,
		-25.0, // 1
		7.0,
		30.0   // 2
	];

	gscal( 3, 5.0, toAccessorArray( x ), 2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		10.0,  // 2
		-3.0,
		-25.0, // 1
		7.0,
		30.0   // 0
	];

	gscal( 3, 5.0, x, -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports a negative stride (accessors)', function test( t ) {
	var expected;
	var x;

	x = [
		2.0,  // 2
		-3.0,
		-5.0, // 1
		7.0,
		6.0   // 0
	];
	expected = [
		10.0,  // 2
		-3.0,
		-25.0, // 1
		7.0,
		30.0   // 0
	];

	gscal( 3, 5.0, toAccessorArray( x ), -2 );
	t.deepEqual( x, expected, 'returns expected value' );
	t.end();
});

tape( 'if provided a `stride` equal to `0`, the function multiplies first element of `x` by a constant `N` times', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 45.0, -4.0, 1.0 ];

	gscal( x.length, 5.0, x, 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'if provided a `stride` equal to `0`, the function multiplies first element of `x` by a constant `N` times (accessors)', function test( t ) {
	var expected;
	var x;

	x = [ 3.0, -4.0, 1.0 ];
	expected = [ 45.0, -4.0, 1.0 ];

	gscal( x.length, 5.0, toAccessorArray( x ), 0 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});

tape( 'the function supports view offsets', function test( t ) {
	var expected;
	var x0;
	var x1;

	x0 = new Float64Array([
		1.0,
		2.0, // 0
		3.0,
		4.0, // 1
		5.0,
		6.0  // 2
	]);
	expected = new Float64Array([
		10.0,
		3.0,
		20.0,
		5.0,
		30.0
	]);

	x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 );

	gscal( 3, 5.0, x1, 2 );
	t.deepEqual( x1, expected, 'returns expected value' );
	t.end();
});

tape( 'if `stride` is equal to `1`, the function efficiently multiplies `x` by a constant', function test( t ) {
	var expected;
	var alpha;
	var x;
	var i;

	alpha = 3.0;
	x = new Float64Array( 100 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] * alpha;
	}
	gscal( x.length, alpha, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	x = new Float64Array( 240 );
	expected = new Float64Array( x.length );
	for ( i = 0; i < x.length; i++ ) {
		x[ i ] = i;
		expected[ i ] = x[ i ] * alpha;
	}
	gscal( x.length, alpha, x, 1 );
	t.deepEqual( x, expected, 'returns expected value' );

	t.end();
});
