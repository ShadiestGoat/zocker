import * as z from "zod/v4/core";
import { Generator, generate } from "../generate.js";
import { InstanceofGeneratorDefinition } from "../zocker.js";

const generate_codec: Generator<z.$ZodCodec> = (schema, ctx) => {
    return generate(schema._zod.def.in, ctx)
};

export const CodecGenerator: InstanceofGeneratorDefinition<z.$ZodCodec> = {
    schema: z.$ZodCodec as any,
    generator: generate_codec,
    match: "instanceof"
};
