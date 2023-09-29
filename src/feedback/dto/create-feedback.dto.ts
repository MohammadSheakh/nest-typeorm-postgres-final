import { IsAlphanumeric, MaxLength } from "class-validator";

// ? means optional 
export class CreateFeedbackDto{
 id : number;
 title? :string;
 status ?: string;
 category ?: string;
 description ? :string;
 upvote :number;
 comments ?:number;
}
/**
 * 
 * [Nest] 15548  - 09/29/2023, 9:51:52 PM   ERROR [ExceptionsHandler] null value in column "title" of relation "feedback" violates not-null constraint
QueryFailedError: null value in column "title" of relation "feedback" violates not-null constraint     
    at PostgresQueryRunner.query
 */