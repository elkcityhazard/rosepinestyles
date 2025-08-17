import { expect } from "jsr:@std/expect/expect";
import { fetchRosePineIngredients } from "./fetchRosePineIngredents.ts";




Deno.test("can fetch rose pine ingredents", async() => {
    const [htmlResp,err]:[string|null,string|null] = await fetchRosePineIngredients()
    if (err != null) {
        throw new Error(err)
    }

    if (!htmlResp) {
        throw new Error("htmlResp should not be null")
    }

    expect(htmlResp.length).toBeGreaterThan(0)
})