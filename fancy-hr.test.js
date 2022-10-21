import { isValidUnit } from "./fancy-hr.js";

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
