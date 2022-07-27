const express = require("express");
const router = express.Router();

router.post("/",require("./../controllers/task").createTask);

router.get("/",require("./../controllers/task").getAllTask);

router.get("/:userID",require("./../controllers/task").getTask);

router.delete("/:userID",require("./../controllers/task").deleteTask);

router.put("/:userID",require("./../controllers/task").updateTask);

module.exports= router; 

// expenses