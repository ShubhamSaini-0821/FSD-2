  let student = {
    name: "Shubham",
    age: 21,
    rollNo: 101,
    cgpa: 9.5,
    IsMarried: false
};
console.log(student.name);
student.name = "Shubham saini";
console.log(student.name);
let table=[
    {
        name: "Shubham",
        City: "Meerut",
        CGPA: 9.5
        },
        {
            name:"Amit",
            City:"Delhi",
            CGPA: 9.0
        },
        {
            name:"Rohit",
            City:"Noida",
            CGPA: 8.5
        },
        {
            name:"Ramesh",
            City:"Gurgaon",
            CGPA: 8.0
        },
        {
            name:"Sharma",
            City:"Noida",
            CGPA: 9.5
        },
        {
            name:"Sidhant Gupta",
            City:"Noida",
            CGPA: 9.2
        }
];
//console.table(table); //To display the table in tabular format
for(let i=0; i<table.length; i++){
    if(table[i].CGPA>9&&table[i].City=="Noida"){
        console.log(table[i].name);
    }
}
