import { fb, db } from "./stores.js";

test('initializes Firebase application', () => {
    expect(fb).toMatch();
  });