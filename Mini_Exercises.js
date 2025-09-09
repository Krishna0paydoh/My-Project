console.clear();


/*
TASKS:

1. For each student, print:
- Name
- Marks in each subject
- Total marks
- Average marks
- Grade:
Avg ≥ 90 → "A"
Avg ≥ 75 → "B"
Avg ≥ 60 → "C"
Else → "D"

2. At the end, print:
"<Name> is the topper with <Average Marks> average!"
*/

let students = [
    { name: "Aarav", marks: { math: 90, english: 85, science: 88 } },
    { name: "Ishita", marks: { math: 78, english: 82, science: 80 } },
    { name: "Kabir", marks: { math: 95, english: 92, science: 96 } },
    { name: "Riya", marks: { math: 60, english: 70, science: 65 } }
];

for (let i = 0; i < students.length; i++) {
    let sum = 0;
    console.log("Name :", students[i].name); {
        for (let subject in students[i].marks) {
            console.log(subject, ":", students[i].marks[subject]);
            sum += students[i].marks[subject];
        }
        console.log("Total Marks :", sum);
    }
}