let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
  console.log('promise 1 created');
});
// here the 'promise 1 created' is loged, and the time out starts running
// so, if you wait one second without using then/await, the promes will
// resolve
// so, the next time the promise is used, it will be resolved, and will
// not run again the setTimeout and wait

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done!"), 1000);
  console.log('promise 2 created');
});

function generatePromise() {
  return new Promise(function(resolve) {
    setTimeout(() => resolve('done!'), 1000)
  })
}

function promiseThenTest(n: number) {
  promise
    .then((res) => {
      console.log("then Promise:", n, res);
      return promise2;
    })
    .then((res) => {
      console.log("then Promise2:", n, res);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  console.log(n, "This logs immediately, non-blocking!");
}

async function asyncAwaitTest(n: number) {
  try {
    let res = await promise
    console.log("await Promise:", n, res);

    res = await promise2
    console.log("await Promise2:", n, res);
  } catch (error) {
    console.error("Error:", error)
  }
}

asyncAwaitTest(1);
console.log('This logs immediately, but async/await pauses the function!');

promiseThenTest(2);

(async () => {
  await asyncAwaitTest(3)
  console.log("The await blocks")
  // await asyncAwaitTest(4)
  // here we use again the promise and promise2, but they are already resolved
  // to run again the set time out we could use a function that create promises
  // like the fn generatePromise
})()
console.log('This logs immediately, but async/await pauses the function!');


// Check micro and macro tasks to know why await Promise2: 3 done!
// prints before then Promise2: 2 done!
/*
❯ deno promises-resolve-then-and-async-await.ts                                    [Wed 27 Nov 11:54:50]
promise 1 created
promise 2 created
This logs immediately, but async/await pauses the function!
2 This logs immediately, non-blocking!
This logs immediately, but async/await pauses the function!
await Promise: 1 done!
then Promise: 2 done!
await Promise: 3 done!
await Promise2: 1 done!
await Promise2: 3 done!
The await blocks
then Promise2: 2 done!
*/
/*
TLDR;
Why the Observed Behavior?
In promiseThenTest, the second .then() for promise2 depends on promise resolving first, so it’s queued only after the first .then() runs.
In asyncAwaitTest, the code after the first await is scheduled immediately after promise resolves, ensuring it runs sooner than the second .then() in promiseThenTest.
*/
/*
see chatgpt conversation
https://chatgpt.com/share/674766c7-8180-800a-a87e-beaab2ad3e38
*/
