#!/usr/bin/env node
import minimist from "minimist";
import express from "express";
import { rps, rpsls } from "./lib/rpsls.js";

var args = minimist(process.argv.slice(2));
const PORT = args.port || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Check endpoint at /app/ that returns 200 OK
app.get("/app/", (req, res) => {
    res.status(200).send("200 OK");
});

//Endpoint /app/rps/ that returns {"player":"(rock|paper|scissors)"}
app.get("/app/rps/", (req, res) => {
    res.status(200).send(JSON.stringify(rps()));
});

//Endpoint /app/rpsls/ that returns {"player":"(rock|paper|scissors|lizard|spock)"}
app.get("/app/rpsls/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls()));
});

////Endpoint /app/rps/play/ should accept request bodies in the following form: shot=(rock|paper|scissors) (URLEncoded)
app.post("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot)));
});

//Endpoint /app/rps/play/ should accept request bodies in the following form: {"shot":"(rock|paper|scissors)"} (JSON)
app.post("/app/rps/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot)));
});

//Endpoint /app/rpsls/play/ should accept request bodies in the following form: shot=(rock|paper|scissors|lizard|spock) (URLEncoded)
app.post("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
});

//Endpoint /app/rpsls/play/ should accept request bodies in the following form: {"shot":"(rock|paper|scissors|lizard|spock)"} (JSON)
app.post("/app/rpsls/play/", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
});

//Endpoint /app/rps/play/(rock|paper|scissors)/
app.get("/app/rps/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot)));
});

//Endpoint /app/rpsls/play/(rock|paper|scissors|lizard|spock)/
app.get("/app/rpsls/play/:shot", (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
});

//Default API endpoint that returns 404 NOT FOUND for any endpoints that are not defined
app.get("*", (req, res) => {
    res.status(404).send("404 NOT FOUND");
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});