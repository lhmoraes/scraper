import {IPlugin, IPluginInfo} from "../interfaces";
import * as Hapi from "hapi";

export default (): IPlugin => {
    return {
        register: (server: Hapi.Server) => {
            server.register([
                require('inert'),
                require('vision'),
                {
                    register: require('hapi-swagger'),
                    options: {
                        info: {
                            title: 'Scraper Api',
                            description: 'Scraper Api Documentation',
                            version: '1.0'
                        },
                        tags: [
                            {
                                'name': 'b2b',
                                'description': 'B2S Api interface.'
                            },
                            // {
                            //     'name': 'users',
                            //     'description': 'Api users interface.'
                            // }
                        ],
                        enableDocumentation: true,
                        documentationPath: '/docs'
                    }
                }
            ]
                , (error) => {
                    if (error) {
                        console.log('error', error);
                    }
                });
        },
        info: () => {
            return {
                name: "Swagger Documentation",
                version: "1.0.0"
            };
        }
    };
};