"use strict";
const nconf = require("nconf");
const path = require("path");
//Read Configurations
const configs = new nconf.Provider({
    env: true,
    argv: true,
    store: {
        type: 'file',
        file: path.join(__dirname, `./config.dev.json`)
    }
});
// export interface IDataConfiguration {
//     connectionString: string;
// }
// export function getDatabaseConfig(): IDataConfiguration {
//     return configs.get("database");
// }
function getServerConfigs() {
    return configs.get("server");
}
exports.getServerConfigs = getServerConfigs;
//# sourceMappingURL=index.js.map