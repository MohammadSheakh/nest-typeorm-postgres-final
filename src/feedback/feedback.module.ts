import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FeedbackProvider } from './feedback.provider';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';

@Module({
  imports : [DatabaseModule],
  controllers : [FeedbackController],
  providers : [...FeedbackProvider, FeedbackService]
  // controllers and providers amader shamne dorkar hobe 
})
export class FeedbackModule {}
