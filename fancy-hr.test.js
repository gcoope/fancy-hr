import { isValidUnit, parseMargin } from "./fancy-hr.js";

test("isValidUnit", () => {
  expect(isValidUnit("10px")).toBe(true);
  expect(isValidUnit("10.5px")).toBe(true);
  expect(isValidUnit("10em")).toBe(true);
  expect(isValidUnit("10.5em")).toBe(true);
  expect(isValidUnit("10rem")).toBe(true);
  expect(isValidUnit("10.5rem")).toBe(true);
  expect(isValidUnit("1%")).toBe(true);
  expect(isValidUnit("100%")).toBe(true);
  expect(isValidUnit("10vh")).toBe(true);
  expect(isValidUnit("10vw")).toBe(true);
  expect(isValidUnit("100vmin")).toBe(true);
  expect(isValidUnit("100vmax")).toBe(true);

  expect(isValidUnit("10")).toBe(false);
  expect(isValidUnit("100something")).toBe(false);
});

test("parseMargin", () => {
  const defaultMargin = "0.5em 0";
  expect(parseMargin("10px 1em")).toBe("10px 1em");
  expect(parseMargin("10px")).toBe("10px 10px");
  expect(parseMargin("AHHH")).toBe(defaultMargin);
  expect(parseMargin("100% 10%")).toBe("100% 10%");
});
