
export async function saveFile(name:string,data:string):Promise<[number,string]> {
    try {
    await Deno.writeTextFile(name,data)
    const fileInfo = await Deno.stat(name)
     if (fileInfo.size < 1) {
        return [0,"did not write file"]
     }
    return [fileInfo.size,""]
    } catch(err:unknown) {
        const {message} = err as Error
        return [0,message]

    }
}