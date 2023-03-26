import Application from "./Application";
import { render, screen,logRoles } from '@testing-library/react'
import '@testing-library/jest-dom'
describe('testing Application component', () => {
  test('test1', () => {
   render(<Application />)
    //logRoles(view.container)
    const pageheading = screen.getByRole('heading', {
      name: 'job application form'  /* level:1, */
    })
    expect(pageheading).toBeInTheDocument()
    const sectionheading = screen.getByRole('heading', {
      name: 'section 1' /* level:2, */
    })
    expect(sectionheading).toBeInTheDocument()
    const namelement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(namelement).toBeInTheDocument()
    const paragraphelement=screen.getByText('all fields are mandatory')
    expect(paragraphelement).toBeInTheDocument()
    const titleelement=screen.getByTitle('close')
    expect(titleelement).toBeInTheDocument()
    const imageelement=screen.getByAltText('a default image')
    expect(imageelement).toBeInTheDocument()
     const namelement1=screen.getByLabelText('Name')
    expect(namelement1).toBeInTheDocument()
    const namelement2=screen.getByPlaceholderText('Fullname')
    expect(namelement2).toBeInTheDocument() 
    const bioelement = screen.getByRole('textbox', {
      name: 'Bio'
    })
    expect(bioelement).toBeInTheDocument()
    const namelement3=screen.getByDisplayValue('hemanth')
    expect(namelement3).toBeInTheDocument()
   const requiredfield = screen.getByTestId('required-id')
    expect(requiredfield).toBeRequired()
    const joblocation = screen.getByRole('combobox')
    expect(joblocation).toBeInTheDocument()
    const termselement = screen.getByRole('checkbox')
    expect(termselement).toBeInTheDocument()
    const submitbtn = screen.getByRole('button')
    expect(submitbtn).toBeInTheDocument()
    const selectfield = screen.getByTestId('select')
    expect(selectfield).not.toBeRequired()
    const text = screen.getByText('Loginform')
    expect(text).toBeInTheDocument()
    const element=screen.getByLabelText('Name')
    expect(element).toHaveDisplayValue('hemanth') 
    const inputCheckboxChecked = screen.getByTestId('input-checkbox-checked')
    expect(inputCheckboxChecked).toBeChecked()
  })
})