import { prototypeDemo, closureDemo, eventLoopDemo } from './utils.js';

const output = document.getElementById('output');
const protoBtn = document.getElementById('prototypeDemoBtn');
const closureBtn = document.getElementById('closureDemoBtn');
const eventLoopBtn = document.getElementById('eventLoopDemoBtn');

protoBtn.addEventListener('click', () => {
  prototypeDemo(output);
});

closureBtn.addEventListener('click', () => {
  closureDemo(output);
});

eventLoopBtn.addEventListener('click', () => {
  output.textContent = "Open the browser console (F12) to see event loop logs.";
  eventLoopDemo();
});
