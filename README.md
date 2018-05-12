# fpscounter

A fps counter for browsers

## Useage

```bash
npm install fpscounter
```

```js
import 'fpscounter';
console.log(window.fpsCounter.fps);
fps.counter.stop();
fps.counter.start();
```

## Polyfill

`window.requestAnimationFrame` and `window.cancelAnimationFrame` may not supported by some browsers.

You can use `import 'fpscounter/polyfill';` to polyfill it manually.
