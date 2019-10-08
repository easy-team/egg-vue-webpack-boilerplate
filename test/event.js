const EventEmitter = require('events');
class MyEmitter extends EventEmitter{};
const myEmitter = new MyEmitter();
myEmitter.on('event', function() {
  console.log('event1');
});
myEmitter.on('event', async function() {
  console.log('event2');
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  console.log('event3');
});
myEmitter.on('event', function() {
  console.log('event4');
});
myEmitter.emit('event');
console.log('end');
