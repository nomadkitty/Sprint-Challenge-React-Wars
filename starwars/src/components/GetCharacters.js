import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: #eca637;
  color: #722120;
  width: 250px
  font-size: 20px;
  margin: 0 2rem 1rem;
  padding: 0.25em 1em;
  border-radius: 3px;
  border: 2px solid #5f6f77;
  cursor: pointer;
  &:hover{
    background: #722120;
    color: #eca637;
  } 
`;

function GetCharacters(props){
    return(
        <div>
        
            <Button onClick={()=>props.setPageNum(props.pageNum - 1)}>Previous Page</Button>
            <Button onClick={()=>props.setPageNum(props.pageNum + 1)}>Next Page</Button>
        </div>
    )
}

export default GetCharacters;

// check if next !== null 
// set page state from 1 to 2
// have button to fire 