const express = require('express')
const route = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 4200

var snacks =[]

route.disable('x-powered-by')
if (process.env.NODE_ENV === 'development')
route.use(bodyParser.json())

const snacksRoutes = require('./src/routes/snacks')
route.use('/snacks', snacksRoutes)

route.get('/snacks',(req,res,next)=>{

  res.status(200).json({message: `we got the snacks ${snacks}`})
})

route.get('/snacks/:id',(req,res,next)=>{
  const id = req.params.id
  res.send(id)
  // res.status(200).json({message:' bruhhhh'})
})

route.post('/snacks/:snack', (req, res, next)=>{
  //arr.push(req.params.snack)
  snacks.push(req.params.snack)
  res.send(snacks)
})
route.post('/snacks/:id', (req,res,next) => {
  let id = uuid().json("/snacks/:id")
  snacks.push(id)
  res.status(200).json({message:`id: ${snacks}`})
})
route.get('/snacks/:')
route.get('/',(req,res,next)=>{
  res.status(200).json({message:' bruhhhh'})
})
route.listen(port,()=>{console.log(`listening to derp ${port}`)})
