const { Router } = require("express");

const app = new Router()
const {connect} = require('../db/conn')
app.get('/', async(req,res) => {
    const connection = await connect();
  
    const [rows] = await connection.execute('SELECT * FROM boards');
  
    connection.end();
  
    return rows;
})
app.get('/closed', (req,res) => {
    
})
app.get('/:id', (req,res) => {

})

app.post('/', (req,res) => {

})

app.delete('/close/:id', (req,res) => {

})

app.delete('/closed/:id', (req,res) => {

})