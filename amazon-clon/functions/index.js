const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I1nnmGX0HtakeKH39iAEca3rlhZHe92PdKLCHRMd4Phsv8h5MY1fKZxJdnG9NjAlaz00TSsC0CcHYYquGsHJg0400NbqRd19R"
);

// API

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API roots
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved. for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created something
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-70dcc/us-central1/api
