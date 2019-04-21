import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    return res
        .status(200)
        .send({ message: "Congrats! Your first end point is working!" });
});

app.listen(PORT, () =>
    console.log(`<=== Server Listening on port ${PORT} ===>`)
);
