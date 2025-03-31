<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# gscal

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multiply a vector by a scalar constant.



<section class="usage">

## Usage

```javascript
import gscal from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gscal@deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ndarray } from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gscal@deno/mod.js';
```

#### gscal( N, alpha, x, stride )

Multiplies a vector by a scalar constant.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gscal( x.length, 5.0, x, 1 );
// x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **alpha**: scalar constant.
-   **x**: input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **stride**: stride length.

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to multiply every other value by a scalar constant:

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gscal( 4, 5.0, x, 2 );
// x => [ -10.0, 1.0, 15.0, -5.0, 20.0, 0.0, -5.0, -3.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Initial array:
var x0 = new Float64Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view:
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Scale every other value:
gscal( 3, 5.0, x1, 2 );
// x0 => <Float64Array>[ 1.0, -10.0, 3.0, -20.0, 5.0, -30.0 ]
```

If either `N` or `stride` is less than or equal to `0`, the function returns `x` unchanged.

#### gscal.ndarray( N, alpha, x, stride, offset )

Multiplies a vector by a scalar constant using alternative indexing semantics.

```javascript
var x = [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, -3.0 ];

gscal.ndarray( x.length, 5.0, x, 1, 0 );
// x => [ -10.0, 5.0, 15.0, -25.0, 20.0, 0.0, -5.0, -15.0 ]
```

The function has the following additional parameters:

-   **offset**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to multiply the last three elements:

```javascript
var x = [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ];

gscal.ndarray( 3, 5.0, x, 1, x.length-3 );
// x => [ 1.0, -2.0, 3.0, -20.0, 25.0, -30.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `x` unchanged.
-   `gscal()` corresponds to the [BLAS][blas] level 1 function [`dscal`][dscal] with the exception that this implementation works with any array type, not just Float64Arrays. Depending on the environment, the typed versions ([`dscal`][@stdlib/blas/base/dscal], [`sscal`][@stdlib/blas/base/sscal], etc.) are likely to be significantly more performant.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@deno/mod.js';
import gscal from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-gscal@deno/mod.js';

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -100, 100, opts );
console.log( x );

gscal( x.length, 5.0, x, 1 );
console.log( x );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/blas-base/dscal`][@stdlib/blas/base/dscal]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point vector by a constant.</span>
-   <span class="package-name">[`@stdlib/blas-base/gaxpy`][@stdlib/blas/base/gaxpy]</span><span class="delimiter">: </span><span class="description">multiply a vector `x` by a constant and add the result to `y`.</span>
-   <span class="package-name">[`@stdlib/blas-base/sscal`][@stdlib/blas/base/sscal]</span><span class="delimiter">: </span><span class="description">multiply a single-precision floating-point vector by a constant.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-gscal.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-gscal

[test-image]: https://github.com/stdlib-js/blas-base-gscal/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-gscal/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-gscal/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-gscal?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-gscal.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-gscal/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-gscal/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-gscal/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-gscal/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-gscal/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-gscal/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-gscal/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-gscal/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-gscal/main/LICENSE

[blas]: http://www.netlib.org/blas

[dscal]: http://www.netlib.org/lapack/explore-html/de/da4/group__double__blas__level1.html

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor/tree/deno

[@stdlib/blas/base/dscal]: https://github.com/stdlib-js/blas-base-dscal/tree/deno

[@stdlib/blas/base/sscal]: https://github.com/stdlib-js/blas-base-sscal/tree/deno

<!-- <related-links> -->

[@stdlib/blas/base/gaxpy]: https://github.com/stdlib-js/blas-base-gaxpy/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
