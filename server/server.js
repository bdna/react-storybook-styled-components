const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fs = require("fs");
const axios = require("axios");

const config = require("../src/config");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  const raw = fs.readFileSync("server/data.json");
  const data = JSON.parse(raw);

  const googleRequestUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=${
    config.googleAPIKey
  }&placeid=${data.placeId}`;

  axios
    .get(googleRequestUrl)
    .then(googleResponse => {
      if (!googleResponse.data.result) {
        return res
          .status(400)
          .send({ error: "This place ID is not recognised" });
      }

      const { reviews } = googleResponse.data.result;
      if (!reviews || !reviews.length) {
        return res.status(404).send({ error: "This place has no reviews" });
      }

      res.send({
        ...data,
        reviews: reviews.map(review => ({
          // Generate a unique ID based on the review timestamp and author's name
          id: `${review.time}${review.author_name}`,
          name: review.author_name,
          text: review.text
        }))
      });
    })
    .catch(next);
});

app.put("/", (req, res) => {
  if (!req.body || !req.body.placeId || !req.body.theme) {
    return res
      .status(400)
      .send({ error: "Request must contain a placeId and a theme" });
  }

  if (!config.availableThemes.map(theme => theme.id).includes(req.body.theme)) {
    return res
      .status(400)
      .send({
        error: `Invalid theme - available themes are: ${config.availableThemes.join(
          ","
        )}`
      });
  }

  fs.writeFileSync("server/data.json", JSON.stringify(req.body));
  res.sendStatus(200);
});

app.listen(port, () => console.log(`Server listening on ${port}`));
