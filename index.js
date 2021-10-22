const express = require('express');
const cors =require('cors')
const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello this is the second node project and I am excited to learn, This is really WOW");
});
const users = [
    {id: 1, name: 'Protik', email:'protik@gmail.com', phone: '0546544'},
    {id: 2, name: 'Ayoush', email: 'ayoush@gmail.com', phone:'0235564'},
    {id: 3, name: 'Dipika', email: 'dipika@gmail.com', phone:'0465444'},
    {id: 4, name: 'Angel', email: 'angel@gmail.com', phone:'0454141'},
    {id: 5, name: 'Tulip', email: 'tulip@gmail.com', phone:'0465464'},
    {id: 6, name: 'Attri', email: 'attri@gmail.com', phone:'0235237'}
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
}) 

// app METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    //res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// use dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['Mango', 'Orange', 'Apple', 'Lemon', 'Greap', 'Litchi'])
})

app.get('/fruits/mangoes/langra', (req, res) =>{
    res.send('Yummy yummy testy mango')
})

app.listen(port, () => {
    console.log('app listening to port', port);
})