const mongoose = require('mongoose');


async function connectToMongoDB(url) {
  return mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error connecting to DB" , err); // error logged
    });
}

module.exports ={
    connectToMongoDB
}
