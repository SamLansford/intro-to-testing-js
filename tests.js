// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe("sayHello", function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should default to Hello World, when nothing is passed", function () {
        expect(sayHello()).toBe("Hello World!");
    });
    it("should return 'Hello World' when it's true", function () {
        expect(sayHello(true)).toBe("Hello World!")
    });
    it("should return 'Hello World' when it's false", function () {
        expect(sayHello(false)).toBe("Hello World!");
    });
    it("should return 'Bad data' when it's null", function () {
        expect(sayHello(null)).toBe("Bad data");
    });
    it("should return 'Bad data' when it's '5'", function () {
        expect(sayHello("5")).toBe("Hello, 5!");
    });
    it("should return 'Bad data' when it's passed a number", function () {
        expect(sayHello(5)).toBe("Bad data");
    });
    it("should return 'Bad data' when it's empty string", function () {
        expect(sayHello("")).toBe("Hello, !");
    });
    it("should return 'Bad data' when it's array", function () {
        expect(sayHello([])).toBe("Bad data");
    });
})

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should be a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it("should return false when passed '5'", function () {
        expect(isFive("5")).toBe(false);
    });
})

describe("isEven", function () {
    it('should be defined function', function () {
        expect(typeof isEven).toBe("function");
    });
    it('should be even when called', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when executed 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when executed -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when executed 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when executed "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when executed "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when executed infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when executed true or false', function () {
        expect(isEven(true, false)).toBe(false);
    });
    it('should return false when executed isEven()', function () {
        expect(isEven()).toBe(false);
    });
})

describe("isVowel", function () {
    it('should be defined function', function () {
      expect(typeof isVowel).toBe("function")
    });
    it('should be a vowel when called', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when executed "a"', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return true when executed "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when executed "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when executed 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when executed true or false', function () {
        expect(isVowel(true, false)).toBe(false);
    });
    it('should return false when executed "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when executed ""', function () {
        expect(isVowel()).toBe(false);
    });
})

describe("add", function () {
    it('should be defined function', function () {
        expect(typeof add).toBe("function")
    });
    it('should  add when called', function () {
        expect(typeof add()).toBe("number");
    });
    it('When adding 2 + 3 return 5', function () {
        expect(add(2, 3)).toBe(5)
    });
    it('When adding -3 + -9 return -12', function () {
        expect(add(-3,-9)).toBe(-12)
    });
    it('When adding "5" + 6 return 11', function () {
        expect(add("5",6)).toBe(11)
    });
    it('When adding "-4" + "10" return 6', function () {
        expect(add("-4","10")).toBe(6)
    });
    it('When adding "banana" + "split" return NaN', function () {
        expect(add("banana","split")).toBeNaN();
    });
    it('When adding 2 + "apples" return NaN', function () {
        expect(add(2,"apples")).toBeNaN();
    });
    it('When receive no parameter return NaN', function () {
        expect(add()).toBeNaN();
    });
})