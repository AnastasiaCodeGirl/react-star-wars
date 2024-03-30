// import styles from './PeoplePage/module.css';
import { getApiResource } from '../../utils/network';
import { useState, useEffect } from 'react';
import { API_PEOPLE } from '../../constants/api';
const PeoplePage = () => {

    const [ people, setPeople] = useState();
    const getResource = async(url) => {
        const res = await getApiResource(url);
       const peopleList = res.results.map(({name, url})=> {
       return {
            name,
            url
       }
       })
       setPeople(peopleList);
    }
    useEffect(() => {
       getResource(API_PEOPLE);
    },[]);

    return (
        <>
            {people  && (
            <ul>
                {people.map(({name, url}) => {
                    return <li key={name}>{name}</li>; // Added return statement
                })}
            </ul>
            )}
        </>
    )
};

export default PeoplePage;
