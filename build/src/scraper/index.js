"use strict";
const routes_1 = require("./routes");
//export function init(server: Hapi.Server, configs: IServerConfigurations, database: IDatabase) {
function init(server, configs) {
    routes_1.default(server, configs);
}
exports.init = init;
//# sourceMappingURL=index.js.map