import {render,screen} from'@testing-library/react'
import Greet from './Greet'
describe('greet components testing',()=>{

 test('first test',()=>{
  render(<Greet/>)
  const text=screen.getByText('hello')
  //console.log(text)
  expect(text)
 })
 
 test('second test',()=>{
 
  render(<Greet name='hemanth'/>)
  const gname=screen.findByText('hello hemanth')
  expect(gname)
 })
})
