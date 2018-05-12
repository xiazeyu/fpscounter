/* eslint-disable no-underscore-dangle*/
/*
 * Adapted from stats.js
 * https://github.com/mrdoob/stats.js
 */

window.fpsCounter = window.fpsCounter || {
  '_actived': false,
  '_beginTime': (performance || Date).now(),
  '_counter': () => {

    const offset = (performance || Date).now() - window.fpsCounter._beginTime;
    window.fpsCounter._framesCounting++; // eslint-disable-line no-plusplus
    if (offset >= 1000) { // eslint-disable-line no-magic-numbers

      window.fpsCounter._beginTime += offset;
      window.fpsCounter.fps = window.fpsCounter._framesCounting;
      window.fpsCounter._framesCounting = 0;

    }
    window.fpsCounter._requestID = window.requestAnimationFrame(window.fpsCounter._counter);

  },
  '_framesCounting': 0,
  '_requestID': null,
  'fps': 60,
  'start': () => {

    if (window.fpsCounter._actived) {

      return;

    }
    window.fpsCounter._actived = true;
    window.fpsCounter._counter();

  },
  'stop': () => {

    if (window.fpsCounter._actived) {

      window.cancelAnimationFrame(window.fpsCounter._requestID);

    }
    window.fpsCounter._actived = false;

  },
};

window.fpsCounter.start();
