This is a demo of a problem I ran into when trying to use @babel/env
together with commonjs and resolve.

If @babel/env is used, require() calls that are sufficiently deep and
inside node_modules are left in the output rather than being replaced
with the resolved code. To see this:
 
1. Run `npm install`.
2. Run `npm run build`.
3. Look at `dist/built.js`. Note the presence of `require` calls and the
total number of lines.
4. Comment out `@preset/env` and re-run `npm run build`.
5. Note that `dist/built.js` is much larger and contains no `require`
calls.

