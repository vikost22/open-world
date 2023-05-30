export function Button(props) {
  return (
    <>
      <button
        style={{
          backgroundColor: props.backgroundColor,
          border: props.border,
          color: props.color,
          padding: props.padding,
          lineHeight: props.lineHigh,
          fontSize: props.size
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#FFFFCC";
          e.target.style.color = "#3e3e3e";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = props.backgroundColor;
          e.target.style.color = props.color;
        }}
        onClick={props.click}
        className="project-btn">
        {props.text}
      </button>
    </>
  );
}
