import { quiz } from "./questionsData"

//function to test if quiz has property "questions"
export const checkIfquestionsKeyExists = (
  questionList: any,
  property: string,
) => {
  return questionList.hasOwnProperty(property)
}

//function to check if questions property is an array
export const checkIfQuestionsIsArray = (
  questionList: any,
  property: string,
) => {
  return Array.isArray(questionList[property])
}

//function to test that there is total of 4 questions
export const questionsLength = (questionsList: any) => {
  return questionsList.questions.length
}

//function to check questions array has 4 of each these properties: title, answers and helper.
export const checkIfQuestionsHave4Titles4Answers4HelperProperties = (questionsList: any,title: string,answers: string,helper: string) => {
  let titleCount = 0
  let answersCount = 0
  let helperCount = 0
  for (let i = 0; i < quiz.questions.length; i++) {
    if (Object.hasOwn(questionsList.questions[i], title)) titleCount++
    if (Object.hasOwn(questionsList.questions[i], answers)) answersCount++
    if (Object.hasOwn(questionsList.questions[i], helper)) helperCount++
  }
  return [titleCount, answersCount, helperCount]
}

//function to check if all 4 answers properties are array datatype
export const checkIfAll4AnswersAreArrays = (questionList: any)=>{
    let numberAnswerArrays = 0
    for (let i = 0; i < quiz.questions.length; i++) {
        
        if(Array.isArray(quiz.questions[i].answers)){
          numberAnswerArrays++;
        }
        
       }
       return numberAnswerArrays;
}

//function to check if all 4 answers have 4 alternatives
//loop checks increments numberofAnswerAlternative counter variable only once per loop throught each answers array when it's length is 4.
export const checkIfAll4AnswersAreArraysHave4AnswersInside = (questionList: any)=>{
    let numberofAnswerAlternative = 0
    for (let i = 0; i < quiz.questions.length; i++) {
        
        if(Array.isArray(quiz.questions[i].answers)){
          if(quiz.questions[i].answers.length === 4){
            numberofAnswerAlternative++;
          }
        }
        
       }
       return numberofAnswerAlternative;
  }

  //function to test if all answer alternatives have a property called "correct" which is of boolean datatype
  export const checkIfAll4AnswersAlternativeHaveApropetyNamedCorrectAndIsBooleanDataType = (questionList: any)=>{

    let numberofCorrect = 0
    for (let i = 0; i < quiz.questions.length; i++) {
        
        if(Array.isArray(quiz.questions[i].answers)){
          if(quiz.questions[i].answers.map(obj => obj.hasOwnProperty("correct") && typeof obj.correct === "boolean")){
            numberofCorrect++;
          }
        }
        
       }
       return numberofCorrect;
  }
