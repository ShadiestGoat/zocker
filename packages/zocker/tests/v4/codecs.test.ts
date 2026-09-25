import { describe, expect, test } from "vitest";
import { z } from "zod/v4";
import { zocker } from "../../src";

describe("Codec generation", () => {
    test("generates valid data for iso date", () => {
        const codec = z.codec(z.iso.datetime(), z.date(), {
            decode: isoString => new Date(isoString),
            encode: date => date.toISOString(),
        })
        const output = zocker(codec).generate();
        expect(output).toBeTypeOf("string")
    })
});
