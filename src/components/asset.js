/* URL of a file from public/ (photos, PDFs).
   In the built site the files sit one folder above the bundled script (assets/index-*.js), so the
   address is worked out from the script's own location. That keeps photos working wherever the
   site is hosted: GitHub Pages, a sub-folder, a local server, or a preview host that moves the page. */
const here = import.meta.url; // kept in a variable so Vite leaves this line alone
const ROOT = import.meta.env.DEV ? import.meta.env.BASE_URL : new URL('../', here).href;

export const asset = (path) => ROOT + path;
