import React from 'react'
import { Pricing, InfoSection } from '../../components';
import { homeObjTwo, homeObjThree, homeObjFour } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
