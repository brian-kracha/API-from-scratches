const express = require('express')
const route = express()
const uuid = require('uuid/v4')

const snacks = []

route.get('/',(req,res,next)=>{

  res.status(200).json({message: 'we got the snacks, bruh'})
})

route.get('/snacks/:id')
