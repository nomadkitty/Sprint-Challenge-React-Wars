import React from "react";
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function GetCharacters(props){
    

    return(
        <div>
        
            <Button primary onClick={()=>props.setPageNum(props.pageNum - 1)}>Previous</Button>
            <Button primary onClick={()=>props.setPageNum(props.pageNum + 1)}>Next</Button>
        </div>
    )
}

export default GetCharacters;

// check if next !== null 
// set page state from 1 to 2
// have button to fire 