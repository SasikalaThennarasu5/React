function StudentList() {
  const students = [
    { name: "Ravi", marks: 78 },
    { name: "Anjali", marks: 45 },
    { name: "Tina", marks: 91 },
  ];

  return (
    <ul>
      {students.map((student, index) => (
        <li key={index} style={{ color: student.marks > 50 ? "green" : "black" }}>
          {student.name} - {student.marks}
        </li>
      ))}
    </ul>
  );
}
export default StudentList