import {render,screen}from'@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'
test('just test',()=>{
 render(<App/>)
 let text=screen.getByText('hemanth')
 expect(text).toBeInTheDocument()
})
test('button testing',()=>{
 render(<App/>)
 let btn=screen.getByTestId('button')
 let input=screen.getByTestId('required-input')
 expect(btn).toBeDisabled()
 expect(input).not.toBeRequired()
})