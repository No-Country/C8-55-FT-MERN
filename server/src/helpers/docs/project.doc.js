const project = {
    project:{
        type: "object",
        properties:{
            founder:{
                type:"string",
                description:"reference to id of fouder (user)"
            },
            name:{
                type: "string",
                description:"name of project"
            },
            description:{
                type:"string",
                description:"description of project"
            },
            members:{
                type: "array",
                items: {
                    type: "string",
                    description: "reference to id of members (user)"
                }
            },
            category:{
                type:"string",
                description:"category of project"
            },
            createdAt:{
                type:"string",
                description:"date of creation"
            },
            updatedAt:{
                type:"string",
                description:"date of edition"
            }
        }
    }
};

const createProject ={
    summary: "create a project",
    tags:["Project"],
    security:[{bearerAuth:[]}],
    requestBody:{
        required: true,
        content:{
            "application/json":{
                schema:{
                    type:"object",
                    properties:{
                        name:{type:"string"},
                        description:{type:"string"},
                        category:{type:"string"},
                    },
                    required:["name","description","category"],
                }
            }
        }
    },
    responses:{
        200:{description:"successfully"},
        400:{description:"This project already exists"},
        500:{description:"Error"},
    }
};

const getProject ={
    summary:"get a project by id",
    tags:["Project"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of project",
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        $ref: '#/components/schemas/project'
                    }
                }
            }
        },
        400:{description: "project not found"},
        500:{description: "Error"},
    }
};

const getAllProjects = {
    summary: "get all projects",
    tags:["Project"],
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
                            $ref: '#/components/schemas/project'
                        }
                    }
                }
            }
        },
        400:{description:"projects does not exists"},
        500:{description:"Error"},
    }

};
const addMember = {
    summary: "add a member in a project",
    tags:["Project"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of project",
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
                }
            }
        }
    },
    responses:{
        200:{
            description:"user added to project",
            content:{
                "application/json":{
                    schema:{
                        type:"object",
                        $ref: '#/components/schemas/post'
                    }
                }
            }
        },
        500:{description:"Error"}
    }
}

const deleteProject ={
    summary: "delete a project serched by id",
    tags:["Project"],
    security:[{bearerAuth:[]}],
    parameters:[
        {
            in: "path",
            name: "id",
            schema:{
                type:"string",
            },
            required: true,
            description: "id of project to delete",
        }
    ],
    responses:{
        200:{description:"deleted successfully"},
        400:{description:"id not found"},
        500:{description:"Error"}
    }
};

const projectRoute = {
    "/project/create":{
        post:createProject,
    },
    "/project/{id}":{
        get: getProject,
    },
    "/project/all_projects":{
        get: getAllProjects,
    },
    "/project/add_member/{id}":{
        put: addMember,
    },
    "/project/delete/{id}":{
        delete: deleteProject,
    }
}

module.exports = {project,projectRoute}