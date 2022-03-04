# finnjs
Mathematical library (fractions, complex numbers, vectors and matrices) written in JavaScript

finnmath is a free software library for the which provides or will provide implementations of fractions, complex 
numbers, vectors, matrices and polynomials and their arithmetic.
It is a JavaScript port of the JVM library [finnmath](https://github.com/ltennstedt/finnmath)

What finnmath will provide:

* Fractions and complex numbers
* Vectors and matrices
* Determinant calculation
* Polynomials

What finnmath will not provide:

* Solver for equations
* Matrix decomposition, reduction or factorization

## Implementation details

* ECMAScript 6/2015
* Absolutely no null or undefined values
* Builders for vectors and matrices
* Parameter validation and fast failing

## Usage

```javascript
Fraction(2L, 3L).add(Fraction(3L, 4L));

// getting an element of a vector or matrix
vector.get(1);
matrix.get(2, 3);

// check if an element is contained in a vector or matrix
if (vector.contains(0L)) {
    doSomethingCool();
}

// classic builders for vectors and matrices with a fluent API        
LongVector.builder(5)
        .computationOfAbsent(i -> random.nextLong())
        .set(2, 1L)
        .set(4, 2L)
        .build();
```

## Goals

* Complete JSDoc
* Clean code
* High code quality with the help of [ESLint](https://eslint.org/), [JSHint](https://jshint.com/), 
  [TypeScript](https://www.typescriptlang.org/), [SonarLint](https://www.sonarlint.org/) and 
  [SonarCloud](https://sonarcloud.io/)
* High code coverage with the help of [AVA](https://github.com/avajs/ava), [Istanbul](https://istanbul.js.org/) and 
  [SonarCloud](https://sonarcloud.io/)
* Stay up-to-date with versions of libraries
* Object-oriented design with functional abstraction
* Type definitions for [TypeScript](https://www.typescriptlang.org/)

Please keep in mind that perfection is not reachable, impressions are very subjective and definitions can vary! ;-)