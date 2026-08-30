import { describe, it, expect } from "vitest";
import { formatPrice } from "./format";

describe("formatPrice", () => {
  it("formats a price with thousands and decimals", () => {
    expect(formatPrice(1234.5)).toBe("1.234,5");
  });

  it("formats an integer price", () => {
    expect(formatPrice(1000)).toBe("1.000");
  });
});
