describe("Data Type", () => {
  it("should must declare", () => {
    let name: String = "Nichola Saputra";

    expect(name).toBe("Nichola Saputra");

    let balance: number = 1000000;
    let isVip: boolean = true;

    console.info(name);
    console.info(balance);
    console.info(isVip);
  });
});
