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

