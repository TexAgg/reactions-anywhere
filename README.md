# Reactions-anywhere
Now you can use Facebook reactions anywhere!
Simply install the addon for Firefox and click on its icon to download a Facebook reaction image.

---

## Download

### Chrome
Reactions-anywhere is on the Chrome Web Store [here](https://chrome.google.com/webstore/detail/reactions-anywhere/kocbaaabmlkopnnhdjjplknabiddmjdl).
The `.crx` file can be found with the other [releases](https://github.com/TexAgg/reactions-anywhere/releases).

### Firefox
The `.xpi` file can be found with the other [releases](https://github.com/TexAgg/reactions-anywhere/releases).
It has been submitted to [AMO](https://addons.mozilla.org/) for review.

---

## Building
You need webpack installed.
```
yarn install
webpack
```
Webpack will complain about undefined variables `browser` and `chrome`.
This is normal: those variables are defined in the browser API.