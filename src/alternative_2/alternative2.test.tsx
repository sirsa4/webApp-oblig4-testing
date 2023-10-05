
import { fireEvent, render, screen} from "@testing-library/react"
import Car from "./Car"

describe("Tests for react component",()=>{
    it("should work pls",()=>{
        render(<Car type="toyota" />);  
    });
});

