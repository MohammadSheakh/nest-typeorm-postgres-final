// import { Injectable } from '@nestjs/common';

import { Provider } from "@nestjs/common";
import {Connection} from "typeorm"
import { Feedback } from "./entity/feedback.entity";

// @Injectable()
// export class FeedbackService {}

export const FeedbackProvider : Provider[] = [
  {
    provide : 'FEEDBACKS_REPOSITORY', // 50:05
    useFactory : (connection : Connection ) => {
      return connection.getRepository(Feedback) ;// entity
    },
    inject : ['DATABASE_CONNECTION'],
  },

];
