# Nordic Grain Woodworking LLC

Static site for GitHub Pages. No build step.

## Structure
index.html, css/style.css, js/main.js, images/

## Images
Run `copy-images.ps1` (edit `$src` if needed) to pull the 9 images out of the Firefox "_files" folder and rename them. See images/README.txt for the name map.

## Publish
1. Create a repo and push these files to `main`.
2. Settings > Pages > Deploy from a branch > `main` / `(root)`.
3. Custom domain: add a `CNAME` file containing the domain, then set DNS the same way as ntubergen.org.
