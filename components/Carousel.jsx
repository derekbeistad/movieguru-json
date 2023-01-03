import { useState } from "react";
import CarouselButtons from "./CarouselButtons";
import CarouselInner from "./CarouselInner";
import Popup from "./Popup";

const defaultOffset = 10;

function Carousel(props) {
  // Get viewport width
  let vw = 0;
  if (typeof window !== "undefined") {
    vw = Math.max(window.innerWidth);
  }

  // Setup style state for popup
  const [status, setStatus] = useState({
    popupDisplay: "none",
    popupX: null,
    hoveredItem: {},
  });

  // Setup translate state for Carousel Inner and items
  const [translateFactor, setTranslateFactor] = useState(0);

  function nextItem() {
    // Update translate factor and check for end of items array
    if (translateFactor < props.items.length - Math.round(vw / 286)) {
      setTranslateFactor(translateFactor + 1);
    } else {
      setTranslateFactor(0);
    }
  }

  function prevItem(event) {
    // Update translate factor unless currently at beginning of array
    if (translateFactor > 0) {
      setTranslateFactor(translateFactor - 1);
    } else {
      setTranslateFactor(0);
    }
  }

  function setPopupLocation(id) {
    // Client-side - sets the location of Carousel popup
    if (typeof window !== "undefined") {
      const item = document.getElementById(id); // Get hovered Item
      let offset;

      // if item is hovered set offset to items x-coordinate
      item
        ? (offset = item.getBoundingClientRect().x)
        : (offset = defaultOffset);

      let xValue;
      if (offset < 40) {
        // If item is on far left side
        xValue = 10;
      } else if (offset + 356.6 > vw) {
        // If item is on far right side
        xValue = vw - 376.6;
      } else {
        // If in middle of view port
        xValue = offset - 40;
      }

      return xValue;
    }
  }

  function handleMouseEnter(hoveredId) {
    // Find hovered Item
    const foundItem = props.items.find((x) => {
      return x._id.$oid == hoveredId;
    });
    const popupXValue = setPopupLocation(hoveredId); // Get popup position

    // Set hovered style
    setStatus({
      popupDisplay: "inline-block",
      popupX: popupXValue,
      hoveredItem: foundItem,
    });
  }

  function handleMouseLeave() {
    // Set non-hovered style
    setStatus({
      popupDisplay: "none",
      popupX: null,
      hoveredItem: {},
    });
  }

  // Client Side Hover Detection
  if (typeof window !== "undefined") {
    const popups = [...document.getElementsByClassName("popup")];
    popups.map((popup) =>
      popup.addEventListener("mouseleave", handleMouseLeave)
    );
  }

  return (
    <div className="carousel">
      <h4 className="carousel-title">{props.category}</h4>
      <Popup status={status} category={props.category} />
      <div className="carousel-outer">
        <CarouselButtons next={nextItem} prev={prevItem} />
        <CarouselInner
          translateFactor={translateFactor}
          vw={vw}
          items={props.items}
          handleMouseEnter={handleMouseEnter}
        />
      </div>
    </div>
  );
}

export default Carousel;
