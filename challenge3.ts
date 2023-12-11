const assert = require("assert");

class BankCustomer {
  private name: string;
  private pinCode: string;

  constructor(customerName: string, secretPin: string) {
    this.name = customerName;
    this.pinCode = secretPin;
  }

  getName(): string {
    return this.name;
  }

  verifyPinInput(inputPin: string): boolean {
    return inputPin === this.pinCode;
  }
}

const customer = new BankCustomer("John Doe", "3579");
try {
  assert.equal(typeof customer.getName, "function");

  assert.equal(typeof customer.verifyPinInput, "function");

  assert.equal(customer.getName(), "John Doe");

  assert.ok(customer.verifyPinInput("3579"));

  console.log("All assertions passed!");
} catch (error) {
  if (error instanceof Error) {
    console.error("Assertion failed:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}
