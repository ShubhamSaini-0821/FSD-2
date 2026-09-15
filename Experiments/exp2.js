const fs = require('fs');

//Create / Write
fs.writeFileSync('student.txt', 'B.Tech Node.js Lab');

//Read
const data = fs.readFileSync('student.txt', 'utf-8');
console.log(data);

//Write
fs.writeFileSync('student.txt', 'Name: Shubham\n Subject: Full Stack Development');

console.log('File updated successfully');

//update

fs.appendFileSync('student.txt', '\nExperiment 2 completed.');
console.log('File updated successfully');

console.log(data);