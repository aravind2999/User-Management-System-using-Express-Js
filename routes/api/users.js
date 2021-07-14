const express = require('express')
const router = express.Router()
let users = require("../../Users")
const uuid = require('uuid')
//Read / GEt
router.get("/",(req,res)=>{
    res.json(users)
})

//get by id
router.get('/:id',(req,res)=>{

    const found = users.some((user)=>user.id === parseInt(req.params.id))

    if(found){

        res.json(users.filter((user) => user.id === parseInt(req.params.id)))

    } else{
        res.sendStatus(400)
    }
})

//Create
//Create new user
router.post('/',(req,res)=>{
        const newUser = {
            id : randomUUID(6),
            name : req.body.name,
            email : req.body.email,
        }

        if(!newUser.name || !mewUser.email){
            res.sendStatus(400)

        }

        users.push(newUser)
        res.json(users)

})


//Update
router.put('/:id',(req,res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id))

    if(found){
        const updateUser = req.body
        users.forEach(user=>{
            if(user.id === parseInt(req.params.id)){
                user.name = updateUser.name ? updateUser.name : user.name
                user.email = updateUser.email ? updateUser.email : user.email
                res.json({msg : 'User updated' ,user})
            }
        })
    }
})

//Delete
router.delete('/',(req,res)=>{
    const found = users.some(user => user.id === parseInt(req.params.id))

    if(found){
        users = users.filter((user)=>user.id === parseInt(req.params.id))
        res.json({msg : "User Deleted",user})
    }else{
        res.sendStatus(400)
    }
})
module.exports = router