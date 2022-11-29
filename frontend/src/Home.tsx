import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Container } from './styles/styled'
import Layout from './components/layout'
import Header from './components/index'
import { ThemeProvider } from 'styled-components';
import { theme } from './lib/theme';
import EmployeeList from './components/employeeList'



function Home() {
  return (
    // <Container>Employee Management</Container>
    <Routes>
      <Route path='/' element={<Layout></Layout>}>

        <Route
          index element=
          {<ThemeProvider theme={theme}>
            <Header></Header>
            <Routes>
              <Route path='/*'>
                <Route index element={<EmployeeList />}></Route>
              </Route>//end of Employee route
            </Routes>
          </ThemeProvider>}></Route>



      </Route> //end of layout route
    </Routes>//end of root route
  )
}

export default Home