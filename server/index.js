const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql');

const port = process.env.PORT || 3001;

app.set('view engine', 'ejs')

const db = mysql.createPool({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b21e7af739c33a',
    password: 'd35b9750',
    database: 'heroku_0b091c9efd9d054'
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.post('/api/insert', (req, res) => {
    
    const sku = req.body.sku;
    const name = req.body.name;
    const price = req.body.price;
    const type = req.body.type;
    const size = req.body.size;
    const weight = req.body.weight;
    const length = req.body.length;
    const width = req.body.width;
    const height = req.body.height;


    const sqlInsert = "INSERT INTO products_list (sku, name, price, type, size, weight, height, width, length) VALUES (?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [sku, name, price, type, size, weight, height, width, length], (error, result) => {
        console.log(error);
    })
})

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT * FROM products_list";
    db.query(sqlSelect, (error, result) => {
        res.send(result);
    })
})

app.delete('/api/delete/products/:id', (req, res) => {
    const id = req.params.id;
    const sqlDelete = "DELETE FROM products_list WHERE id = ?";
    db.query(sqlDelete, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    })
})

app.listen(port, () => console.log('It works!'));

