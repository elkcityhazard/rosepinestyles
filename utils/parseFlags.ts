import { parseArgs } from "jsr:@std/cli/parse-args";
export interface FlagInterface {
  [key: string]: string
}
interface ErrInterface {
  isErrorState: boolean;
  errorMsg: string;
}

const errState:ErrInterface = {
  isErrorState: false,
  errorMsg: "",
}

export function parseFlags(allowed: string[]): FlagInterface {
  const flags = parseArgs(Deno.args, {
    string: ["style"],
  });
  if (!flags.style) {
    flags.style = "all";
  }
 
  if (allowed.indexOf(flags.style as string) < 0) {
    errState.isErrorState = true;
    errState.errorMsg =
      "style flag must equal one of: (rose-pine | rose-pine-moon | rose-pine-dawn | all)";
  }
  if (errState.isErrorState) {
    console.error(errState.errorMsg);
    Deno.exit(1);
  }
  return flags as FlagInterface;
}

