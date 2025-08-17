 const ROSE_PINE_INGREDIENT_URL  ="https://rosepinetheme.com/palette/ingredients/"

export async function fetchRosePineIngredients():Promise<[string|null,string|null]> {
  try {
    const resp = await fetch( ROSE_PINE_INGREDIENT_URL);
    if (!resp.ok) {
      return [null, "invalid response"];
    }
    const data = await resp.text();
    return [data, null];
  } catch (err: unknown) {
    const {message} = err as Error
    throw new Error(message);
  }
}
