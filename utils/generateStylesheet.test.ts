import { expect } from "jsr:@std/expect/expect";
import type { Stylesheet } from "../interfaces/stylesheet.ts";
import {generateStylesheet} from "./generateStylesheet.ts"




Deno.test("can generate file",() => {
    const styles: Stylesheet = {
        "rose-pine": []
    }

    styles["rose-pine"] = [{
        role: "--color-" + "rose-pine-base",
        hex: "#191724",
        rgb: "rgb(25, 23, 36)",
        hsl: "hsl(249deg, 22%, 12%)"
    }]

    const stylesheet = generateStylesheet(styles)

    const styleRe = new RegExp(/--color-rose-pine-base/,"gi")

    const matches = stylesheet.match(styleRe)

    if (!matches) {
        throw new Error("invalid stylesheet")
    }

    expect(matches.length).toBeGreaterThan(0)

})