describe('Data Type', () => { 
    it("should must declare", () => {
        const name : String = "Nichola Saputra";

        expect(name).toBe("Nichola Saputra");

        const balance : number = 1000000;
        const isVip : boolean = true;

        console.info(name);
        console.info(balance);
        console.info(isVip);
    });
 })