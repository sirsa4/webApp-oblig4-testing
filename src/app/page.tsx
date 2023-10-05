"use client"

import { checkIfQuestionsIsArray, questionsLength } from "@/alternative_1/questionsFunction";
import {quiz} from "../alternative_1/questionsData"
import Car from "@/alternative_2/Car";

export default function Home() {
 // console.log(questionsLength(quiz));

 const checkIfAll4AnswersAlternativeHaveApropetyNamedCorrectAndIsBooleanDataType = (questionList: any)=>{

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



  return (
    <div>
        <h1>Oblig 4 testing</h1>
        
    </div>
  )
}
