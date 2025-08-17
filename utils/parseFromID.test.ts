import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { DOMParser, HTMLDocument } from "jsr:@b-fuze/deno-dom@0.1.56";
import { parseFromID } from "./parseFromID.ts"; // Adjust this to the correct path
import { Stylesheet } from "../interfaces/stylesheet.ts";

Deno.test("parseFromID processes table rows correctly", () => {
  const htmlString = `
    <table id="colorTable">
      <tr>
        <td>role-1</td><td>#FFFFFF</td><td>rgb(255,255,255)</td><td>hsl(0,0%,100%)</td>
      </tr>
      <tr>
        <td>role-2</td><td>#000000</td><td>rgb(0,0,0)</td><td>hsl(0,0%,0%)</td>
      </tr>
    </table>
  `;
  

  const document = new DOMParser().parseFromString(htmlString,"text/html")

  const styleList: Stylesheet = {
    colorTable: []
  };


  parseFromID("colorTable", document, styleList);

  const expectedStyles = [
    {
      role: "--color-colorTable-role-1",
      hex: "#FFFFFF",
      rgb: "rgb(255,255,255)",
      hsl: "hsl(0,0%,100%)",
    },
    {
      role: "--color-colorTable-role-2",
      hex: "#000000",
      rgb: "rgb(0,0,0)",
      hsl: "hsl(0,0%,0%)",
    },
  ];

 
  assertEquals(styleList.colorTable, expectedStyles);
});
