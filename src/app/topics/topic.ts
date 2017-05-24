import {User} from "../users/user";
import {Content} from "./content";
export enum TopicTypes {
  News, General, Support
}
export class Topic {
  id?: string;
  title : string;
  topicType : TopicTypes;
  timeStamp : string;
  user?: User;
  message: string;
  imageUrl: string;
  subTopics : any[];
}
