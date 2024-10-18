alert("student name & Id :; Hania - 061 :: Maheen - 062 :: Saira - 063 ")
const students = [
    {
        name: "Hania",
        id: "061",
        class: "2nd Year",
        subjects: [
            { subjectName: "Math", marks: 95 },
            { subjectName: "Urdu", marks: 85 },
            { subjectName: "English", marks: 80 }
        ]
    },
    {
        name: "Maheen",
        id: "062",
        class: "2nd Year",
        subjects: [
            { subjectName: "Math", marks: 90 },
            { subjectName: "Urdu", marks: 80 },
            { subjectName: "English", marks: 70 }
        ]
    },
    {
        name: "Naba",
        id: "063",
        class: "2nd Year",
        subjects: [
            { subjectName: "Math", marks: 90 },
            { subjectName: "Urdu", marks: 80 },
            { subjectName: "English", marks: 70 }
        ]
    },
    {
        name: "Saira",
        id: "064",
        class: "2nd Year",
        subjects: [
            { subjectName: "Math", marks: 89 },
            { subjectName: "Urdu", marks: 69 },
            { subjectName: "English", marks: 82 }
        ]
    }
];

function totalMarks(subjects) {
    return subjects.reduce((total, subject) => total + subject.marks, 0);
}

function percentage(subjects) {
    return (totalMarks(subjects) / (subjects.length * 100)) * 100;
}

function grade(percentage) {
    if (percentage >= 80) return "A+";
    else if (percentage >= 70) return "A";
    else if (percentage >= 60) return "B";
    else if (percentage >= 50) return "C";
    else return "Fail";
}

document.getElementById('submitBtn').addEventListener('click', function() {
    const inputName = document.getElementById('studentName').value.trim();
    const inputId = document.getElementById('studentId').value.trim();
    const errorMessage = document.getElementById('error-message');

   
    errorMessage.style.display = 'none';

    if (!inputName || !inputId) {
        errorMessage.innerText = "Please fill in both fields.";
        errorMessage.style.display = 'block';
        return;
    }

    let student = null;
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === inputName && students[i].id === inputId) {
            student = students[i];
            break;
        }
    }

    if (student) {
        const studentPercentage = percentage(student.subjects);
        document.getElementById('report-card').innerHTML = `
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>ID:</strong> ${student.id}</p>
            <p><strong>Class:</strong> ${student.class || 'N/A'}</p>
            <p><strong>Total Marks:</strong> ${totalMarks(student.subjects)}</p>
            <p><strong>Percentage:</strong> ${studentPercentage.toFixed(2)}%</p>
            <p><strong>Grade:</strong> ${grade(studentPercentage)}</p>
        `;
        document.querySelector('.con-2').style.display = 'block'; // Show the report card div
        // Clear input fields
        document.getElementById('studentName').value = '';
        document.getElementById('studentId').value = '';
    } else {
        document.getElementById('report-card').innerHTML = `
            <p>Student not found. Please check the name and ID.</p>
        `;
        document.querySelector('.con-2').style.display = 'block'; // Show the report card div
    }
});