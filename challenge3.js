var assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(customerName, secretPin) {
        this.name = customerName;
        this.pinCode = secretPin;
    }
    BankCustomer.prototype.getName = function () {
        return this.name;
    };
    BankCustomer.prototype.verifyPinInput = function (inputPin) {
        return inputPin === this.pinCode;
    };
    return BankCustomer;
}());
var customer = new BankCustomer("John Doe", "3579");
try {
    assert.equal(typeof customer.getName, "function");
    assert.equal(typeof customer.verifyPinInput, "function");
    assert.equal(customer.getName(), "John Doe");
    assert.ok(customer.verifyPinInput("3579"));
    console.log("All assertions passed!");
}
catch (error) {
    if (error instanceof Error) {
        console.error("Assertion failed:", error.message);
    }
    else {
        console.error("Unexpected error:", error);
    }
}
