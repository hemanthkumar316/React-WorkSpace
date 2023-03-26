import {render,screen,cleanup,fireEvent} from'@testing-library/react'

import "@testing-library/jest-dom";

import Count from'./Count'
afterEach(cleanup);
describe('count comp testing',()=>{
 it('counter testing',()=>{
  render(<Count/>)
  const text=screen.getAllByText('hemanth')
  expect(text)
 })
 it('based on id',()=>{
  render(<Count/>)
  const idvalue=screen.getByTestId('countervalue')
  expect(idvalue)
 })
 it('should equal to 0',()=>{
  render(<Count/>)
  const equal=screen.getByTestId('countervalue')
  expect(equal).toHaveTextContent(0)
 })
 it('should be disabled',()=>{
  render(<Count/>)
  const disabledbtn=screen.getByTestId('button-down')
  expect(disabledbtn).toBeDisabled()
 })
 it('should be enabled',()=>{
  render(<Count/>)
  const enabledbtn=screen.getByTestId('button-up')
  expect(enabledbtn).not.toHaveAttribute('disabled')
 })
 it('increment counter',()=>{
  render(<Count/>)
  const counter = screen.getByTestId("countervalue");
  const incrementbtn=screen.getByTestId('button-up')
  fireEvent.click(incrementbtn)
  expect(counter).toHaveTextContent('1')
 })
 it('decrement counter',()=>{
  render(<Count/>)
  const counter = screen.getByTestId("countervalue");
  const decrementbtn=screen.getByTestId('button-down')
  fireEvent.click(decrementbtn)
  expect(counter).toHaveTextContent('0')
 })
})
