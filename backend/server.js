const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const PORT = 3000;

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASS,
  database: "todolist",
});

app.get("/", (req,res) => {
  return res.send("Hello World");
});

app.get('/tasks', (req, res) => {
  const sql = "Select * from tasks";
  db.query(sql, (err, data) => {
    if(err) return res.json(err);
    res.json(data);
  })
});

app.get('/tasks/del/:id', (req, res) => {
  const sql = 'delete from tasks where id = ?';
  const id = req.params.id;
  db.query(sql, id, (err, data) => {
    if(err) return res.json(err);
    res.json('deleted'+JSON.stringify(data));
  })
})

app.get("/about", (req,res)=> {
  return res.send("I don't understand people, well not everyone will be the same. But you hardly find nice people these days.")
})

app.listen(PORT, () => console.log(`Server started on ${PORT}: http://localhost:${PORT}/tasks`))

