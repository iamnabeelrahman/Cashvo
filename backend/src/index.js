require("dotenv").config(); 
const dbconnect = require('./db/index.js');
const {app}  = require("./app.js")

dbconnect()
.then(() => {
    app.listen(process.env.PORT || 3001, () => {
        console.log("server is running on port ", process.env.PORT);        
    } )
})
.catch((error) => {
    console.error("Database connection failed");
    
})