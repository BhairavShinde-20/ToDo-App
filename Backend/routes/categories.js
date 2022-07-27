const express = require("express");
const router = express.Router();

router.post("/",require("./../controllers/categories").createCategories);

router.get("/",require("./../controllers/categories").getAllCategories);

router.get("/:userID",require("./../controllers/categories").getCategories);

router.delete("/:userID",require("./../controllers/categories").deleteCategories);

router.put("/:userID",require("./../controllers/categories").updateCategories);

module.exports= router; 

// expenses