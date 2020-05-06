/*
 *
 * app.ts
 * Author: Thomas Jay
 * Created: May 6, 2020
 *
 * Desciption: Simple typescript example of express and node.js.
 */

import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server started");
  console.log("Sweet!");
  console.log("Its running...");
});
