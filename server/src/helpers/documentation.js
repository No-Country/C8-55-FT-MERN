const {groupRoute,group} = require("./docs/group.doc");
const {user,userRoute} = require("./docs/user.doc");

const swaggerSpec = {
    openapi:"3.0.0",
    info:{
        title: "RocketCup API",
        version: "0.0.1"
    },
    servers:[
    {
        url: "http://localhost:3000"
    }
    ],
    tags:[
        {
            name:"Group",
            description: "Group routes"
        },
        {
            name: "User",
            description:"User routes"
        }
    ],
    paths:{
        ...groupRoute,
        ...userRoute
    },
    components:{
        schemas:{
            ...group,
            ...user
        }
    }
};

module.exports=swaggerSpec;