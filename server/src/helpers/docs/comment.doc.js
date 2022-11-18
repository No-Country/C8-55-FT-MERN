const comment = {
    comment:{
        type:"object",
        properties:{
            userId:{type:"string"},
            postId:{type:"string"},
            text:{type:"string"},
            image:{type:"string"},
            likes:{
                type:"array",
                items:{
                    type:"string",
                }
            },
            replies:{
                type:"array",
                items:{
                    type:"string"
                }
            },
            createdAt:{
                type:"string",
                description:"fecha de creacion"
            },
            updatedAt:{
                type:"string",
                description:"fecha de edicion"
            }
        },
        example:{
            "_id": {
                "$oid": "6373b61090efc97fbbc9ae81"
            },
            "userId": {
                "$oid": "6372b5c20900f511b041bbe7"
            },
            "postId": {
                "$oid": "6373b5f890efc97fbbc9ae7d"
            },
            "text": "Hola che",
            "likes": [
                "6372b5c20900f511b041bbe7"
            ],
            "replies": [
                {
                    "$oid": "63751cc59619afff1d155c92"
                },
                {
                    "$oid": "63751cf245aa6c4178cb02a1"
                },
                {
                    "$oid": "63751d2ed3741e2c83cede93"
                },
                {
                    "$oid": "63751e62b1b0aba288ff6442"
                }
            ],
            "createdAt": {
                "$date": "2022-11-15T15:53:52.837Z"
            },
            "updatedAt": {
                "$date": "2022-11-16T17:31:14.284Z"   
            },
            "__v": 0,
        }
    }

}

const commentUser ={
    summary: "returns all comments of user",
    tags:["Comment"],
    parameters:[
        {
            in: "path",
            name: "userId",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of user",
            example: "6374f2d48f4b9f8194744af5"
        }
    ],
    responses:{
        200:{
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        type:"array",
                        items:{
                            type:"object",
                            $ref: '#/components/schemas/comment'
                        }
                    }
                }
            }
        },
        500:{
            description: "fail in return all comments"
        }
    }
}

const getComment ={
    summary: "returns a comment serched by id",
    tags:["Comment"],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of comment",
            example: "637579058f710f31aa7d9422"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        $ref: '#/components/schemas/comment'
                    }
                }
            }
        },
        500:{description: "comment not found"}
    }
}

const commentPost={
    summary:"coment a post",
    tags:["Comment"],
    requestBody:{
        required:true,
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        userId:{type:"string"},
                        text:{type:"string"},
                        postId:{type:"string"},
                        image:{type:"string"},
                    },
                    required:["userId","text","postId"],
                    example:{
                        userId:"63744440f27838af2a4db75c",
                        postId:"6375a37ae5996621197811e9",
                        text:"un comentario mas",
                    }
                }
            }
        }
    },
    responses:{
        200:{description:"OK"},
        500:{description:"Error"}
    }
}

const commentReply={
    summary:"coment a comment",
    tags:["Comment"],
    requestBody:{
        required:true,
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        commentId:{type:"string"},
                        userId:{type:"string"},
                        text:{type:"string"},
                        postId:{type:"string"},
                        image:{type:"string"},
                    },
                    required:["commentId","userId","text","postId"],
                    example:{
                        commentId:"6375a3a2e5996621197811f2",
                        userId:"63744440f27838af2a4db75c",
                        postId:"6375a37ae5996621197811e9",
                        text:"mas comentarios",
                    }
                }
            }
        }
    },
    responses:{
        200:{description:"OK"},
        500:{description:"Error"}
    }
}

const commentLike={
    summary: "like a comment searched by id",
    tags:["Comment"],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of comment",
            example: "637579058f710f31aa7d9422"
        }
    ],
    requestBody:{
        required:true,
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        userId:{type:"string"},
                    },
                    required:["userId"],
                    example:{
                        userId:"63744440f27838af2a4db75c",
                    }
                }
            }
        }
    },
    responses:{
        200:{description:"OK"},
        500:{description:"Error"}
    }
}

const commentRoutes={
    "/comment/user_comment/{userId}":{
        get:commentUser,
    },
    "/comment/get_comment/{id}":{
        get: getComment,
    },
    "/comment/":{
        post: commentPost,
    },
    "/comment/reply":{
        put:commentReply
    },
    "/comment/like/{id}":{
        put:commentLike,
    }
}

module.exports = {comment,commentRoutes};