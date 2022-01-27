class Fraction {
    numerator: number;
    denominator: number

    constructor(numerator: number, denominator: number = 1) {
        if (denominator == 0) {
            throw new Error("denominator != 0 expected but denominator = " + denominator)
        }
        this.numerator = numerator;
        this.denominator = denominator;
    }

    get isInvertible(): boolean {
        return this.numerator != 0;
    }

    get isNotInvertible(): boolean {
        return !this.isInvertible;
    }

    toString(): string {
        return "Fraction(numerator=" + this.numerator + ", denominator=" + this.denominator + ")";
    }
}
