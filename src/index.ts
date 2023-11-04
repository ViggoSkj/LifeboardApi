import Express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose"
dotenv.config()
const app = Express()
const port = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log("Connected to mongodb")
}).catch(err => {
    console.error(err)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})