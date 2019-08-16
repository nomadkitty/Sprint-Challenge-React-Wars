import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import GetCharacters from "./GetCharacters"
import styled from "styled-components"

const ListContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
`;

function CharacterList() {
    const [people, setPeople] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    useEffect(()=>{
        axios
            .get(`https://swapi.co/api/people/?page=${pageNum}`)
            .then(res=>{
                const results = res.data.results
                console.log(res);
                setPeople(results);
            })
    },[pageNum])

    return (
        <ListContainer>
            {people.map(item=>{
                return (
                    <CharacterCard 
                        id={item.id}
                        name={item.name}
                        gender={item.gender}
                        height={item.height}
                        mass={item.mass}
                        skinColor={item.skin_color}
                    />
                )
            })}
            <GetCharacters 
                pageNum={pageNum}
                setPageNum={setPageNum}
            />
        </ListContainer>
    )
}


export default CharacterList;

