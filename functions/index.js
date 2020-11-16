const functions = require('firebase-functions');

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51HfmjWLijcXlorlUmKIlOXRfWpihmwD52f6fopfuDwZV6vzSVmcVAFZ125Krc8zioYNRe7iIIF7WoJyvROX2cPgY006QiWJOXM"
  );

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
    description: "Test charge",
    shipping: {
      "name": "Jenny Rosen",
      "address": {
        "line1": "510 Townsend St",
        "postal_code": "98140",
        "city": "San Francisco",
        "state": "CA",
        "country": "US"
      }
    }
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-3865e/us-central1/api