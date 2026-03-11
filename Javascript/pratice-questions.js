

let courses = [
    {
        name: "Mathematics",
        code: "MATH101",
        enrolledStudents: ["Alice Johnson", "Bob Smith", "Charlie Brown"]
    },
    {
        name: "Physics",
        code: "PHYS201", 
        enrolledStudents: ["David Wilson", "Eve Davis"]
    },
    {
        name: "Computer Science",
        code: "CS301",
        enrolledStudents: ["Frank Miller", "Grace Lee"]
    }
];

// FUNCTION addStudentToCourse(coursesArray, courseCode, studentName)
//     // Step 1: Find the course with matching code
//     FOR each course in coursesArray
//         IF course.code equals courseCode THEN
//             // Step 2: Add student to the enrolledStudents array using splice
//             // Add at the end (index = length, delete 0 elements)
//             course.enrolledStudents.splice(course.enrolledStudents.length, 0, studentName)


// take the course name see if the cousre exist
// if it exist save it to a variable
// 
function addStudent (courseName, courseCode, studentName, position) {

    for (let i = 0; i < courses.length; i ++){

        // we will use course code for more control
        if (courses[i].code === courseCode){

            let students = courses[i].enrolledStudents;

            // inserting the student 

            students.splice(position, 0, studentName);

            return "Student " + studentName + " added to " + courses[i].name + " successfully!";
        }
    }
}

console.log(addStudent("Mathematics", "MATH101", "John Doe", 2));
console.log(courses);
