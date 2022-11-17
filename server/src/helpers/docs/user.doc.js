
const user = {
    user: {
        type: "object",
        properties:{
            name: {type: "string"},
            lastName: {type: "string"},
            mail: {type: "string"},
            password: {type: "string"},
            user_role: {type: "string"},
            socials: {
                type: "array",
                items: {
                    type:"string"
                }
            },
            posts: {
                type: "array",
                items: {
                    type:"string"
                }
            },
            saved:{
                type: "array",
                items: {
                    type:"string"
                }
            },
            following:{
                type: "array",
                items: {
                    type:"string"
                }
            },
            followers:{
                type: "array",
                items: {
                    type:"string"
                }
            },
        },
        required:["name","lastName","mail","password"],
        example:{
            "name": "anonimo3Prueba",
            "lastName": "PruebaPosts",
            "mail": "anonimo3Prueba@gmail.com",
            "password": "contraseniaDificil",
        }
    }
}

const signUpUser = {
    summary: "signUp a User",
    tags:["User"],
    requestBody:{
        required: true,
        content:{
            "application/json":{
                schema:{
                    $ref:'#/components/schemas/user'
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
        },
        404:{
            description: "missing data or invalid password"
        },
        400:{
            description: "error"
        }
    }
}
const signInUser={
    summary: "signIn a User ",
    tags:["User"],
    requestBody:{
        required: true,
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    example:{
                        "mail": "anonimo3Prueba@gmail.com",
                        "password": "contraseniaDificil"
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
        },
        404:{
            description: "mail or password incorrects"
        },
    }
}

const userRoute = {
    "/user/signup":{
        post: signUpUser,
    },
    "/user/signin":{
        post: signInUser,
    }
}

module.exports = {user,userRoute};