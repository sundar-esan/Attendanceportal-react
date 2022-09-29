import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { EditStudent} from "./EditStudent";
import { Welcome } from "./Welcome";
import { AddStudent} from "./AddStudent";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { StudentList } from "./StudentList";

function App() {
 
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px", minHeight: "100vh" }} elevation={4}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => history.push("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => history.push("/students")}>
                Student List
              </Button>
              <Button
                color="inherit"
                onClick={() => history.push("/students/add")}
              >
                Add Student
              </Button>
              <Button
                color="inherit"
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>
            </Toolbar>
          </AppBar>
          <div className="route-container">
            <Switch>
              <Route path="/students/add">
                <AddStudent/>
              </Route>
              <Route path="/students/edit/:id">
              <EditStudent/>
              </Route>
              <Route path="/students">
                <StudentList/>
              </Route>
              <Route path="/">
                <Welcome />
              </Route>
            </Switch>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
