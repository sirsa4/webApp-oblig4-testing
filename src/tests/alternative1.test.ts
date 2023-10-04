import { quiz } from "../alternative_1/questionsData";
import { checkIfAll4AnswersAlternativeHaveApropetyNamedCorrectAndIsBooleanDataType, checkIfAll4AnswersAreArrays, checkIfAll4AnswersAreArraysHave4AnswersInside, checkIfQuestionsHave4Titles4Answers4HelperProperties, checkIfQuestionsIsArray, checkIfquestionsKeyExists, questionsLength } from "../alternative_1/questionsFunction";
import {it,expect,describe} from "vitest"


//describe block that has series of tests for quations
describe("questions test",()=>{
    //standard test to see test block is working.
    //this is from teacher's git repo next-start project
    it("should work",()=>{
        expect(true).toBe(true)
    });

    //test to check if property "questions" exists in quiz object
    it("should return true if property 'questions' exists",()=>{
        expect(checkIfquestionsKeyExists(quiz,"questions")).toBe(true);
    })

    //test to check is the property "questions" is an array datatype
    it("should return true if property is an array",()=>{
        expect(checkIfQuestionsIsArray(quiz,"questions")).toBe(true);
    });

    //test to see there are 4 questions
    it("should return length 4",()=>{
        expect(questionsLength(quiz)).toBe(4);
    });

    //test to see if questions array has objects with properties: title, answers and helper, 4 of each
    it("should return [4,4,4] if all 3 properties exist in questions array",()=>{
        expect(checkIfQuestionsHave4Titles4Answers4HelperProperties(quiz,"title","answers","helper")).toStrictEqual([4,4,4]);
    });

    //test to check if all answers properties in questions array are also arrays
    it("should return 4 if all answers property in questions array as also arrays",()=>{
        expect(checkIfAll4AnswersAreArrays(quiz)).toBe(4);
    });

    //test to check if all 4 answers have 4 alternatives each
    //result is 4 because counter variable is incremented only once in each answers array
    it("should return 4 if all answers have 4 alternatives.",()=>{
        expect(checkIfAll4AnswersAreArraysHave4AnswersInside(quiz)).toBe(4);
    });

    //test to check if all answer alternatives have a one instance of property called "correct" which is of boolean datatype
    it("should return 4 if each answer array has 1 correct boolean property",()=>{
        expect(checkIfAll4AnswersAlternativeHaveApropetyNamedCorrectAndIsBooleanDataType(quiz)).toBe(4);
    })

});



