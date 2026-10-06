import mongoose from "mongoose";

// const dns = require("dns");
// dns.setServers(["8.8.8.8" , "8.8.4.4"]);
// dns.setDefaultResultOrder("ipv4first")

export default async function connectDB() {
    if (mongoose.connections[0].readyState === 1) return;
    
  await  mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@crm.ez0fnbf.mongodb.net/?appName=CRM`)

}
