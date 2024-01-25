const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/practicekro")
  .then(() => {
    console.log("mongoDb connected successfully");
  })
  .catch((error) => {
    console.log(error);
  });

const studentSchema =  mongoose.Schema({
  name: String,
  gender: String,
  age: Number,
});

const userModal = mongoose.model("userModal", studentSchema);

const adder = async () => {
  // we are using new becoz we are creating a new documnet
//   const ss = new userModal({
//     name: "sunny",
//     gender: "male",
//     age: 34,
//   });

  //    becoz it will return a promise
//   await ss.save();

//   another way of doing this is :



// creating into the database
const dataAdded = userModal.create({
    name:"sushil pandey",
    gender:"male",
    age:23
});

// finding into the database


};

adder();
