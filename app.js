import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();
const port = process.env.PORT || 3000;
app.set('view engine', 'ejs');
var tasks =[];
var tasksWork =[];
const d = new Date();
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];


const today = weekDays[d.getDay()] + ", " + d.getDate() + " " + months[d.getMonth()];


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) =>{
    console.log(tasks);
    res.render("index.ejs", {inputTasks:tasks , headingDate: today });
})

app.get("/work", (req, res) =>{
  console.log(tasks);
  res.render("work.ejs", {inputTasksWork:tasksWork , headingDate: today });
})

app.post("/", (req, res) => {
     const inputTask = req.body.task;
    tasks.push(inputTask);
    
    
    res.redirect("/")
})
app.post("/work", (req, res) => {
  const inputTask = req.body.task;
  tasksWork.push(inputTask);
 
 
 res.redirect("/work")
})

app.post("/delete/:index", (req, res) => {
  const index = req.params.index;

  if ( index >= 0 && index < tasks.length){
    tasks.splice(index, 1);
    res.redirect(
      "/"
    )
  }
})
app.post("/work/delete/:index", (req, res) => {
  const index = req.params.index;

  if ( index >= 0 && index < tasksWork.length){
    tasksWork.splice(index, 1);
    res.redirect(
      "/work"
    )
  }
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


