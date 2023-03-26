import {fireEvent, render,screen}from'@testing-library/react'
import TestAsync from './TestAsync'
import "@testing-library/jest-dom";
test('async testing', async()=>{
 render(<TestAsync/>)
 const counter=screen.getByTestId('counter')
 const incrementbtn= await screen.getByTestId('button-up')
 fireEvent.click(incrementbtn)
 expect(counter).toHaveTextContent('1')
 
})
test('testing',()=>{
 render(<TestAsync/>)
 let text=screen.getByText('test')
 expect(text) 
})
