    const userController = require("../controller/userController")
const express = require("express")

const router = express.Router()

router.get("/test",userController.test)

router.get("/:id",(req, res) => {
   const id = req.params.id
   
    res.status(200).json({
        id: id ,
        
    }) 
})
router.get("/:id/:status",(req, res) => {
    const id = req.params.id
    const status = req.params.status
     res.status(200).json({
         id: id ,
         status: status
     }) 
 })
module.exports = router;   
