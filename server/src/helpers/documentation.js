const { chat, chatRoute } = require("./docs/chat.doc");
const { comment, commentRoutes } = require("./docs/comment.doc");
const { groupRoute, group } = require("./docs/group.doc");
const { post, postRoute } = require("./docs/post.doc");
const { projectRoute, project } = require("./docs/project.doc");
const { savedRoute, saved } = require("./docs/saved.doc");
const { timelineRoute } = require("./docs/timeline.doc");
const { user, userRoute } = require("./docs/user.doc");

const swaggerSpec = {
    openapi:"3.0.1",
    info:{
        title: "RocketCup API",
        version: "0.1.1"
    },
    servers:[
        {
            url: "http://localhost:3000"
        }
    ],
    tags:[
        {
            name: "User",
            description:"User routes"
        },
        {
            name: "Post",
            description:"Post routes"
        },
        {
            name:"Comment",
            description:"Comment routes",
        },
        {
            name:"Project",
            description: "Project routes"
        },
        {
            name:'Timeline',
            description:"Timeline routes"
        },
        {
            name:"Chat",
            description:"Chat routes"
        },
        {
            name:"Group",
            description: "Group routes"
        },
        {
            name: "Saved",
            description: "Saved routes",
        }
    ],
    paths:{
        ...userRoute,
        ...postRoute,
        ...commentRoutes,
        ...projectRoute,
        ...timelineRoute,
        ...chatRoute,
        ...groupRoute,
        ...savedRoute,
    },
    components:{
        schemas:{
            ...user,
            ...post,
            ...comment,
            ...project,
            ...chat,
            ...group,
            ...saved,
        },
        securitySchemes:{
            bearerAuth:{
                type:"http",
                scheme:"bearer",
                bearerFormat:"JWT",
            },
        },  
    }
};

module.exports=swaggerSpec;