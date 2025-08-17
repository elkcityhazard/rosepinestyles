import { NodeList } from "jsr:@b-fuze/deno-dom";
import { EvalChildNodeFunction } from "../interfaces/types/evaluateChildNodeFunction.ts";



export function evaluateChildNodes(childNodes:NodeList,out:string[]): string[]| EvalChildNodeFunction {
    childNodes.forEach(node => {
        if (node.hasChildNodes()) {
            return evaluateChildNodes(node.childNodes,out)
        }
        if (node.textContent && node.textContent.replace(" ","") != "") {
            out.push(node.textContent)
        }
    })
    return out
}