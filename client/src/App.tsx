import React from 'react';
import './styles/App.scss'
import MainPage from "./components/MainPage";
import {Box, Typography} from "@mui/material";
import Background from "./components/Background";

const App = () => {
    return (
        <>
            <Background/>
            <Box className="wrapper">
                <Box className="main-page-title">
                    <Typography variant="h1" className="main-page-title-grandTitle">Photo Editor</Typography>
                    <Typography variant="subtitle1" className="main-page-title-subTitle">special for serious cats</Typography>
                </Box>
                <MainPage/>
            </Box></>
    );
};

export default App;