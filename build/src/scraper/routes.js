"use strict";
const b2s_controller_1 = require("./b2s-controller");
function default_1(server, configs) {
    const b2sController = new b2s_controller_1.default(configs);
    server.bind(b2sController);
    // server.route({
    //     method: 'GET',
    //     path: '/b2s/categories',
    //     config: {
    //         handler: taskController.getTaskById,
    //         auth: "jwt",
    //         tags: ['api', 'tasks'],
    //         description: 'Get BestBuy Categories.',
    //         plugins: {
    //             'hapi-swagger': {
    //                 responses: {
    //                     '200': {
    //                         'description': 'Categories founded.'
    //                     },
    //                     '404': {
    //                         'description': 'Category does not exist.'
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // });
    server.route({
        method: 'GET',
        path: '/b2s/categories',
        config: {
            handler: b2sController.getCategories,
            // auth: "jwt",
            tags: ['api', 'b2s categories'],
            description: 'Get all categories.',
        }
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
//# sourceMappingURL=routes.js.map