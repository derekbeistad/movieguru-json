function CarouselButtons(props) {
  return (
    <div>
      <button className="carousel-btn carousel-right-btn" onClick={props.next}>
        <span className="material-symbols-outlined carousel-span"> 
          fast_forward
        </span>
      </button>
      <button className="carousel-btn carousel-left-btn" onClick={props.prev}>
        <span className="material-symbols-outlined carousel-span">
          fast_rewind
        </span>
      </button>
    </div>
  );
}

export default CarouselButtons;
