const {groupRoute,group} = require("./docs/group.doc");
const { post,postRoute } = require("./docs/post.doc");
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
        },
        {
            name: "Post",
            description:"Post routes"
        }
    ],
    paths:{
        ...groupRoute,
        ...userRoute,
        ...postRoute
    },
    components:{
        schemas:{
            ...group,
            ...user,
            ...post
        }
    }
};

module.exports=swaggerSpec;