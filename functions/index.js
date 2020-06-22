const functions = require("firebase-functions");
const express = require("express");
const axios = require("axios");

const app = express();
app.get("/title", (req, res) => {
  res.send(`${Date.now()}`);
});
/**
 * Using public, we can cache the content to Server, if we use private we can only store on user browser.
 * max-age: How long we can cache the content on user browser.
 * s-maxage: How long we can cache the content on server.
 *
 */
app.get("/title-cache", (req, res) => {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  res.send(`${Date.now()}`);
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

app.get("/weather", async (req, res) => {
  const { api } = functions.config().weather;
  const cityName = req.query.name;
  if (cityName) {
    const url = `http://api.openweathermap.org/data/2.5/weather`;
    const response = await axios.get(url, {
      params: {
        q: cityName,
        units: "metric",
        appid: api,
      },
    });

    const { data } = await response;
    res.send(data);
  } else {
    res.send({
      message: "Please provide city name",
    });
  }
});

exports.app = functions.https.onRequest(app);
