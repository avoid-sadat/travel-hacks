import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Event from '../Event/Event';
import ClientReview from '../Rating/ClientReview';
import Services from './../Services/Services';
import Testo from './../Testo/Testo';
import useAuth from './../../../hooks/useAuth'
import { CircularProgress } from '@mui/material';

const Home = () => {
    const {isLoading} = useAuth();
    
    return (
        <div>
            <Navigation></Navigation>
            {isLoading && <CircularProgress/> }
            <Banner></Banner>
            <Services></Services>
            <Event></Event>
            <Testo></Testo>
        </div>
    );
};

export default Home;