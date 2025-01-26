import { sayHello } from "../src/say-hello";
describe('sayHello', () => {
    it("should return hello nichola", function () {
        expect(sayHello("Nichola")).toBe("Hello Nichola");
    });
});
