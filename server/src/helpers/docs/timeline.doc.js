const timelineUser = {
    summary: "returns the timeline of a certain user",
    tags:["Timeline"],
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
        200:{
            description:"OK",
        },
        404:{description:"invalid Id"},
        500:{description:"Error"}
    }
}
const timelineRoute ={
    "/timeline/{id}":{
        get:timelineUser,
    }
};

module.exports = { timelineRoute };
