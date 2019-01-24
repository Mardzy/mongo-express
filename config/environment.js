const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV || 'development';
const dbURI = process.env.MONGODB_URI || `mongodb://localhost/trucks-${env}`;

module.exports = { port, env, dbURI };
