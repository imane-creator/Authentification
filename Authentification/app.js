import express from "express";
import bcrypt from 'bcrypt';
import cors from 'cors'
import mysql from 'mysql'

const app=express()
const port =3001;
//in memory 

const db = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'dbProject'

})
db.connect( (error)=>{
  if(error){
    console.log(error)
  }else{
    console.log("Mysql connected")
  }
}
)

app.get("/",(req,res)=>{
  res.send("<h1> Express</h1>")
}
)


app.use(express.json())
app.use(cors())

app.post('/register', async (req, res) => {
  
  try {
    console.log("hi");
    const { name, email, password } = req.body;

    const findUserQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(findUserQuery, [email], async (error, results) => {
      if (error) {
        throw error;
      }

      if (results.length > 0) {
        res.status(400).send("Wrong email or password");
      } else {
        
        const hashedPassword = await bcrypt.hash(password, 10);
        

        const insertUserQuery = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
        db.query(insertUserQuery, [name, email, hashedPassword], (error, results) => {
          if (error) {
            throw error;
          }

          console.log("User registered successfully");
          res.status(201).send("Registered successfully!");
        });
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const findUserQuery = `SELECT * FROM users WHERE email = ?`;
    db.query(findUserQuery, [email], async (error, results) => {
      if (error) {
        throw error;
      }

      if (results.length === 0) {
        res.status(400).send("Wrong email or password");
        return;
      }

      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (passwordMatch) {
        res.status(200).send("Logged in successfully");
      } else {
        res.status(400).send("Wrong email or password");
      }
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
app.listen(port, ()=>{
  console.log("Server is started on port 3001")
})