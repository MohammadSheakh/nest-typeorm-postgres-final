import { Body, Controller, Get, Post, Param, ParseIntPipe } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { Feedback } from './entity/feedback.entity';
import { CreateFeedbackDto } from './dto/create-feedback.dto';


@Controller('feedback')
export class FeedbackController {
  constructor(private feedbackService : FeedbackService){}
  
  
  
  @Get()
  getAllFeedback(){
    return this.feedbackService.getAllFeedback();
  }

  @Post()
  addFeedback(@Body() createFeedbackDto : CreateFeedbackDto){
    console.log(process.env.DB_PASSWORD)
    return this.feedbackService.addFeedback(createFeedbackDto)
  }

  @Get(':id')
  findOne(@Param ('id', ParseIntPipe) id: string | number ):Promise<Feedback | null>{
    return this.feedbackService.findOne(id);
  }
  
} 
