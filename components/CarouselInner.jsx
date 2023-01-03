import CarouselItem from "./CarouselItem";

const itemWidth = 286.66;

function CarouselInner(props) {
  // Set starting element transform
  let styleTransform = {
    transform: `translateX(-${props.translateFactor * itemWidth}%)`,
  };

  // Client-side - set transform in relation to viewport width
  if (typeof window !== "undefined") {
    styleTransform = {
      transform: `translateX(-${
        props.translateFactor * Math.round(100 / (props.vw / itemWidth))
      }%)`,
    };
  }

  function handleMouseEnter(id) {
    props.handleMouseEnter(id);
  }

  return (
    <div className="carousel-inner" style={styleTransform}>
      {props.items?.map((item) => (
        <CarouselItem
          item={item}
          key={item._id.$oid}
          handleMouseEnter={(x) => handleMouseEnter(x.target.id)}
        />
      ))}
    </div>
  );
}

export default CarouselInner;
