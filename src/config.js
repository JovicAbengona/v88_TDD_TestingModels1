// Database Configuration
const PGP = require("pg-promise")();
const Connection = "postgresql://postgres:qqqrwqeqwqeqS6@db:5432/express_db";
const db = PGP(Connection);

// Redis Configuration
const Redis = require("redis");
const Client = Redis.createClient({
    host: "redis"
});

Client.on("connect", () => {
    console.log("Connected to Redis");
});

module.exports = {
    Client,
    db
}