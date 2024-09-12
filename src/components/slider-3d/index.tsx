import { SliderItem } from "./slider-item";

interface Props<T> {
  items: T[];
  sliderItem: (props: T) => JSX.Element;
}

export const Slider3D = function <T = unknown>({
  items,
  sliderItem,
}: Props<T>) {
  return (
    <div className="h-[30dvh] overflow-visible scale-75 sm:scale-75 md:scale-100 w-full bg-dark-gray-1 relative flex justify-center">
      <div
        aria-label="banner"
        className="w-full h-dvh text-center overflow-hidden relative scale-75 sm:scale-75 md:scale-100 bg-dark-gray-1"
      >
        <div
          aria-label="slider"
          className="absolute w-48 h-60 top-[10%] left-[calc(50%-100px)] animate-AutoRun"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(800px)",
          }}
        >
          {items.map((item, index) => (
            <SliderItem index={index} key={index} quantity={items.length}>
              {sliderItem(item)}
            </SliderItem>
          ))}
        </div>
      </div>
    </div>
  );
};
