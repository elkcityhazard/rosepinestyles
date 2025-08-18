# Rose Pine Styles

__Description__: Goes out and fetches rose pine styles from [rosepinetheme.com](http://rosepinetheme.com/palette/ingredients "Rose Pine Theme")
and generates a css file with custom properties for your project. 

## Uses
- Deno
- jsr:@b-fuze/deno-dom
- Typescript
- 

## Usage
```
git clone github.com/elkcityhazard/rosepinestyles.git
cd rosepinestyles
deno compile --allow-all -o rosepinestyles --target x86_64-pc-windows-msvc main.ts
// or
deno compile --unstable --target x86_64-unknown-linux-gnu --output rosepinestyles ./main.ts

./rosepinestyles.exe OR ./rosepinestyles.exe -style=rose-pine|rose-pine-dawn|rose-pine-moon

output will be ./_colors-rose-pine.css
```
