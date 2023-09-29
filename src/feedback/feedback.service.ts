import { Inject, Injectable } from '@nestjs/common';
import { Feedback } from './entity/feedback.entity';
import {Repository, InsertResult} from 'typeorm'
import { CreateFeedbackDto } from './dto/create-feedback.dto';

@Injectable()
export class FeedbackService {
  constructor(
    @Inject('FEEDBACKS_REPOSITORY')
    private feedbacksRepository : Repository<Feedback>
  ){}
  async getAllFeedback() : Promise<Feedback[]>{
    return this.feedbacksRepository.find(); // it returns all data
  }

  //dto create korte hobe .. data transfer object 
  // InsertResult er jaygay o ki CreateFeedbackDto ei ta likhte hobe ? 😢
  async addFeedback(feedback : CreateFeedbackDto) : Promise<InsertResult>{
    return this .feedbacksRepository.insert(feedback);
  }
}
