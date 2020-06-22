const functions = require("firebase-functions");
const express = require("express");

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
exports.app = functions.https.onRequest(app);
