import {
  CarouselProvider,
  Slider,
  Slide,
  //   ButtonBack,
  //   ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={2}
      isPlaying={true}
      interval={5000}
    >
      <div className="flex h-auto w-full flex-row items-center justify-between">
        {/* <ButtonBack>Back</ButtonBack> */}
        <Slider className="h-[34rem] w-full">
          {/* <Slide index={0}>
            <img src={"/shopHerobg1.png"} alt="img" />
          </Slide> */}
          <Slide index={1}>
            <img src={"/shopHerobg2.png"} alt="img" />
          </Slide>
          <Slide index={2}>
            <img src={"/shopHerobg3.png"} alt="img" />
          </Slide>
        </Slider>
        {/* <ButtonNext>Next</ButtonNext> */}
      </div>
    </CarouselProvider>
  );
};
export default Carousel;
