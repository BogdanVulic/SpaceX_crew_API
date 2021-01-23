import { getCrew, getLaunches } from "./service";
import { Crew } from './components/Crew';


let launches;

getLaunches().then(res => {
    launches = res.data;
    getCrew().then(response => {
        console.log(response.data)
        Crew(response.data, launches)
    })
    
})
