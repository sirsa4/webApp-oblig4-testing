
import { fireEvent, render, screen} from "@testing-library/react"
import Car from "./Car"

describe("Tests for car component",()=>{
    it("should work pls",()=>{
        render(<Car type="toyota" />);  
    });

    it("should check if h1 with text 'car component' exists",()=>{
            render(<Car type="mitsu" />);
            
            //3 ways to check same thing: if h1 exists in document
            expect(document.querySelector("h1")).toBeInTheDocument();
            expect(screen.getByRole("heading",{level: 1})).toBeInTheDocument();
            expect(screen.getByText("car component")).toBeInTheDocument();
    });
});

