import { quiz } from "../alternative_1/questionsData";
import { checkIfquestionsKeyExists, questionsLength } from "../alternative_1/questionsFunction";
import {it,expect,describe} from "vitest"


//describe block that has series of tests for quations
describe("questions test",()=>{
    //standard test to see test block is working.
    //this is from teacher's git repo next-start project
    it("should work",()=>{
        expect(true).toBe(true)
    });

    //function to test if property "questions" exists in quiz object
    it("should return true if property 'questions' exists",()=>{
        expect(checkIfquestionsKeyExists(quiz,"questions")).toBe(true);
    })

    //test to see there are 4 questions
    it("should return length 4",()=>{
        expect(questionsLength(quiz)).toBe(4);
    })

});



