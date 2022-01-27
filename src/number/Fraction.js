"use strict";
class Fraction {
    constructor(numerator, denominator = 1) {
        if (denominator == 0) {
            throw new Error("denominator != 0 expected but denominator = " + denominator);
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }
    get isInvertible() {
        return this.numerator != 0;
    }
    get isNotInvertible() {
        return !this.isInvertible;
    }
    toString() {
        return "Fraction(numerator=" + this.numerator + ", denominator=" + this.denominator + ")";
    }
}
