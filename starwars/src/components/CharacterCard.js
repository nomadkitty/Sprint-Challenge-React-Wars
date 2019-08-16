import React from "react";
import styled from "styled-components";

const Card = styled.div`
    width: 20%;
    background: #e2e2e1;
    opacity: 0.8;
    color: #eca637;
    border-radius: 15% 0 15% 0;
    margin: 1rem 2rem;
    box-shadow: 1rem 0.5rem 0.5rem #5f6f77;
`;

const CardTitle = styled.h3`
    margin-top: 0.2rem;
    padding: 0.6rem 0;
    font-size: 1.8rem;
    color: #722120;
    border-bottom: 4px solid #eca637;
`;

const CartP = styled.p`
    color: #121b26;
    font-size: 1.2rem;
`;

const CharacterCard = props =>{
    return (
        <Card key={props.key}>
            <CardTitle>{props.name}</CardTitle>
            <CartP>Gender: {props.gender}</CartP>
            <CartP>Height: {props.height}</CartP>
            <CartP>Mass: {props.mass}</CartP>
            <CartP>Skin Color: {props.skinColor}</CartP>
        </Card>
    );
}

export default CharacterCard;