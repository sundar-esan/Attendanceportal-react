import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory, useParams } from "react-router-dom";
import { API } from "./global";

export const EditStudent = () => {
  const { id } = useParams();
  console.log(id);
 

  const [stud, setStud] = useState(null);
  useEffect(() => {
    fetch(`${API}/students/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((stud) => setStud(stud))
      .catch((err) => console.log(err))
  },[]);
  console.log(stud);

  return (
    <div>
      { stud ? <EditStudentForm stud={stud}/> : <h2>"Loading"</h2>}
    </div>
  )
};
function EditStudentForm({ stud }) {
  const [id, setId] = useState(stud.id);
  const [name, setName] = useState(stud.name);
  const [image, setImage] = useState(stud.image);
  const [Batch, setBatch] = useState(stud.Batch);
  const [course, setCourse] = useState(stud.course);
  const [course_duration, setCourse_duration] = useState(stud.course_duration);
  const [attendence_tillnow, setAttendence_tillnow] = useState(stud.attendence_tillnow);
  const history = useHistory();

  return (
    <div className="new-stud-list">

     <TextField
        value={id}
        id="outlined-basic"
        label="student_id"
        variant="outlined"
        onChange={(event) => setId(event.target.value)}
      />
      <TextField
        value={name}
        id="outlined-basic"
        label="name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        value={image}
        id="outlined-basic"
        label="image"
        variant="outlined"
        onChange={(event) => setImage(event.target.value)}
      />

      <TextField
        value={Batch}
        id="outlined-basic"
        label="batch"
        variant="outlined"
        onChange={(event) => setBatch(event.target.value)}
      />

      <TextField
        value={course}
        id="outlined-basic"
        label="course"
        variant="outlined"
        onChange={(event) => setCourse(event.target.value)}
      />

      <TextField
        value={course_duration}
        id="outlined-basic"
        label="course_duration"
        variant="outlined"
        onChange={(event) => setCourse_duration(event.target.value)}
      />

      <TextField
        value={attendence_tillnow}
        id="outlined-basic"
        label="attendence_tillnow"
        variant="outlined"
        onChange={(event) => setAttendence_tillnow(event.target.value)}
      />

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const updatedStud = {
            id:id,
            name: name,
            image: image,
            Batch: Batch,
            course:course,
            course_duration:course_duration,
            attendence_tillnow:attendence_tillnow
          };
          fetch(`${API}/students/${stud.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedStud ),
            headers: {
              "content-Type": "application/json",
            },
          }).then(() => history.push("/students"));
        }}
      >
        Save
      </Button>
    </div>
  );
}
