import React, {FC} from 'react';
import {Box, Button, Input, TextField, Typography} from "@mui/material";

import '../styles/DownloadPage.scss'

interface DownloadPageProps {
    handleSetImage: (file: any) => void;
    changeLoadStatus: (value: boolean) => void;
}

const DownloadPage: FC<DownloadPageProps> = ({handleSetImage, changeLoadStatus}) => {

    const onChange = (e: any) => {
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.readAsDataURL(file);
        reader.onloadend = () => {
            handleSetImage(reader.result);
        };

        setTimeout(() => {
            changeLoadStatus(false)
        }, 2000)
    }

    return (
        <Box className="DownloadPage__wrapper">
            <Typography variant="h4" className="DownloadPage__title">
                Need your photo
            </Typography>
            <TextField variant="filled" type="file" onChange={onChange} className="DownloadPage__fileInput"/>
        </Box>
    );
};

export default DownloadPage;