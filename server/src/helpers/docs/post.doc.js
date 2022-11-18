const { text } = require("express");

const post={
    post:{
        type:"object",
        properties:{
            userId:{
                type:"string",
                description:"referencia a id de user"
            },
            text: {
                type:"string",
            },
            image:{
                type:"string"
            },
            comments:{
                type:"array",
                items:{
                    type:"string",
                    description:"referencia a id de comment"
                },
            },
            likes:{
                type:"array",
                items:{
                    type:"string",
                    description:"referencia a id de user"
                },
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
              "$oid": "6375a37ae5996621197811e9"
            },
            "userId": {
              "$oid": "6374f2d48f4b9f8194744af5"
            },
            "text": "proband01",
            "image": "proband011",
            "comments": [
              {
                "$oid": "6375a3a2e5996621197811f2"
              }
            ],
            "likes": [],
            "createdAt": {
              "$date": "2022-11-17T02:59:06.643Z"
            },
            "updatedAt": {
              "$date": "2022-11-17T02:59:46.358Z"
            },
            "__v": 1
        }
    }
};
const createPost={
    summary:"create a post",
    tags:["Post"],
    requestBody:{
        required:true,
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        userId:{type:"string"},
                        text:{type:"string"},
                        image:{type:"string"},
                    },
                    required:["userId","text"],
                    example:{
                        userId:"63744440f27838af2a4db75c",
                        text:"frase inspiradora",
                    }
                }
            }
        }
    },
    responses:{
        200:{description:"OK",},
        400:{description:"Text is required"},
        404:{description:"User id is required"},
        500:{description:"error"}
    }

}
const getAllPosts={
    summary: "returns all posts",
    tags:["Post"],
    responses:{
        200:{
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        type:"array",
                        items:{
                            type:"object",
                            $ref: '#/components/schemas/post'
                        }
                    }
                }
            }
        },
        500:{
            description: "fail in return all posts"
        }
    }
}
const getPostsUser ={
    summary: "returns all posts of user",
    tags:["Post"],
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
                            $ref: '#/components/schemas/post'
                        }
                    }
                }
            }
        },
        500:{
            description: "fail in return all posts"
        }
    }
}
const getPostById = {
    summary: "returns a post serched by id",
    tags:["Post"],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of post",
            example: "6375a37ae5996621197811e9"
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        $ref: '#/components/schemas/post'
                    }
                }
            }
        },
        500:{description: "post not found"}
    }
}
const deletePost={
    summary: "delete a post serched by id",
    tags:["Post"],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of post",
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        $ref: '#/components/schemas/post'
                    }
                }
            }
        },
        500:{description: "post not found"}
    }
}
const updatePost = {
    summary: "update a post serched by id",
    tags:["Post"],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of post",
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
                        text:{type:"string"},
                        image:{type:"string"},
                    },
                    required:["text"],
                    example:{
                        text:"frase inspiradora modificada",
                    }
                }
            }
        }
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        $ref: '#/components/schemas/post'
                    }
                }
            }
        },
        500:{description: "post not found"}
    }
}

const likePost ={
    summary: "like a post serched by id",
    tags:["Post"],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of post",
            example: "6375a37ae5996621197811e9"
        }
    ],
    requestBody:{
        required:true,
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        userId:{type:"string",description:"Id of user loged"},
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
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        example:{"liked": "successfully"}
                    }
                }
            }
        },
        500:{description: "error"}
    }
}

const postRoute={
    "/post/create":{
        post:createPost,
    },
    "/post/all_posts":{
        get:getAllPosts
    },
    "/post/user_posts/{userId}":{
        get:getPostsUser,
    },
    "post//get_post/{id}":{
        get:getPostById
    },
    "/post/delete/{id}":{
        delete:deletePost
    },
    "/post/update/{id}":{
        put:updatePost,
    },
    "/post/like/{id}":{
        put:likePost
    }
};

module.exports={post,postRoute};