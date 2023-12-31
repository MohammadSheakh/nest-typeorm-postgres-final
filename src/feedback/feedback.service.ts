import { Inject, Injectable, NotFoundException, ParseIntPipe } from '@nestjs/common';
import { Feedback } from './entity/feedback.entity';
import {Repository, InsertResult, DeleteResult, UpdateResult} from 'typeorm'
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

  // id : number // type any rakha uchit na 😢
  async findOneFeedback(id: string | number | any):Promise<Feedback | null>{
    
    if(id != null && id != undefined){
      return this.feedbacksRepository.findOne({where : {id}});
    }
    
  }

  async updateOneFeedback (id : number | string, feedback: Feedback):Promise<Feedback>{
    // amra ekhane kichu validation korbo 
    const feedbackToUpdate = await this.findOneFeedback(id);
    if(feedbackToUpdate == undefined){
      throw new NotFoundException();
    }
    await this.feedbacksRepository.update(id, feedback);
    return this.findOneFeedback(id);
  }

  async deleteOneFeedback (id : number |string):Promise<DeleteResult>{
    // amra ekhane kichu validation korbo 
    const feedbackToDelete = await this.findOneFeedback(id);
    if(feedbackToDelete == undefined){
      throw new NotFoundException();
    }
    return this.feedbacksRepository.delete(id);
    // better hoito .. kon id ta delete hoilo .. sheta jodi return korto 😢
  }
}



