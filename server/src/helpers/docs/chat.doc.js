const chat ={
    chat:{
        type:"object",
        properties:{
            messages:{
                type:"array",
                items:{
                    type:"string",
                    description:"Id of messages"
                }
            }
        }
    }
};

const getChat ={
    summary:"get a chat by id of interlocutor",
    tags:["Chat"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of interlocutor",
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        $ref: '#/components/schemas/chat'
                    }
                }
            }
        },
        404:{description: "Error"},
    }
};

const getChats = {
    summary:"get all chats of user",
    tags:["Chat"],
    security:[{bearerAuth:[]}],
    responses:{
        200:{
            description: "OK",
            content: {
                "application/json":{
                    schema:{
                        type:"array",
                        items:{
                            type:"object",
                            $ref: '#/components/schemas/chat'
                        }
                    }
                }
            }
        },
        404:{description:"Error"},
    }
}

const chatRoute = {
    "/chat/get/{id}":{
        get:getChat
    },
    "/chat/get_chats":{
        get:getChats
    }
};

module.exports = {chat,chatRoute}