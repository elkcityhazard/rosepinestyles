import { HTMLDocument,Element,NodeList } from "jsr:@b-fuze/deno-dom@0.1.56";
import { Stylesheet,StylesheetElInterface } from "../interfaces/stylesheet.ts";
import { EvalChildNodeFunction } from "../interfaces/types/evaluateChildNodeFunction.ts";
import { evaluateChildNodes } from "./evaluateChildNodes.ts";

export function parseFromID(htmlID: string, doc: HTMLDocument,styleList:Stylesheet):void {
  const el = doc.getElementById(htmlID);
  if (!el) {
    return;
  }
  const tableRows = el.querySelectorAll("tr");

  tableRows.forEach((row: Element ) => {
    const tds:NodeList = row.querySelectorAll("td");
    if (Array.from(tds).length < 4 || Array.from(tds).length > 4) {
      return;
    }

    const vals:string[]|EvalChildNodeFunction = evaluateChildNodes(tds,[])
    const [role, hex, rgb, hsl]:string[] = vals as string[]
    const styleProp: StylesheetElInterface = {
      role: "--color-" + htmlID + "-" + role.toLowerCase().replace(" ","-"),
      hex,
      rgb,
      hsl,
    };
    styleList[htmlID].push(styleProp)
  });
}