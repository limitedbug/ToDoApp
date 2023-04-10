const express = require('express')
const app = express();
const port = 3000;
// Middleware Import
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", (req,res) =>{

});
app.use("/boards", require('./routes/boards'));
app.use('/lists', require('./routes/lists'))
app.use("/users", require('./routes/users'));
app.use("/cards", require('./routes/cards'));


app.listen(port, () => {
  console.log(`listen ${port}`);
});