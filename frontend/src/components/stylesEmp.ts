import styled from "styled-components";

export const Container = styled.nav`
   display: flex;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 90vw;
`;

export const Th = styled.th`
  padding: 5px;
  padding-top: 10px;
   text-align: left;
  background-color: #ff620b;
  color: white;
  /* border: 1px solid #ddd; */
  padding: 8px;
  width: 90vw;
  border-radius: 0.3em;
`;

export const Td = styled.td`
border: 1px solid #ddd;
  padding: 8px;
`;

export const Tr = styled.tr`
hover {background-color: #ddd;}
`;

export const Table = styled.table`
 font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
`;

export const Button = styled.button`

  align-items: center;
  background-color: #00ff;
  border: 0;
  border-radius: 0.4em;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: first baseline;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 5px;
  padding-left: 20px;
  padding-right: 40px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  float: inline-start;
  text-transform: uppercase;

`;
export const Span = styled.span`
 display: flex;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const Overley = styled.body`
 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    background: rgba(10,32,11,0.6);
`;
export const ModalContent = styled.body`
  position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    line-height: 1.4;
    background: #fff;
    padding: 14px 28px;
    border-radius: 0.5em;
    max-width: 700px;
    min-width: 1000px;
  `;



export const CloseModal =styled.button`
  align-items: center;
  background-color: #cc0000;
  border: 0;
  border-radius: 0.4em;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: first baseline;
  line-height: 20px;
  max-width: 480px;
  min-height: 40px;
  min-width: 0px;
  overflow: hidden;
  padding: 5px;
  padding-left: 20px;
  padding-right: 40px;
  text-align: center;
  touch-action: manipulation;
  transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s, color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
  float: inline-start;
  position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px 7px;

`;


export const Title =styled.nav`
  font-size: 25px;
  font-weight: 500;
  justify-content: baseline;
  float: inline-end;

  

  justify-content: first baseline;
  line-height: 20px;
  max-width: 480px;

  position: absolute;
    top: 10px;
    left: 10px;
    padding: 13px 10px;
    width: 100px;


 


`;




export const StyledFormWrapper=styled.div `
  display: inline;
  justify-content: center;
  align-items: center;
  height: 90vh;
  
`;

export const StyledForm=styled.form`
 width: 100%; 
  max-width: 700px;
  padding: 90px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  
`;

export const StyledInput= styled.input`
 display: flex;
 background-color: #eee;
height: 40px;
max-width: 1000px;
min-width: 700px;
border-radius: 5px;
border: 1px solid #ddd;
margin: 10px 0 20px 0;
padding: 20px;
box-sizing: border-box;
 
`;


export const StyledButton = styled.button`
display: block;
  background-color: #22c061;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldSet = styled.fieldset`
 border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;

export const StyledErrorMessage = styled.div`
  color: red;
  font-weight: 800;
  margin: 0 0 40px 0;
`;


