const express = require('express');
const mainRouter=require('./routes/index1');
const cors =require('cors');
const app=express();

app.use(cors());
app.use(express.json());

app.use("/api/v1",mainRouter);




app.listen(3000, () => {
    console.log(" Server running on http://localhost:3000");
  });