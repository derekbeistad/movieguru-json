import Link from "next/link";

function Popup(props) {
  // Deconstruct props.status
  const { popupDisplay, popupX, hoveredItem } = props.status;
  let descriptionSubstring;

  if (hoveredItem.description == null) {
    // if there is no description
    descriptionSubstring = null;
  } else if (hoveredItem.description.length > 57) {
    //if the description is over 57 characters
    descriptionSubstring = hoveredItem.description.substring(0, 57) + "...";
  } else {
    descriptionSubstring = hoveredItem.description;
  }

  const watchUrl = `/watch/${hoveredItem.type}/${hoveredItem.title}`;

  return (
    <div
      id={props.category}
      style={{
        backgroundImage: `url(${hoveredItem.image}auto=format&fit=crop&w=800&q=60)`,
        display: `${popupDisplay}`,
        left: `${popupX}px`,
      }}
      className="popup"
    >
      <div className="popup-info">
        <Link href={watchUrl}>
          <button className="btn-secondary">Watch</button>
        </Link>

        <h4 className="popup-title">{hoveredItem.title}</h4>
        <div className="popup-description-container">
          <p className="popup-description">{descriptionSubstring}</p>
        </div>
      </div>
    </div>
  );
}

export default Popup;
