import React from 'react'
import { Pricing, InfoSection } from '../../components';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjThree} />
        </>
    )
}

export default Home
