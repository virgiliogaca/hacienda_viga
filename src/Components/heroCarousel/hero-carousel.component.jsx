import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselImageFirst from "../../Assets/HeroCarousel/CarouselImageFirst.jpg"
import CarouselImageSecond from "../../Assets/HeroCarousel/CarouselImageSecond.jpg"
import CarouselImageThird from "../../Assets/HeroCarousel/CarouselImageThird.jpg"
import CarouselImageFourth from "../../Assets/HeroCarousel/CarouselImageFourth.jpg"

const ImageCarousel = () => {
    return (
        <div className="max-h-[calc(100vh-4rem)] -z-50 mt-16 lg:mt-16 xs:mt-14">
            <Carousel autoPlay="true" infiniteLoop="true" showArrows={true} showThumbs={false} interval={5000} showStatus={false}>
                <div>
                    <img src={CarouselImageFirst} alt="" className="max-h-[calc(100vh-4rem)]"/>
                </div>
                <div>
                    <img src={CarouselImageSecond} alt="" className="max-h-[calc(100vh-4rem)]"/>
                </div>
                <div>
                    <img src={CarouselImageThird} alt="" className="max-h-[calc(100vh-4rem)]"/>
                </div>
                <div>
                    <img src={CarouselImageFourth} alt="" className="max-h-[calc(100vh-4rem)]"/>
                </div>
            </Carousel>
        </div>
    )
}

export default ImageCarousel
