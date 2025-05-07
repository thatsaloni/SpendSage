const express=require("express")
const cors=require("cors")
const morgan=require("morgan")
const dotenv=require("dotenv")
const colors=require("colors")
const connectDB=require("./config/connectDB")
//CONFIG DOT ENV FILE
dotenv.config()

//DB call
connectDB()

//rest object
const app=express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// app.get('/', (req,res)=>{
//     res.send(`<h1>Hello from server!</h1>`)
// })

app.use('/api/v1/users',require('./routes/userRoute'))

app.use('/api/v1/transactions',require('./routes/transactionRoute'))

const PORT = 8080 || process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})