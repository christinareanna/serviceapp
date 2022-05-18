// const express = require("express")
// const app = express()
// const database = require("./database_connection")
// const cors = require("cors")
// const bodyParser = require("body-parser")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const SECRET = "any_secret_you_want_to_use"

// app.use(cors())
// app.use(bodyParser.json())

// app.get("/", (request, response, next) => {
//     response.sendStatus(200)
// })
// app.listen(9000)

// app.post("/users", (request, response, next) => {
//     bcrypt.hash(request.body.password, 10)
//         .then(hashedPassword => {
//             return database("user").insert({
//                 email: request.body.email,
//                 password_digest: hashedPassword
//             })
//                 .returning(["id", "email"])
//                 .then(users => {
//                     response.json(users[0])
//                 })
//                 .catch(error => next(error))
//         })
// })

// app.get("/users", (request, response, next) => {
//     database("user")
//         .then(users => {
//             response.json(users)
//         })
// })

// app.post("/login", (request, response, next) => {
//     database("user")
//         .where({ email: request.body.email })
//         .first()
//         .then(user => {
//             if (!user) {
//                 response.status(401).json({
//                     error: "No email by that user."
//                 })
//             } else {
//                 return bcrypt
//                     .compare(request.body.password, user.password_digest)
//                     .then(isAuthenticated => {
//                         if (!isAuthenticated) {
//                             response.status(401).json({
//                                 error: "Unauthorized Access!"
//                             })
//                         } else {
//                             return jwt.sign(user, SECRET, (error, token) => {
//                                 response.status(200).json({ token })
//                             })
//                         }
//                     })
//             }
//         })
// })


// app.get("/verify", (request, response, next) => {
//     const token = request.headers.authorization.split(" ")[1]
//     jwt.verify(token, SECRET, (error, decodedToken) => {
//         if (error) {
//             response.status(401).json({
//                 message: "Unauthorized Access!"
//             })
//         } else {
//             response.status(200).json({
//                 id: decodedToken.id,
//                 email: decodedToken.email
//             })
//         }
//     })
// })



const express = require('express');
const app = express();
const cors = require("cors");

app.listen(5000, () => {
    console.log("server is running on port 5000")
});