
import {expect} from "jsr:@std/expect"
import { fetchRosePineIngredients } from "./fetchRosePineIngredents.ts";
import { DOMParser, HTMLDocument } from "jsr:@b-fuze/deno-dom@0.1.56";
import { evaluateChildNodes } from "./evaluateChildNodes.ts";


Deno.test("can extract text from childNodes", async () => {
    const [htmlResp,err]:[string|null,string|null] = await fetchRosePineIngredients()
    if (err != null) {
        throw new Error(err)
    }
    const doc:HTMLDocument = new DOMParser().parseFromString(htmlResp as string, "text/html")
    // get for example section with id #rose-pine
    const section = doc.querySelector("#rose-pine")
    if (!section) {
        throw new Error("no section from doc")
    }
    const textVals = evaluateChildNodes(section.childNodes,[])

    expect(textVals.length).toBeGreaterThan(0)
})
