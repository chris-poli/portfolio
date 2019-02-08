import {resumeUrl} from "./Information";

export const routes = [
    {route:'',label:'Home',type:'route',icon:'fa fa-home'},
    {route:'projects',label:'Projects',icon:'fa fa-tasks',type:'route'},
    {route:'experience',label:'Experience',icon:'fa fa-briefcase',type:'route'},
    {route:'knowledge',label:'Knowledge',icon:'fa fa-book',type:'route'},
    {route:'awards',label:'Awards',icon:'fa fa-star',type:'route'},
    {route:'resume',label:'Resume',icon:'fa fa-file',type:'download',resource:resumeUrl},
    {route:'contact',label:'Contact',icon:'fa fa-phone',type:'route'},

];


