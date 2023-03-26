import {render,screen,cleanup,fireEvent} from'@testing-library/react'

import "@testing-library/jest-dom";

import Count from'./Count'
afterEach(cleanup);
describe('count comp testing',()=>{
 test('counter testing',()=>{
  render(<Count/>)
  const text=screen.getAllByText('hemanth')
  expect(text)
 })
 test('based on id',()=>{
  render(<Count/>)
  const idvalue=screen.getByTestId('countervalue')
  expect(idvalue)
 })
 test('should equal to 0',()=>{
  render(<Count/>)
  const equal=screen.getByTestId('countervalue')
  expect(equal).toHaveTextContent(0)
 })
 test('should be disabled',()=>{
  render(<Count/>)
  const disabledbtn=screen.getByTestId('button-down')
  expect(disabledbtn).toBeDisabled()
 })
 test('should be enabled',()=>{
  render(<Count/>)
  const enabledbtn=screen.getByTestId('button-up')
  expect(enabledbtn).not.toHaveAttribute('disabled')
 })
 test('increment counter',()=>{
  render(<Count/>)
  const incrementbtn=screen.getByTestId('button-up')
  const counter = screen.getByTestId("countervalue");
  fireEvent.click(incrementbtn)
  expect(counter).toHaveTextContent('1')
 })
 test('decrement counter',()=>{
  render(<Count/>)
  const counter = screen.getByTestId("countervalue");
  const decrementbtn=screen.getByTestId('button-down')
  fireEvent.click(decrementbtn)
  expect(counter).toHaveTextContent('0')
 })
})
