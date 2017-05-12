# Reactions-anywhere
Now you can use Facebook reactions anywhere!
Simply install the addon for Firefox and click on its icon to download a Facebook reaction image.

---

## Download

### Chrome
Reactions-anywhere is on the Chrome Web Store [here](http://bit.ly/2q8I2Q4).
The `.crx` file can be found with the other [releases](http://bit.ly/2pEEYJ1).

### Firefox
The `.xpi` file can be found with the other [releases](http://bit.ly/2pEEYJ1).
It has been submitted to [AMO](https://mzl.la/2pqvGEt) for review and (if approved) will be available [here](https://mzl.la/2pEaAyw).

---

## Building
You need webpack installed.
```
yarn install
webpack
```
Webpack will complain about undefined variables `browser` and `chrome`.
This is normal: those variables are defined in the browser API.
