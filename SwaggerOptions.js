const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "CRUD API with Express",
            version: "0.1.0",
            description:
                "Este es un CRUD API creado para el sistema de un politécnico. " +
                "\nMade with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Jose Ventura",
                email: "joseventura.a03@gmail.com",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/hello",
            },
            {
                url: "http://localhost:3000/users",
            },
            {
                url: "http://localhost:3000/teacher",
            },
        ],
    },
    apis: ["./routes/index.js", "./routes/teacher.js", "./routes/users.js"],
};

module.exports = swaggerOptions;