
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
    it("should test that the word 'horse' is not in component",()=>{
        //b: bounderies in regex - this makes sure to not look in substring, but the word as whole.
        expect(screen.queryAllByText(/\bhorse\b/gi)).toHaveLength(0)
    })
});

