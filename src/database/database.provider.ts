// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class DatabaseService {}

import { Feedback } from "src/feedback/entity/feedback.entity"
import { createConnection } from "typeorm"

export const DatabaseProvider = [
  {
    provide : 'DATABASE_CONNECTION',
    useFactory : async () => {
      return await createConnection({
        type : 'postgres',
        host : 'localhost',
        port : 5432 ,
        username : 'postgres',
        
        password : process.env.DB_PASSWORD,
        database : 'postgres',
        entities :[Feedback],
        synchronize : true,
        //ssl : true , // eta ki bujhlam na 😢
      })
    },
  },
];
