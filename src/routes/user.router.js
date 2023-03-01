const { getAll, create, getOne, deleteUser, upDate } = require('../controllers/user.controllers');
const express = require('express');

const UserRouter = express.Router();

UserRouter.route("/")
		.get(getAll)
        .post(create)

UserRouter.route("/:id")   
		.get(getOne)
		.delete(deleteUser)
		.put(upDate)        

module.exports = UserRouter;