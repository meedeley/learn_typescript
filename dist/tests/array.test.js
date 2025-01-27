describe("Array data type", () => {
    it("Should be array in javascript", () => {
        const names = ["Nichola", "Budi", "Joko"];
        const values = [1, 2, 3, 4, 5, 6];
        console.info(names);
        console.info(values);
    });
    it('should support readonly array', () => {
        // ReadOnlyArray
        const hobbies = ["Membaca", "Menulis"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "Main Game"; -- Only Readonly
    });
});
export {};
