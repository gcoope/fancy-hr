import {
  isValidVariant,
  isValidColor,
  isValidUnit,
  parseMargin,
} from "./fancy-hr.js";

test("isValidVariant", () => {
  expect(isValidVariant("solid")).toBe(true);
  expect(isValidVariant("dashed")).toBe(true);
  expect(isValidVariant("Obi Wan")).toBe(false);
});

test("isValidColor", () => {
  expect(isValidColor("red")).toBe(true);
  expect(isValidColor("#FFF")).toBe(true);
  expect(isValidColor("#FFFFFF")).toBe(true);
  expect(isValidColor("#001133")).toBe(true);
  expect(isValidColor("rgb(10,20,30)")).toBe(true);
  expect(isValidColor("rgba(10,20,30,0.5)")).toBe(true);
  expect(isValidColor("Darth Vader")).toBe(false);
  expect(isValidColor("purlpleybrownish")).toBe(false);
});

test("isValidUnit", () => {
  expect(isValidUnit("0")).toBe(true); // CSS allows standalone 0
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
  expect(isValidUnit("100gg")).toBe(false);
  expect(isValidUnit("Yoda")).toBe(false);
});

test("parseMargin", () => {
  const defaultMargin = "0.5em 0";
  expect(parseMargin("10px 1em")).toBe("10px 1em");
  expect(parseMargin("10px")).toBe("10px 10px");
  expect(parseMargin("100% 10%")).toBe("100% 10%");
  expect(parseMargin(null)).toBe(defaultMargin);
  expect(parseMargin("Han Solo")).toBe(defaultMargin);
});
