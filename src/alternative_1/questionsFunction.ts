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
export const checkIfQuestionsHave4Titles4Answers4HelperProperties = (
  questionsList: any,
  title: string,
  answers: string,
  helper: string
) => {
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
