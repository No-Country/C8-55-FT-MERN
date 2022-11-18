const group = {
    group:{
        type: "object",
        properties:{
            groupName:{
                type:"string",
                description:"group name"
            },
            members:{
                type: "array",
                items: {
                    type: "string",
                    description: "id of users of the group"
                },
            },
            ownerId:{
                type: "string",
                description: "id of user owner"
            }
        },
        required:["groupName","members","ownerId"],
        example:{
            groupName: "grupoEjemplo",
            members: ["63744440f27838af2a4db75c","63743f57d8c106bb72a1c066"],
            ownerId: "63744440f27838af2a4db75c"
        }
        
    },
}
const getGroups = {
    summary: "returns all groups",
    tags:["Group"],
    security:[{bearerAuth:[]}],
    responses:{
        200:{
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        type:"array",
                        items:{
                            $ref: '#/components/schemas/group'
                        }
                    }
                }
            }
        },
        500:{
            description: "fail in return all groups"
        }
    }
}
const getGroup = {
    summary: "returns a group serched by Id",
    tags:["Group"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "group id",
            example: "63754c3a7d5154dc39aefb79"
        }
    ],
    responses:{
        200:{
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        $ref: '#/components/schemas/group'
                    }
                }
            }
        },
        500:{
            description: "group not found"
        }
    }
}
const postGroups={
    summary: "create a group",
    tags:["Group"],
    security:[{bearerAuth:[]}],

    requestBody:{
        required: true,
        content:{
            "application/json":{
                schema:{
                    $ref:'#/components/schemas/group'
                }
            }
        }
    },
    responses:{
        200:{
            description: "OK",
        },
        500:{
            description: "fail in create a group"
        }
    }
}
const putGroup = {
    summary: "update a group serched by Id",
    tags:["Group"],
    security:[{bearerAuth:[]}],

    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "group id",
            example: "63754c3a7d5154dc39aefb79"
        }
    ],
    requestBody:{
        required: true,
        content:{
            "application/json":{
                schema:{
                    $ref:'#/components/schemas/group'
                }
            }
        }
    },
    responses:{
        200:{
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        $ref: '#/components/schemas/group'
                    }
                }
            }
        },
        500:{
            description: "group not found"
        }
    }
}
const deleteGroup ={
    summary: "delete a group serched by Id",
    tags:["Group"],
    security:[{bearerAuth:[]}],

    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "group id",
        }
    ],

    responses:{
        200:{
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        $ref: '#/components/schemas/group'
                    }
                }
            }
        },
        500:{
            description: "group not found"
        }
    }
}

const groupRoute = {
    "/group":{
        get: getGroups,
        post: postGroups
    },
    "/group/{id}":{
        get: getGroup,
        put: putGroup,
        delete: deleteGroup
    }
}
module.exports = {groupRoute,group};