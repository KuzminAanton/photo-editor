import React, {FC} from 'react';
import {Box, Button, Slider, Typography} from "@mui/material";
import {SettingsImageProps} from "../types/props";

import '../styles/SettingsImage.scss'

const SettingsImage: FC<SettingsImageProps> = ({setImageSettingsValue, imageSettingsValue}) => {
    const handleChangeSettingsValue = (e: any, param: string) => {
        setImageSettingsValue({
            ...imageSettingsValue,
            [param]: e.target.value
        })
    }

    const handleResetSettings = () => {
        setImageSettingsValue({
            hue: 0,
            saturation: -100,
            lightness: 1
        })
    }

    return (
        <Box width={150}>
            <Box>
                <Typography className="SettingsImage-text" variant="h5">Hue</Typography>
                <Slider
                    onChange={(e) => handleChangeSettingsValue(e, 'hue')}
                    value={imageSettingsValue.hue}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    step={1}
                    min={0}
                    max={100}
                />
            </Box>
            <Box>
                <Typography className="SettingsImage-text" variant="h5">Saturation</Typography>
                <Slider
                    onChange={(e) => handleChangeSettingsValue(e, 'saturation')}
                    value={imageSettingsValue.saturation}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    min={-100}
                    max={0}
                />
            </Box>
            <Box>
                <Typography className="SettingsImage-text" variant="h5">Lightness</Typography>
                <Slider
                    onChange={(e) => handleChangeSettingsValue(e, 'lightness')}
                    value={imageSettingsValue.lightness}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    step={0.01}
                    min={0.5}
                    max={1.5}
                />
            </Box>
            <Button variant="contained" color="warning" onClick={handleResetSettings}>
                Reset it!
            </Button>
        </Box>
    );
};

export default SettingsImage;