describe("union data type", () => {
  it("should be union type", () => {
    let sample: number | string | boolean = "Helo My Name Is Sample";

    console.info(sample);

    sample = 20;

    console.info(sample);

    sample = true;

    console.log(sample);
  });

  it("should be in typescript", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase;
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }

      expect(process("Nichola")).toBe("NICHOLA");
      expect(process(100)).toBe(102);
      expect(process(true)).toBe(false);
    }
  });
});
