import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function HelloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Gustavo Roberto",
    email: "Gustavo@robert.com",
    password: "123123",
    techs: [
      "NodeJs",
      "ReactJs",
      { title: "Javascript", experience: 100 },
      { title: "Java", experience: 100 },
    ],
  });

  return response.json(user);
}
