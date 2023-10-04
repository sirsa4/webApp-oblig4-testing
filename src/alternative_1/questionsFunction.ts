import { quiz } from "./questionsData";

//function to test if quiz has property "questions"
export const checkIfquestionsKeyExists = (questionList:any,property:string)=>{
    return questionList.hasOwnProperty(property);
 }

//function to test that there is total of 4 questions
export const questionsLength = (questionsList: any)=>{
    return questionsList.questions.length;
}