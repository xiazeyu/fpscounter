
/*
 * Polyfill for window.requestAnimationFrame
 * https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
 */
if (!window.requestAnimationFrame) { // Chromium

  window.requestAnimationFrame =
    window.webkitRequestAnimationFrame || // Webkit
    window.mozRequestAnimationFrame || // Mozilla Geko
    window.msRequestAnimationFram; // IE Trident?

}

/*
 * Polyfill for window.cancelAnimationFrame
 * https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
 */
if (!window.cancelAnimationFrame) { // Chromium

  window.cancelAnimationFrame =
    window.webkitCancelAnimationFrame || // Webkit
    window.webkitCancelRequestAnimationFrame || // Webkit
    window.mozCancelAnimationFrame || // Mozilla Geko
    window.mozCancelRequestAnimationFrame || // Mozilla Geko
    window.msCancelAnimationFrame || // IE Trident?
    window.msCancelRequestAnimationFrame; // IE Trident?

}

/*
 * Fallback function for window.requestAnimationFrame and window.cancelAnimationFrame
 * https://github.com/darius/requestAnimationFrame/blob/master/requestAnimationFrame.js
 */
if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) { // IOS6 is buggy

  let lastTime = 0;
  window.requestAnimationFrame = (callback) => {

    const now = Date.now();
    const nextTime = Math.max(lastTime + 16, now); // eslint-disable-line no-magic-numbers
    return setTimeout(() => {

      callback(lastTime = nextTime);

    }, nextTime - now);

  };
  window.cancelAnimationFrame = clearTimeout;

}
