import {render,screen} from'@testing-library/react'

import App from'../react-practice/src/App'
test('first test',()=>{
 render(<App/>)
 const listelement=screen.findByText(' testing the react application')
 expect(listelement)
})
test('second test',()=>{
 render(<App/>)
 const listelement=screen.findByTestId(' test')
 expect(listelement)
})