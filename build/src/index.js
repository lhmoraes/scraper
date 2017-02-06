"use strict";
const Server = require("./server");
// import * as Database from "./database";
const Configs = require("./configurations");
console.log(`Running enviroment ${process.env.NODE_ENV || "dev"}`);
//Init Database
// const dbConfigs = Configs.getDatabaseConfig();
// const database = Database.init(dbConfigs);
//Starting Application Server
const serverConfigs = Configs.getServerConfigs();
// const server = Server.init(serverConfigs, database);
const server = Server.init(serverConfigs);
server.start(() => {
    console.log('Server running at:', server.info.uri);
});
//# sourceMappingURL=index.js.map