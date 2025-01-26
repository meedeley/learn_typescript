"use strict";
describe('Data Type', () => {
    it("should must declare", () => {
        const name = "Nichola Saputra";
        expect(name).toBe("Nichola Saputra");
        const balance = 1000000;
        const isVip = true;
        console.info(name);
        console.info(balance);
        console.info(isVip);
    });
});
