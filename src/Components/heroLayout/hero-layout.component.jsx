import {ImageCarousel} from "../heroCarousel"
import {ResponsiveAppbar} from "../appbar"
import { HeroCard } from "../heroCard"

const HeroLayout = () => {
    return(
        <>
            <ResponsiveAppbar />
            <ImageCarousel />
            <HeroCard />
        </>
    )
}

export default HeroLayout