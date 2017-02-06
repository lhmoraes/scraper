"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    return {
        register: (server) => {
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
                        ],
                        enableDocumentation: true,
                        documentationPath: '/docs'
                    }
                }
            ], (error) => {
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
//# sourceMappingURL=index.js.map