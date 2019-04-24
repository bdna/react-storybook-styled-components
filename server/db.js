const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const uuid = require("uuid/v1");

const adapter = new FileSync("./server/db.json");
const db = low(adapter);

db.defaults({
  people: [
    {
      id: uuid(),
      name: "Ryan",
      age: 32,
      balance: 1000,
      email: "ryan@example.com",
      address: "Belfast"
    },
    {
      id: uuid(),
      name: "Hannah",
      age: 28,
      balance: 1000,
      email: "hannah@example.com",
      address: "Belfast"
    },
    {
      id: uuid(),
      name: "Tester",
      age: 45,
      balance: 1000,
      email: "tester@example.com",
      address: "Dublin"
    }
  ]
}).write();

module.exports = db;
