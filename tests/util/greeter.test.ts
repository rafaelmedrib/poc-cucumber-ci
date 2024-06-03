import assert from "assert";

import { Given, When, Then } from "@cucumber/cucumber";
import { Greeter } from "../../src/util/Greeter";

Given('a user called {string}', function (string) {
  this.parameters.userName = string;
});

When('the user calls the greeter', function () {
  const greeter = new Greeter(this.parameters.userName);
  this.parameters.greeting = greeter.greet();
});

Then('the greeting should be {string}', function (greeting) {
  assert.strictEqual(this.parameters.greeting, greeting);
});