const { Router } = require('express');
const ErrorResponse = require('../classes/error-response');
const ToDo = require('../dataBase/models/ToDo.model.');
const { asyncHandler } = require('../middlewares/middlewares');

const router = Router();
// контролер это группа эндпоинтов, которая отвечает примерно за один спектр, который имеют общую точку входа
// если запрос уйдёт на /api/todos то он попадёт на одну из точек в function initRouters
function initRoutes() {
    router.get('/', asyncHandler(getToDos));
    router.get('/:id', asyncHandler(getToDoById));
}

async function getToDos(req, res, next) {
    try{
        const todos = await ToDo.findAll() // ToDo.findAll({include:[User]}) чтобы приавязакть пользователя к сообщению


        return res.json(todos)
    } catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

async function getToDoById(req, res, next) {
   
}

async function createToDo(req, res, next){
    
}

async function deleteToDo(req, res, next){
    
}

async function updateToDo(req,res,next){
  
}
initRoutes();

module.exports = router;