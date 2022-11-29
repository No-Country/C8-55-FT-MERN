
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
                    type:"string",
                    description:"id user references"
                }
            },
            posts: {
                type: "array",
                items: {
                    type:"string",
                    description:"id post references"
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
                    type:"string",
                    description:"id user references"
                }
            },
            followers:{
                type: "array",
                items: {
                    type:"string",
                    description:"id user references"
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
const followingUser={
    summary: "follows an User",
    tags:["User"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of user followed",
        }
    ],
    responses:{
        200:{description:"OK"},
        404:{description:"Error"},
    }
};

const userInfo ={
    summary: "Returns user information",
    tags:["User"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "desired user id",
        }
    ],
    responses:{
        200:{description:"OK"},
        404:{description:"Error"},
    }
};

const userRoute = {
    "/user/signup":{
        post: signUpUser,
    },
    "/user/signin":{
        post: signInUser,
    },
    "/user/addfollowing/{id}":{
        post:followingUser,
    },
    "/user/userInfo/{id}":{
        get: userInfo,
    }
}

module.exports = {user,userRoute};