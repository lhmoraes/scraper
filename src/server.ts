import * as Hapi from "hapi";
import { IPlugin } from "./plugins/interfaces";
import { IServerConfigurations } from "./configurations";
// import * as Tasks from "./tasks";
// import * as Users from "./users";
import * as Scraper from "./scraper";
// import { IDatabase } from "./database";


// export function init(configs: IServerConfigurations, database: IDatabase) {
export function init(configs: IServerConfigurations) {
    const port = process.env.port || configs.port;
    const server = new Hapi.Server();

    server.connection({
        port: port,
        routes: {
            cors: true
        }
    });

    //  Setup Hapi Plugins
    const plugins: Array<string> = configs.plugins;
    const pluginOptions = {
        // database: database,
        serverConfigs: configs
    };


console.log(plugins);

    plugins.forEach((pluginName: string) => {
        var plugin: IPlugin = (require("./plugins/" + pluginName)).default();
        console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
        plugin.register(server, pluginOptions);
    });

    //Init Features
    // Tasks.init(server, configs, database);
    // Users.init(server, configs, database);
    // Scraper.init(server, configs, database);
    Scraper.init(server, configs);

    return server;
};
