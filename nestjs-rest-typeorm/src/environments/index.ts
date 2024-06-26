import * as dotenv from "dotenv"
dotenv.config()

// environmnent
const NODE_ENV: string = process.env.NODE_ENV || "development"

// author
const AUTHOR: string = process.env.AUTHOR || "Steviggio"

// application
const DOMAIN: string = process.env.DOMAIN || "localhost"
const PORT: number = +process.env.PORT || 4600
const END_POINT: string = process.env.END_POINT || "graphql";
const RATE_LIMIT_MAX: number = +process.env.RATE_LIMIT_MAX || 10000
const GRAPHQL_DEPTH_LIMIT: number = +process.env.GRAPHQL_DEPTH_LIMIT || 3

// static
const STATIC: string = process.env.STATIC || 'static'

// mongodb cloud
// const MONGO_PROTOCOL: string = process.env.MONGO_PROTOCOL || "mongodb+srv://"
// const MONGO_USERNAME: string = process.env.MONGO_USERNAME || "steviggio"
// const MONGO_PASSWORD: string = process.env.MONGO_PASSWORD || "adminpwd"
// const MONGO_DATABASE: string = process.env.MONGO_DATABASE || "steviggio-nest"
// const MONGO_DB: string = process.env.MONGO_PORT || 'steviggio-nest' // Cluster's name
// const MONGO_UUID: string = process.env.MONGO_UUDI || "nbkbkeq"
// const MONGO_DOMAIN_NAME: string = process.env.MONGO_DOMAIN_NAME || `${MONGO_UUID}.mongodb.net`
// const MONGO_URL: string = process.env.MONGO_URL ||
//   `${MONGO_PROTOCOL}${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_DB}.${MONGO_DOMAIN_NAME}/?appName=${MONGO_DB}`
// const MONGO_PORT: number = +process.env.MONGO_PORT || 1100


// Mongodb localhost 
const MONGO_URL: string = process.env.MONGO_PORT || `mongodb://localhost:${process.env.MONGO_PORT}`
const MONGO_PORT: number = +process.env.MONGO_PORT || 27017
const MONGO_DB: string = process.env.MONGO_PORT || 'steviggio-nest'
// mongodb://localhost:27017

// bcrypt
const SALT: number = +process.env.SALT || 10

// JsonWebToken
const ISSUER: string = process.env.ISSUER || 'https://www.steviggio.fr'
const ACCESS_TOKEN: string = process.env.ACCESS_TOKEN || 'access-token'
const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || 'basic'
const REFRESH_TOKEN: string = process.env.REFRESH_TOKEN || 'refresh-token'
const REFRESH_TOKEN_SECRET: string =
  process.env.REFRESH_TOKEN_SECRET || 'refresh-token-key'
const EMAIL_TOKEN: string = process.env.EMAIL_TOKEN || 'email-token'
const EMAIL_TOKEN_SECRET: string =
  process.env.EMAIL_TOKEN_SECRET || 'email-token-key'
const RESETPASS_TOKEN: string = process.env.RESETPASS_TOKEN || 'resetpass-token'
const RESETPASS_TOKEN_SECRET: string =
  process.env.RESETPASS_TOKEN_SECRET || 'resetpass-token-key'

// passport
// const GOOGLE_CLIENT_ID: string = process.env.GOOGLE_CLIENT_ID || 'xxx'
// const GOOGLE_CLIENT_SECRET: string = process.env.GOOGLE_CLIENT_SECRET || 'xxx'
// const GOOGLE_CALLBACK_URL: string =
//   process.env.GOOGLE_CALLBACK_URL || 'auth/google/callback'

// const FACEBOOK_APP_ID: string = process.env.FACEBOOK_APP_ID || 'xxx'
// const FACEBOOK_APP_SECRET: string = process.env.FACEBOOK_APP_SECRET || 'xxx'
// const FACEBOOK_CALLBACK_URL: string =
//   process.env.FACEBOOK_CALLBACK_URL || 'auth/facebook/callback'

export {
  NODE_ENV,
  DOMAIN,
  AUTHOR,
  PORT,
  END_POINT,
  RATE_LIMIT_MAX,
  GRAPHQL_DEPTH_LIMIT,
  STATIC,
  MONGO_URL,
  SALT, MONGO_DB,
  MONGO_PORT,
  ISSUER,
  ACCESS_TOKEN,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN,
  REFRESH_TOKEN_SECRET,
  EMAIL_TOKEN,
  EMAIL_TOKEN_SECRET,
  RESETPASS_TOKEN,
  RESETPASS_TOKEN_SECRET
}