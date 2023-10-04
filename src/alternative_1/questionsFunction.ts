import { quiz } from "./questionsData";

//function to test that there is total of 4 questions
export const questionsLength = (questionsList: any)=>{
    return questionsList.questions.length;
}