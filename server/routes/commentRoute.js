const Router = require('express')
const router = new Router()
const CommentsController=require("../controllers/commentController")


router.delete("/:id/:goodsId",CommentsController.deleteOneComment)
router.post("/",CommentsController.createComments)


module.exports=router