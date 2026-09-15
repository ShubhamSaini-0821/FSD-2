const fs=require('fs');

fs.writeFileSync('student.txt','Name : Shubham\nRoll No : 1142\nBranch : CSE\nSemester : 3rd');
console.log('File created successfully');
const data=fs.readFileSync('student.txt','utf-8');
console.log(data);

fs.appendFileSync('student.txt','Subject : Full Stack Development\nMarks : 90\nAttendance : 80%');
console.log('File updated successfully');
const data1=fs.readFileSync('student.txt','utf-8');
console.log(data1);


