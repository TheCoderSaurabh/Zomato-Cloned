import dotenv from 'dotenv';
dotenv.config()

import app from "./app.js";
const PORT = dotenv.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`server is running on ${PORT}`)
})
