/// <reference path="../../typings/power-assert/power-assert.d.ts" />
/// <reference path="../../typings/mocha/mocha.d.ts" />

import assert from "power-assert";
import { Try, Success, Failure } from "../../src/monad/try";
import { Future } from "../../src/monad/future";


describe("Future", () => {
    it("Factories", () => {
        const f = Future.fromCallback<number>((trigger: (result: Try<number>) => void) => {
            const result = Success<number>(1);

            trigger(result);
        });
    });
});