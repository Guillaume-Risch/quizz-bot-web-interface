import express from "express"
import { Questions } from "../entity/Questions"
import * as fs from "fs"

export function add(req: express.Request, res: express.Response) {
    console.log(req.body)
    let test =  Buffer.from(req.body)
    console.log(test.toString())
    res.sendStatus(200)

}
export function web_interface(req: express.Request, res: express.Response) {
    res.render("questions", { title: "ça marche ?", message: "ça marche !", questions: ["a", "b", "c"] })
}
export function serve_js(req: express.Request, res: express.Response) {
    fs.readFile("./bin/static/questions.js", (err, data) => {
        if (err != null) {
            console.log(fs.readdirSync("."))
            console.log(err)
            res.sendStatus(404)
        }
        else {
            console.log(data)
            res.type("js")
            res.send(data.toString())
            res.sendStatus(200)
        }
    })
}