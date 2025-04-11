import { TouchableOpacity } from "react-native"
import Feather from 'react-native-vector-icons/Feather'
import { iconSizes } from "../constants/dimentions"
import { colors } from "../constants/colors"

export const GoToPreviousButton = ({size = iconSizes.lg}) => {
    return (
        <TouchableOpacity activeOpacity={0.6}>
            <Feather name={"skip-back"} size={size} color={colors.iconPrimary}/>
        </TouchableOpacity>
    )
}

export const PlayPauseButton = ({size = iconSizes.lg}) => {
    return (
        <TouchableOpacity activeOpacity={0.6}>
            <Feather name={true ? "play" : "pause"} size={size} color={colors.iconPrimary}/>
        </TouchableOpacity>
    )
}

export const GoToNextButton = ({size = iconSizes.lg}) => {
    return (
        <TouchableOpacity activeOpacity={0.6}>
            <Feather name={"skip-forward"} size={size} color={colors.iconPrimary}/>
        </TouchableOpacity>
    )
}