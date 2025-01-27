describe("Array data type", () => {
  it("Should be array in javascript", () => {
    const names: string[] = ["Nichola", "Budi", "Joko"];
    const values: number[] = [1, 2, 3, 4, 5, 6];

    console.info(names);
    console.info(values);

   
  });

  it('should support readonly array', () => {
    // ReadOnlyArray
    const hobbies : ReadonlyArray<String> = ["Membaca", "Menulis"];
    console.info(hobbies);
    console.info(hobbies[0]);
    console.info(hobbies[1]);

    // hobbies[0] = "Main Game"; -- Only Readonly
  });

  it('should be tuple', () => {
    const person : readonly [string, string, number] = ["Nichola", "Budi", 10];

    console.info(person);
  });
});
