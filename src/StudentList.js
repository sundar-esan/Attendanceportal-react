import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Student } from "./Student";
import Button from "@mui/material/Button";

import { useEffect, useState } from "react";
import { API } from "./global";
import { useHistory } from "react-router-dom";

export function StudentList() {
  const history = useHistory();
  const [studList, setStudlList] = useState([]);

  const getStud = () => {
    fetch(`${API}/students`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((stud) => setStudlList(stud));
  };
  useEffect(() => getStud(), []);

  const deleteStud = (id) => {
    console.log(id);
    fetch(`${API}/students/${id}`, {
      method: "DELETE",
    }).then(()=>getStud());
    
  };

    console.log(studList);
  return (
    <div className="stud-list">
      {studList.map(
        ({ image, name, Batch,course,course_duration,attendence_tillnow, id }, index) => (
          <Student
            key={index}
            image={image}
            name={name}
            Batch={id}
            course={course}
            course_duration={course_duration}
            attendence_tillnow={attendence_tillnow}
            removeButton={
              <Button
                onClick={() => deleteStud(id)}
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
              >
                Delete
              </Button>
            }
            editButton={
              <Button
                onClick={() => history.push(`/students/edit/${id}`)}
                variant="outlined"
                color="secondary"
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
            }
            id={id}
          />
        )
      )}
    </div>
  );
}
