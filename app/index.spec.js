'use strict';

import sum from './sum.js';
import minus from './minus.js';


describe("Test calc functions", function() {

  it("expect sum result in 4", function() {
    const result = sum(2, 2);

    expect(result).toBe(4);
  });

  it("expect minus result is 6", function() {
    const result = minus(10, 4);

    expect(result).toBe(6);
  });
});
