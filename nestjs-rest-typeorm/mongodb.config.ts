
const serverString: string = "mongodb+srv://steviggio:adminpwd@steviggio-nest.nbkbkeq.mongodb.net/?retryWrites=true&w=majority&appName=steviggio-nest"


// Node.js connection sample code 

import { MongoClient, ServerApiVersion } from "mongodb"
const uri = "mongodb+srv://steviggio:adminpwd@steviggio-nest.nbkbkeq.mongodb.net/?appName=steviggio-nest";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


// mongodb
const MONGO_PROTOCOL: string = process.env.MONGO_PROTOCOL || "localhost"
const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "steviggio"
const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "adminpwd"
// const MONGO_DATABASE: string = process.env.MONGO_DATABASE || "steviggio-nest"
const MONGO_DB: string = process.env.MONGO_PORT || 'steviggio-nest' // Cluster's name
const MONGO_UUID: string = process.env.MONGO_UUDI || "nbkbkeq"
const MONGO_DOMAIN_NAME: string = process.env.MONGO_DOMAIN_NAME || `${MONGO_UUID}.mongodb.net`
const MONGO_URL: string = process.env.MONGO_URL ||
  `${MONGO_PROTOCOL}${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DB}.${MONGO_DOMAIN_NAME}/?appName=${MONGO_DB}`
const MONGO_PORT: number = +process.env.MONGO_PORT || 27017

// mongodb://localhost:27017


// mlab
// const MLAB_USER = process.env.MLAB_USER || 'steviggio'
// const MLAB_PASS = process.env.MLAB_PASS || 'adminpwd'
// const MLAB_HOST = process.env.MLAB_HOST || 'nbkbkeq.mongodb.net'
// const MLAB_PORT = +process.env.MLAB_PORT || 27017
// const MLAB_DATABASE =
//   process.env.MLAB_DATABASE || 'steviggio-nest'
// const MLAB_URL =
//   process.env.MLAB_URL ||
//   `mongodb://${MLAB_USER}:${MLAB_PASS}@${MLAB_HOST}:${MLAB_PORT}/${MLAB_DATABASE}`

// mongodb
// const MONGO_URL: string = process.env.MONGO_PORT
//   ? `mongodb://localhost:${process.env.MONGO_PORT}`
//   : MLAB_URL
// const MONGO_PORT: number = +process.env.MONGO_PORT || 11049
// const MONGO_DB: string = process.env.MONGO_PORT ? 'chnirt-nest' : MLAB_DATABASE

