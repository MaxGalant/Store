const Router = require('express')
const router = new Router()
const ProductController=require("../controllers/productController")

router.post("/",ProductController.createProduct)
router.get("/",ProductController.getProduct)
router.get("/:id",ProductController.getOneProduct)


module.exports=router