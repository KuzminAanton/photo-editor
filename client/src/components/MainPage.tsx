import React, {SVGProps, useState} from 'react';
import {Box, Button} from "@mui/material";
import DownloadPage from "./DownloadPage";
import ReactLoading from 'react-loading'

import '../styles/MainPage.scss'
import SettingsImage from "./SettingsImage";
import {SettingsImageTypes} from "../types/state";


const MainPage = () => {
    const [loadingStatus, setLoadingStatus] = useState<boolean>(true);
    const [image, setImage] = useState<string>("");
    const [imageSettingsValue, setImageSettingsValue] = useState<SettingsImageTypes>({
        hue: 0,
        saturation: -100,
        lightness: 1
    })

    if (!image) return <DownloadPage handleSetImage={setImage} changeLoadStatus={setLoadingStatus}/>

    if (loadingStatus) {
        return <ReactLoading type="spinningBubbles" color="#d4dde5" height={300} width={300}/>
    }

    const resetImage = () => {
        setImage("")
    }

    const filterValue = `
    hue-rotate(${imageSettingsValue.hue * 1.8}deg) 
    saturate(${imageSettingsValue.saturation * -1}%)
    brightness(${imageSettingsValue.lightness})
    `

    return (
        <Box className="mainPage-wrapper">
            <div>
                <Box className="mainPage-editImage">
                    <Box className="mainPage-image">
                    <span>
                        <span>
                            <img
                                src={image}
                                style={{
                                    filter: filterValue,
                                }}
                                alt="edit-image"/>
                        </span>
                    </span>
                    </Box>
                </Box>

                <Box className="mainPage-resetBtn">
                    <Button onClick={resetImage}>
                        Download other image...
                    </Button>
                </Box>

            </div>

            <Box className="mainPage-settings">
                <SettingsImage
                    imageSettingsValue={imageSettingsValue}
                    setImageSettingsValue={setImageSettingsValue}
                />
            </Box>

        </Box>
    );
};

export default MainPage;