import { expect } from "jsr:@std/expect";
import { saveFile } from "./saveFile.ts";


Deno.test("it writes to file", async () => {
    const [bytes,errMsg] = await saveFile("./test.txt","test file")
    if (errMsg != "") {
        throw new Error("expected no error, but got: " + errMsg)
    }
    if (bytes < 1) {
        throw new Error("expected filesize to be greater than 0")
    }
    expect (bytes).toBeGreaterThanOrEqual(1)

    Deno.remove("./test.txt")
})