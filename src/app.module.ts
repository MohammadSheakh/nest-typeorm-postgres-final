import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';

import { FeedbackModule } from './feedback/feedback.module';
import { RouterModule } from '@nestjs/core';
import { ConfigModule} from '@nestjs/config'

@Module({
  imports: [FeedbackModule,
    RouterModule.register([
      {
        path:'api/feedbacks', // amader shob gula api shuru hobe ei ta diye 
        module : FeedbackModule
      }
    ]),
    ConfigModule.forRoot({
      isGlobal:true
    })
  ],
  
})
export class AppModule {}
