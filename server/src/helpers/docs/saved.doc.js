const saved ={
    saved:{
        type:"object",
        properties:{
            userId:{
                type:"string",
                description:"id of user"
            },
            postId:{
                type:"string",
                description:"id of post"
            },
            createdAt:{
                type:"string",
                description:"fecha de creacion"
            },
            updatedAt:{
                type:"string",
                description:"fecha de edicion"
            }
        }
    }
};

const savePost = {
    summary: "save a post",
    tags:["Saved"],
    security:[{bearerAuth:[]}],
    requestBody:{
        required:true,
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        postId:{type:"string"},
                    },
                    required:["postId"],
                }
            }
        }
    },
    responses:{
        200:{description:"successfully"},
        404:{description:"This post is already saved"},
        500:{description:"Error"}
    }
};
const userSaveds ={
    summary: "returns all user saveds",
    tags:["Saved"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of user",
        }
    ],
    responses:{
        200:{description:"returns an array fo lla saveds"},
        500:{description:"Error"}
    }
};

const deleteSaved = {
    summary: "delete a saved",
    tags:["Saved"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of saved",
        }
    ],
    responses:{
        200:{description:"successfuly"},
        500:{description:"Error"}
    }
}

const savedRoute = {
    "/saved/save_post":{
        post: savePost,
    },
    '/saved/user_saveds/{id}':{
        get: userSaveds,
    },
    '/saved/delete/{id}':{
        delete:deleteSaved,
    }
};

module.exports = {saved,savedRoute};