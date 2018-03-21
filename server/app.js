const express = require('express');
const morgan = require('morgan');

const app = express();
const bodyParser = require("body-parser");
const data = [

    // add your code here

    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];

app.use(morgan("tiny"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: 'ok'
    });
});

app.get("/api/TodoItems/", (req, res) => {
    res.status(200).json(data);
});

app.get("/api/TodoItems/:number", (req, res) => {
    let resObj = {};
    if (req.params.number < data.length) {
        for (let x = 0; x < data.length; x++) {
            if (data[x].todoItemId == req.params.number) {
                res.send(data[x]);
            }
        }
    } else {
        res.status(404).send('yo, couldnt find that')
    }
   // res.status(200).json(resObj);
});

//POST a TODO item
app.post("/api/ToDoItems/", (req, res) => {
    isToDoNew = true;
    for (let objIndex in data) {
        if (data[objIndex].todoItemId == req.body.todoItem) {
            data[objIndex] = req.body;
            isToDoNew = !isToDoNew;
        }
    }

    if (isToDoNew) {
        data.push(req.body);
        res.status(201).json(req.body)
    }
});

app.delete("/api/ToDoItems/:number", (req, res) => {
    res.send(data[req.params.number]);
    // for (let x = 0; x < data.length; x++) {
    //     if (data[x].todoItemId == req.params.number) {
            var deletedItem = data.splice(x, 1);
            res.send(deletedItem);
        // }
    // }

});



module.exports = app;
