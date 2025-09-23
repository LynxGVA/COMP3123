
const express = require('express')

const SERVER_PORT = process.env.PORT || 3000;

const app = express();

//app.use(express.static("public"));

app.use('/static', express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello World from Express");
})

// app.get("/index.html", (req, res) => {
//    res.sendFile(__dirname + "/public/index.html");
//})

app.get("/hello", (req, res) => {
    res.send("<h1>Hello World!</h1>");
})

app.get("/about", (req, res) => {
    res.status(200).send("<h1>About Page</h1>");
})

app.get("/college", (req, res) => {
    const college = {
        method: "GET",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }

    res.json(college);
})

app.put("/college", (req, res) => {
    const college = {
        method: "PUT",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }

    res.json(college);
})

app.delete("/college", (req, res) => {
    const college = {
        method: "DELETE",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }

    res.json(college);
})


app.post("/college", (req, res) => {
    const college = {
        method: "POST",
        name: "George Brown College",
        location: "Toronto, Canada",
        established: 1967
    }

    res.json(college);
})

app.get("/student", (req, res) => {
    const stud = {
        method: "GET",
        name: "Pritesh Patel",
        age: 24,
        city: "Ahmedabad"
    }

    res.json(stud);
})

app.post("/student", (req, res) => {
    const stud = {
        method: "POST",
        name: "Pritesh Patel",
        age: 24,
        city: "Ahmedabad"
    }
    res.json(stud);
})

app.put("/student", (req, res) => {
    const stud = {
        method: "PUT",
        name: "Pritesh Patel",
        age: 24,
        city: "Ahmedabad"
    }
    res.json(stud);
})

app.delete("/student", (req, res) => {
    const stud = {
        method: "DELETE",
        name: "Pritesh Patel",
        age: 24,
        city: "Ahmedabad"
    }
    res.json(stud);
})

//Query Parameter
//http://localhost:3000/products?category=books&price=200&author=Pritesh
app.get('/products', (req, res) => {
    console.log(req.query);

    // const { category, price, author } = req.query;
    const category = req.query.category;
    const price = req.query.price;
    const author = req.query.author;

    res.json({
        category,
        price,
        author
    });
})

//Path or Route Parameter
// http://localhost:3000/products/books/200/Pritesh
app.post('/products/:category/:price/:author', (req, res) => {
    console.log(req.params);

    // const { category, price, author } = req.params;
    const category = req.params.category;
    const price = req.params.price;
    const author = req.params.author;

    res.json({
        category,
        price,
        author
    });
});

// Body Parameter
// http://localhost:3000/movie
// POST
// Raw
// JSON
//{
// "title": "Inception",
// "year": 2010,
// "rating": 8.8
//}


//Content-Type: application/json

app.post('/movie', (req, res) => {
    const movie = req.body; // Middleware required to parse JSON body
    const { title, year, rating } = req.body;
    console.log(movie);

    res.json(movie);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`)
})
