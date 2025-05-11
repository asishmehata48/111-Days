const logDiv = document.getElementById("log");

function log(msg) {
  logDiv.innerHTML += msg + "<br>";
  logDiv.scrollTop = logDiv.scrollHeight;
}

// Callback example
function runCallback() {
  log("Start Callback");
  setTimeout(() => {
    log("Callback: Task 1 done");
    setTimeout(() => {
      log("Callback: Task 2 done");
      setTimeout(() => {
        log("Callback: Task 3 done");
      }, 1000);
    }, 1000);
  }, 1000);
}

// Promise example
function runPromise() {
  log("Start Promise");

  function task(msg) {
    return new Promise((resolve) => {
      setTimeout(() => {
        log(msg);
        resolve();
      }, 1000);
    });
  }

  task("Promise: Task 1 done")
    .then(() => task("Promise: Task 2 done"))
    .then(() => task("Promise: Task 3 done"));
}

// Async/Await example
async function runAsyncAwait() {
  log("Start Async/Await");

  function task(msg) {
    return new Promise((resolve) => {
      setTimeout(() => {
        log(msg);
        resolve();
      }, 1000);
    });
  }

  await task("Async: Task 1 done");
  await task("Async: Task 2 done");
  await task("Async: Task 3 done");
}
