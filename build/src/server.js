"use strict";
const Hapi = require("hapi");
// import * as Tasks from "./tasks";
// import * as Users from "./users";
const Scraper = require("./scraper");
// import { IDatabase } from "./database";
// export function init(configs: IServerConfigurations, database: IDatabase) {
function init(configs) {
    const port = process.env.port || configs.port;
    const server = new Hapi.Server();
    server.connection({
        port: port,
        routes: {
            cors: true
        }
    });
    //  Setup Hapi Plugins
    const plugins = configs.plugins;
    const pluginOptions = {
        // database: database,
        serverConfigs: configs
    };
    console.log(plugins);
    plugins.forEach((pluginName) => {
        var plugin = (require("./plugins/" + pluginName)).default();
        console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
        plugin.register(server, pluginOptions);
    });
    //Init Features
    // Tasks.init(server, configs, database);
    // Users.init(server, configs, database);
    // Scraper.init(server, configs, database);
    Scraper.init(server, configs);
    return server;
}
exports.init = init;
;
//# sourceMappingURL=server.js.map