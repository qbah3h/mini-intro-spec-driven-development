import { describe, it, expect } from "vitest";
import { addDish, removeDish, cartTotal, cartCount } from "./cart";

const empanada = {
  id: "1",
  name: "Empanada",
  description: "Carne suave",
  price: 1500,
  image: "/empanada.jpg",
};

const milanesa = {
  id: "2",
  name: "Milanesa",
  description: "Con papas",
  price: 3500,
  image: "/milanesa.jpg",
};

describe("addDish", () => {
  it("adds a new dish with quantity 1", () => {
    const result = addDish([], empanada);
    expect(result).toEqual([{ dish: empanada, quantity: 1 }]);
  });

  it("increases quantity for an existing dish", () => {
    const result = addDish([{ dish: empanada, quantity: 2 }], empanada);
    expect(result).toEqual([{ dish: empanada, quantity: 3 }]);
  });

  it("keeps other dishes untouched", () => {
    const result = addDish([{ dish: empanada, quantity: 1 }], milanesa);
    expect(result).toEqual([
      { dish: empanada, quantity: 1 },
      { dish: milanesa, quantity: 1 },
    ]);
  });
});

describe("removeDish", () => {
  it("decreases the quantity of an item", () => {
    const result = removeDish([{ dish: empanada, quantity: 2 }], empanada.id);
    expect(result).toEqual([{ dish: empanada, quantity: 1 }]);
  });

  it("removes the item when quantity reaches zero", () => {
    const result = removeDish([{ dish: empanada, quantity: 1 }], empanada.id);
    expect(result).toEqual([]);
  });

  it("keeps other items untouched", () => {
    const result = removeDish(
      [
        { dish: empanada, quantity: 1 },
        { dish: milanesa, quantity: 1 },
      ],
      empanada.id
    );
    expect(result).toEqual([{ dish: milanesa, quantity: 1 }]);
  });
});

describe("cartTotal", () => {
  it("sums price multiplied by quantity", () => {
    const result = cartTotal([
      { dish: empanada, quantity: 2 },
      { dish: milanesa, quantity: 1 },
    ]);
    expect(result).toBe(6500);
  });

  it("returns 0 for an empty cart", () => {
    expect(cartTotal([])).toBe(0);
  });
});

describe("cartCount", () => {
  it("returns the total number of items", () => {
    const result = cartCount([
      { dish: empanada, quantity: 2 },
      { dish: milanesa, quantity: 3 },
    ]);
    expect(result).toBe(5);
  });

  it("returns 0 for an empty cart", () => {
    expect(cartCount([])).toBe(0);
  });
});
