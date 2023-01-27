import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";
import { API } from "./global";

export function AddStudent() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [Batch, setBatch] = useState("");
  const [course, setCourse] = useState("");
  const [course_duration, setCourse_duration] = useState("");
  const [attendence_tillnow, setAttendence_tillnow] = useState("");
  const history = useHistory();

  const  handleSubmit=async()=>{
    const newStud = {
      id:id,
      name: name,
      image: image,
     Batch: Batch,
     course:course,
     course_duration:course_duration,
     attendence_tillnow:attendence_tillnow
    };
    await axios.post(`${API}/students`,newStud)
    .then((data)=>{
      if(data.status===200){
        history.push("/students");
      }  //https://attendanceapinode.herokuapp.com/students

    })
    .catch((err)=>{
      console.log(err)
    })
    
  }

  return (
    <div className="new-stud-list">

        <TextField
        id="outlined-basic"
        label="student_id"
        variant="outlined"
        onChange={(event) => setId(event.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="name"
        variant="outlined"
        onChange={(event) => setName(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="image"
        variant="outlined"
        onChange={(event) => setImage(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="Batch"
        variant="outlined"
        onChange={(event) => setBatch(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="course"
        variant="outlined"
        onChange={(event) => setCourse(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="course_duration"
        variant="outlined"
        onChange={(event) => setCourse_duration(event.target.value)}
      />

      <TextField
        id="outlined-basic"
        label="attendence_tillnow"
        variant="outlined"
        onChange={(event) => setAttendence_tillnow(event.target.value)}
      />

      <Button
        variant="contained"
        
        onClick={handleSubmit}
        

          //1 method must be POST
//2 body -JSON data
//3 headers - JSON data

// fetch(`${API}/students/`,{
//   method:"POST",
//   body:JSON.stringify(newStud),
//   headers:{
//       "Content-Type" :"application/json",
//   },
// }).then(()=>history.push("/students"))
          
        
      >
        Add Student
      </Button>
    </div>
  );
}

// {
//   const newStud = {
//     name: name,
//     image: image,
//    Batch: Batch,
//    course:course,
//    course_duration:course_duration,
//    attendence_tillnow:attendence_tillnow
//   };


  
// }