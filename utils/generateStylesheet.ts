import  type { Stylesheet,StylesheetElInterface } from "../interfaces/stylesheet.ts";

export function generateStylesheet(styleList:Stylesheet):string {

    let out:string = "";
    out += `
    /**
     * Rose Pine Style Generator made by Andrew M McCall
     * https://andrew-mccall.com
     * @elkcityhazard indieweb.social
     **/
    `
    out += ":root {\n"
    for (const k of Object.keys(styleList as Stylesheet)) {
        const list:StylesheetElInterface[] = styleList[k] as StylesheetElInterface[]
        if (styleList[k].length) {
         out += "\n\t/**\n"
        out += "\t* "+k + "\n"
        out += "\t**/\n\n"
        }
       
        list.forEach((el:StylesheetElInterface) => {
            out += `\t${el.role}: ${el.hsl};\n`
        })
    }
    out += "};"



    return out
}