import React, {useState, useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"
import GetCharacters from "./GetCharacters"
import styled from "styled-components"

const ListContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    margin-left: 5rem;
`;

function CharacterList() {
    const [people, setPeople] = useState([]);
    const [pageNum, setPageNum] = useState(1);

    useEffect(()=>{
        axios
            .get(`https://swapi.py4e.com/api/people/?page=${pageNum}`)
            .then(res=>{
                const results = res.data.results
                console.log(res);
                setPeople(results);
            })
    },[pageNum])

    return (
        <div>
            <GetCharacters
                    pageNum={pageNum}
                    setPageNum={setPageNum}
                />
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
            </ListContainer>
        </div>
    )
}


export default CharacterList;

