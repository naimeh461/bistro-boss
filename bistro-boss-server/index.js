const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb"); 

// Middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tktqebe.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
    try {
      await client.connect();
      const menuCollection = client.db('bistroboss').collection("menu collection");
      app.get("/menu", async(req, res) =>{
          const result = await menuCollection.find().toArray();
          res.send(result);
      })
    } finally {

      // await client.close();
    }
  }

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("boss is running");
});

app.listen(port, () => {
  console.log(`🚀 Bistro boss is sitting on port ${port}`);
});
