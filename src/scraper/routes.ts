import * as Hapi from "hapi";
import * as Joi from "joi";
import B2SController from "./b2s-controller";
// import * as TaskValidator from "./task-validator";
// import { jwtValidator } from "../users/user-validator";
// import { IDatabase } from "../database";
import { IServerConfigurations } from "../configurations";

export default function (server: Hapi.Server, configs: IServerConfigurations) {

    const b2sController = new B2SController(configs);
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