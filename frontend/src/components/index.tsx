import React from 'react'
import { Container, LogoContainer, TitleContainer } from './styles'
import {Link} from 'react-router-dom'
import EmployeeList from './employeeList'
import { Routes, Route } from 'react-router-dom';

function Header() {
  return (
    <Container>
        <LogoContainer>
            <img src='https://media-exp1.licdn.com/dms/image/C4E0BAQHurifakT9r2g/company-logo_200_200/0/1658769689927?e=1677110400&v=beta&t=ZK5ITbuMMUW5J61FcTT1JZIewKVM5P63JP6XOeD4aLc' 
            alt ='Employee Managment'/>
        </LogoContainer>
        <TitleContainer>Employee Managment</TitleContainer>
      
      
    </Container>
    


  )
}

export default Header