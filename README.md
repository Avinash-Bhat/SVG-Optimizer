# SVG Optimizer

Optimize any SVG.

## Contribution

The app is heavily inspired by [SVG-Optimiser web-app][original-app]. 

Though it retains most of the features, it makes some subtle changes to them:

1. Drop the optimization profile (maybe save the previous choices made by the user)
2. Don't remove `id`s of:
	* the paths or shapes in `<defs>` if `xlink` namespace is provided.
	* the gradients.

### Building

This is a Chrome app using Polumer. In order to build follow these instructions:

1. Install [bower][bower] if you havent yet (`npm install -g bower`).
2. Install [Chrome Dev Editor (a.k.a CDE)][cde]
3. Clone the repo (using git or CDE)
4. Run `bower install` in the commandline (or do the same using CDE).
5. Run 'Refactor for CSP' on the project in CDE.
6. Hit run button on CDE

_**Note**: as of now there is no way to build/run it entirely using commandline._

see [TODO][TODO.md] for where to begin

## LICENSE

If not specified otherwise, the code included in this project is licensed under [Apache License 2.0][license] (see [LICENSE][license-file])

### Application Logo

The [logo][logo] is derived from two different icons as specified:

* The base is derived from the [Official svg logo][svg-logo] (licensed under [W3C Document license][w3c-dl] and created by W3C).
* the cog in the center is modified from the iconset [material-design-icons][mdi] (licensed under [Attribution 4.0 International license][cc-by] and created by Google)

The logo may be distributed under either of them without violating either of them.

[original-app]:https://github.com/petercollingridge/SVG-Optimiser
[bower]:http://bower.io/
[cde]:https://chrome.google.com/webstore/detail/chrome-dev-editor-develop/pnoffddplpippgcfjdhbmhkofpnaalpg?utm_source=chrome-ntp-launcher
[license]:https://www.apache.org/licenses/LICENSE-2.0.html
[license-file]:LICENSE
[logo]:assests/icon.svg
[svg-logo]:http://en.wikipedia.org/wiki/File:SVG_logo.svg
[w3c-dl]:http://www.w3.org/Consortium/Legal/2002/copyright-documents-20021231
[mdi]:http://google.github.io/material-design-icons/
[cc-by]:http://creativecommons.org/licenses/by/4.0/
