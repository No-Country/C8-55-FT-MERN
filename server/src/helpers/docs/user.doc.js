
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
            "name": "Mateoucho1Prueba",
            "lastName": "PruebaPosts",
            "mail": "Mateoucho1Prueba@gmail.com",
            "password": "$2b$10$RGV4537sESt6C1z1pGQWHe9BDSAXoaCQ0996Vm4x42P2FsASIZmBu",
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

const userRoute = {
    "/user/signup":{
        post: signUpUser,
    },
    "/user/singin":{
        
    }
}

module.exports = {user,userRoute};