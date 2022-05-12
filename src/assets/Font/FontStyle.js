import CabinBold from "../Font/Cabin-Bold.ttf"
import CabinMedium from "../Font/Cabin-Medium.ttf"
import CabinLight from "../Font/Cabin-Regular.ttf"
import RubikBold   from "../Font/Rubik-Bold.ttf"
import RubikMedium   from "../Font/Rubik-Medium.ttf"
import { createGlobalStyle } from "styled-components"

const FontStyle = createGlobalStyle`
    @font-face {
        font-family: Cabin-Bold;
        src: url(${CabinBold});
    }
    @font-face {
        font-family: Cabin-Light;
        src: url(${CabinLight});
    }
    @font-face {
        font-family: Cabin-Medium;
        src: url(${CabinMedium});
    }
    @font-face {
        font-family: Rubik-Bold;
        src: url(${RubikBold});
    }
    @font-face {
        font-family: Rubik-Medium;
        src: url(${RubikMedium});
    }
`
export default FontStyle