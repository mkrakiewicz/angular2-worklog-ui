import {Model} from "./model";
export class Worklog extends Model {
    user_id:number;
    name:string;
    minutes:number;
    time:string;
}