import {SettingsImageTypes} from "./state";

export interface SettingsImageProps {
    setImageSettingsValue: (value: SettingsImageTypes) => void;
    imageSettingsValue: SettingsImageTypes;
}