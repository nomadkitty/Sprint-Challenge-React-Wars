import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import styled from "styled-components"

const ListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
`;

function CharacterList() {
    const [people, setPeople] = useState([])

    useEffect(()=>{
        axios
            .get(`https://swapi.co/api/people/`)
            .then(res=>{
                console.log(res);
                setPeople(res.data.results);
            })
    },[])

    return (
        <ListContainer>
            {people.map(item=>{
                return (
                    <CharacterCard 
                        key={item.id}
                        name={item.name}
                        gender={item.gender}
                        height={item.height}
                        mass={item.mass}
                        skinColor={item.skin_color}
                    />
                )
            })}
        </ListContainer>
    )
}


export default CharacterList;