describe("any data type", () => {
  it("should be any data type", () => {
    const person: any = {
        id :1, 
        name: "Nichola Saputra",
        age: 30
    };

    person.age = 31;

    console.info(person);
    console.info(person.age);
  });
});
