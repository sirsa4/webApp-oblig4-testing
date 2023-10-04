"use client"

import { checkIfQuestionsIsArray, questionsLength } from "@/alternative_1/questionsFunction";
import {quiz} from "../alternative_1/questionsData"

export default function Home() {
 // console.log(questionsLength(quiz));

 const checkIfAll4AnswersAreArraysHave4AnswersInside = (questionList: any)=>{
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

  return (
    <div>
        <h1>Oblig 4 testing</h1>
    </div>
  )
}
