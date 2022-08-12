import express from "express"
import route from "./routers/users.routes"

const app = express()

app.use(express.json())
app.use('/', route)

app.listen(3001, () => console.log('Started'))

export default app