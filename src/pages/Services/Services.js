import React from 'react'
import { Pricing, InfoSection } from '../../components';
import { homeObjFour } from './Data';

const Home = () => {
    return (
        <>
            <Pricing />
            <InfoSection {...homeObjFour} />
        </>
    )
}

export default Home
