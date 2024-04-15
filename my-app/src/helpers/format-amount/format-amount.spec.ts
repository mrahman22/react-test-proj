import { formatAmount } from "./format-amount";

describe.only("formatAmount function", () => {
  test("formats amount correctly", () => {
    // Test with a whole number
    expect(formatAmount({ amount: 100 })).toBe("£1.00");

    // Test with a number with two decimal places
    expect(formatAmount({ amount: 12345 })).toBe("£123.45");

    // Test with a number with more than two decimal places
    expect(formatAmount({ amount: 123456 })).toBe("£1,234.56");

    // Test with a negative number
    expect(formatAmount({ amount: -100 })).toBe("-£1.00");
  });

  test("handles edge cases", () => {
    // Test with amount being 0
    expect(formatAmount({ amount: 0 })).toBe("£0.00");
  });
});
