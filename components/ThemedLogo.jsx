// Adapting in dark mode, light mode
import { Image, useColorScheme } from 'react-native'

// image
import DarkLogo from '../assets/android-icon-monochrome.png'
import LightLogo from '../assets/android-icon-foreground.png'

const ThemedLogo = ({ ...props }) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
  return (
    <Image source={logo} {...props} />
  )
}

export default ThemedLogo