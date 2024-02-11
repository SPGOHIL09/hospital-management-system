const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/demo_1',);

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
  });

  const Admin = mongoose.model('Admin', userSchema);
  app.use(bodyParser.json());
  app.use(cors());

  app.post('/login', async (req,res)=>{
    const { username, password } = req.body;
    const user = await Admin.findOne({ username });
    if (user) {
       
        return res.status(401).json({ message: 'Invalid credentials' });
      }
      if ( user.password !== password) {
        console.log(user.password)
        return res.status(401).json({ message: 'Invalid credentials' });
      }
    
      res.json({ message: 'Login successful' });
    
  });

  app.listen(3030,()=>{
    console.log('Server running on port 3030');
})