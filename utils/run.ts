import {fetchRosePineIngredients} from "./fetchRosePineIngredents.ts"
import { generateStylesheet } from "./generateStylesheet.ts";
import { parseFromID } from "./parseFromID.ts";
import type { Stylesheet } from "../interfaces/stylesheet.ts";
import { DOMParser } from "jsr:@b-fuze/deno-dom@0.1.56";
import { type FlagInterface, parseFlags } from "./parseFlags.ts";
import { saveFile } from "./saveFile.ts";

const CSS_FILENAME:string = "./_colors-rose-pine.css"

const allowed: string[] = [
    "rose-pine",
    "rose-pine-dawn",
    "rose-pine-moon",
    "all",
  ];

export async function run() {
  try {
    const flags: FlagInterface = parseFlags(allowed);

    const styleList : Stylesheet = {
    "rose-pine": [],
    "rose-pine-dawn": [],
    "rose-pine-moon": []
    };
    const [pageData, err] = await fetchRosePineIngredients();
    if (err != null) {
      console.error(err as string)
      Deno.exit(1)
    }

    const doc = new DOMParser()?.parseFromString(pageData as string, "text/html");
    if (flags.style as string == "all") {
       const toProcess:string[] = allowed.filter((el:string) => el != "all")
       toProcess.forEach((el:string) => parseFromID(el,doc,styleList))
    } else {
        parseFromID(flags.style as string,doc,styleList);
    }
   
    const  out:string = generateStylesheet(styleList)
    const [bytesWritten,saveErr] = await saveFile(CSS_FILENAME,out)
    if (saveErr != "") {
        console.error(saveErr)
        throw new Error(saveErr)
    }
console.info(`Wrote ${bytesWritten} to file: ${CSS_FILENAME}`)
   
  } catch (err:unknown) {
    console.log(err)
    const {message} = err as Error
    console.error(message);
  }
}
