import { Counter } from "./Counter";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

export function Student({
  image, name,Batch,course,course_duration,attendence_tillnow, removeButton, editButton,
}) {
  const [show, setShow] = useState(true);

  return (
    <Card className="stud-container">
      <img src={image} alt={name} className="stud-img" />
      <CardContent>
        <h2 className="stud-name">
          {name}

          <IconButton
            onClick={() => setShow(!show)}
            color="primary"
            aria-label="toogle-summary"
          >
            {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </h2>
        <p className="wstlr-batch">
          <b>Batch:</b>
          {Batch}
        </p>
        <p className="stud-course">
          <b>Course:</b>
          {course}
        </p>
        <p className="studAtt-tillnow">
          <b>Attendence Tillnow:</b>
          {attendence_tillnow}
        </p>
        {show ? <p className="abt-stud">{course_duration}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
        {removeButton} {editButton}
      </CardActions>
    </Card>
  );
}
