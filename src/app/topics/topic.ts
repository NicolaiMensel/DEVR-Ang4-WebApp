import {User} from "../users/user";
import {Content} from "./content";
export enum Type {
  News, General, Support
}
export class Topic {
  id?: string;
  title : string;
  type : Type;
  timeStamp : string;
  user?: User;
  content : Content;
  parent? : Topic;
  subTopics : Topic[];

}
