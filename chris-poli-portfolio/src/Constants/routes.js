import {resumeUrl} from "./Information";

export const routes = [
    {route:'',label:'Home',type:'route',icon:'fa fa-home'},
    {route:'projects',label:'Projects',icon:'fa fa-tasks',type:'route'},
    {route:'skills',label:'Skills',icon:'fa fa-book',type:'route'},
    {route:'resume',label:'Resume',icon:'fa fa-file',type:'download',resource:resumeUrl},
    {route:'contact',label:'Contact',icon:'fa fa-phone',type:'route'}
];


