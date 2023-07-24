const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

/**
 * @description All Task Route
 * @method GET/
 */
router.get("/api/task", controller.findAll);

/**
 * @description Create Task Route
 * @method POST/
 */
router.post("/api/task", controller.create);

/**
 * @description Single Task Route
 * @method GET/
 */
router.get("/api/task/:id", controller.find);

/**
 * @description Update Task Route
 * @method PUT/
 */
router.put("/api/task/:id", controller.update);

/**
 * @description Delete Task Route
 * @method DELETE/
 */
router.delete("/api/task/:id", controller.delete);

module.exports = router;
