import Image from "next/image";

function CarouselItem(props) {
  return (
    <div
      id={props.item._id.$oid}
      key={props.item._id.$oid}
      className="carousel-item"
      onMouseEnter={props.handleMouseEnter}
      onMouseOver={props.handleMouseEnter}
    >
      <Image
        className="browse-img"
        src={props.item.image + "auto=format&fit=crop&w=800&q=60"}
        alt={props.item.title}
        height="200"
        width="267"
      />
      <h4 className="item-title">{props.item.title}</h4>
    </div>
  );
}

export default CarouselItem;
