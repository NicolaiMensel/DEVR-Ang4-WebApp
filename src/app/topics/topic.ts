import {DatePipe} from "@angular/common";
import {User} from "../users/user";
export class Topic {
  id: string;
  title : string;
  user: User;
  message : string;
  image: string;
  timeStamp : string;
}
