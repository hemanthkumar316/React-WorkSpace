import {render,screen}from'@testing-library/react'
import Counter from './Counter'
import user from'@testing-library/user-event'
import '@testing-library/jest-dom'
describe('testing counter component',()=>{
 test('test1',()=>{
  render(<Counter/>)
  const countelement=screen.getByRole('heading')
  expect(countelement).toBeInTheDocument()
  const incrementbtn=screen.getByRole('button',{
   name:'Increment'
  })
  expect(incrementbtn).toBeInTheDocument()
 })
 test('test2 render a count 0',()=>{
  render(<Counter/>)
  const countelement=screen.getByRole('heading')
  expect(countelement).toHaveTextContent('0')
 })
 test('render a count of 1 after clicking the increment button', async()=>{
 // user.setup()
render(<Counter/>)
const incrementbtn=screen.getByRole('button',{
 name:'Increment'
})
await user.click(incrementbtn)
const countelement=screen.getByRole('heading')
expect(countelement).toHaveTextContent('1')
 })

 })