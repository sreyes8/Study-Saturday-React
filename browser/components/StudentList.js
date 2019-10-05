import React from "react";

function StudentList(props) {
  return (
    <tbody>
      {props.students.map(student => (
        <tr key={student.id}>
          <td>{student.fullName}</td>
          <td onClick={() => props.selectStudent(student)}>Details</td>
        </tr>
      ))}
    </tbody>
  );
}

export default StudentList;
