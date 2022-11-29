import React, { useState } from 'react'
import { Button, CloseModal, Container,  ModalContent, Overley, Span, StyledButton, StyledErrorMessage, StyledFieldSet, StyledForm, StyledFormWrapper, StyledInput,  Table, Td, Th, Title, Tr } from './stylesEmp'
import {Link} from 'react-router-dom'



const EmployeeList = () => {


  const [modal, setModal] = useState(false);

  const toggleModal = () =>{
    setModal(!modal)
  }

  const url = ""

  const [data, setData] = useState({
        name: "",
        gender: "",
        salary: "",
        action: ""
  })
    function handle(err: any){
        const newdata={...data}
    }




  return (
    <Container>
    <Th>
    <Table>
    <tbody>
        <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Gender</Th>
            <Th>Salary</Th>
            <Th>Action</Th>
        </Tr>
        </tbody>
        
        </Table> 
        </Th>
        <Span></Span>
        <Button onClick={toggleModal}>Add</Button>
       
        {modal && (
           <Overley >
        <ModalContent>
          
       
        <StyledFormWrapper>
        <StyledForm>
          
        <Title>Add Employee</Title>

        <label htmlFor='name'>Full Name</label>
        <StyledInput  type="text" name='name'></StyledInput>
        <label htmlFor='Date of Birth'>Date of Birth</label>
        <StyledInput  type="date" name='dateOfBirth'></StyledInput>
        <StyledFieldSet>
          <legend>Gender</legend>
          <label>
            <input type={'radio'}  value='female'  name='gender'/>
            Female
          </label>
          <label>
            <input type={'radio'}  value='Male'  name='gender'/>
            Male
          </label>
        </StyledFieldSet>
        <label htmlFor='Salary'>Salary</label>
        <StyledInput  type="number" name='salary'></StyledInput>
        {/* <StyledErrorMessage><p>Error message here</p></StyledErrorMessage> */}

        <StyledButton type='submit'>Add Employee</StyledButton>
        </StyledForm>

        </StyledFormWrapper>
          <CloseModal  onClick={toggleModal}>Close</CloseModal>
        
        </ModalContent> 
        </Overley>   
        )}
        </Container>
        
  )
}

export default EmployeeList