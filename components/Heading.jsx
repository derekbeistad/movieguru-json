function Heading(props) {
  const { main, secondary } = props.content;

  return (
    <div>
      <h2>{main}</h2>
      <h4>{secondary}</h4>
    </div>
  );
}

export default Heading;
