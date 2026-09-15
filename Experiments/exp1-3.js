console.log('1,Start');

process.nextTick(() => {
  console.log('2,NextTick');
});
setTimeout(() => console.log('3,SetTimeout'),0);

setImmediate(() => console.log('4,SetImmediate'));
console.log('5,End');