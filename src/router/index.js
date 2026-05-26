import {createrouter,createwebhistory} from "vue-router"
import HomeView from "../views/HomeViews.vue"

const routes =[
    {
        Path :"/",
        name :"home",
        Component:HomeView
    },
    
];
const router = createrouter(
    {
        history:createwebhistory(),
        routes
    });
    export default router;