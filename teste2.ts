import { DATA } from "./data";
import { randomUUID } from "crypto";
import { isValidUser } from "./utils";
import { API } from "./types/data.type";
import { RequestHandler } from "express";


const addUser: RequestHandler = (req, res) => {
  var name = req.body.name;
  var job = req.body.job;

  if (isValidUser(name, job)) {
    var newUser: API.IDataType = {
      id: randomUUID(),
      name: name,
      job: job,
    };

    DATA.push(newUser);
    res
      .status(201)
      .send({
        sucess: true,
        data: newUser,
        message: "Usuário cadastrado com sucesso!!",
      });
  }

  res
    .status(400)
    .send({ Error: { sucess: false, message: "Insira os campos correctos!" } });
};

module.exports = {
  addUser,
};
