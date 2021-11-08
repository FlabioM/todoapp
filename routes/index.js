var express = require('express');
var router = express.Router();
const toDoController = require("../controllers/todo_controller.js");

router.get('/', toDoController.homeRoute);


router.get('/add', toDoController.renderAddForm);

router.post('/add', toDoController.addNewItem);

router.get('/complete/:id', toDoController.markItemAsComplete);

router.get('/Incomplete/:id', toDoController.markItemAsIncomplete);

router.get('/delete/:id', toDoController.deleteItem);

router.get('/edit/:id', toDoController.renderEditForm);

router.get('/edit/:id', toDoController.updateItem);
module.exports = router;