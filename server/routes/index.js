const Router = require("express");
const router = new Router();

const productRouter = require("./productRoute");
const commentRouter=require("./commentRoute")
router.use("/product", productRouter);
router.use("/comment",commentRouter)
module.exports = router;
