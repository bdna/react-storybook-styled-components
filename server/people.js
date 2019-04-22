const uuid = require("uuid/v1");
const db = require("./db.js");

const peopleRouter = app => {
  app.get("/people", getPeople);
  app.post("/people", createPerson);
  app.patch("/people/:id", setPersonVisibility);
  app.delete("/people/:id", deletePerson);
};

module.exports = peopleRouter;

// Controllers
const getPeople = (req, res) => {
  const sortOrder = req.query.sortBy === "email" ? "email" : "name";

  res.send(db.get("people").sortBy(sortOrder));
};

const createPerson = (req, res) => {
  const id = uuid();
  db.get("people")
    .push({
      id,
      name: req.body.name,
      age: req.body.age,
      balance: req.body.balance,
      email: req.body.email,
      address: req.body.address
    })
    .write();

  res.send(db.get("people").find({ id }));
};

const setPersonVisibility = (req, res) => {
  db.get("people")
    .find({ id: req.params.id })
    .assign({ visible: req.body.visible })
    .write();

  res.send(db.get("people").find({ id: req.params.id }));
};

const deletePerson = (req, res) => {
  db.get("people")
    .remove({ id: req.params.id })
    .write();

  res.sendStatus(200);
};
