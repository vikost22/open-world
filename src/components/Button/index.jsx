export function Button(props) {
  return (
    <>
      <button
        className={`project-btn ${props.className}`}
        style={{
          backgroundColor: props.backgroundColor,
          border: props.border,
          color: props.color,
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#FFFFCC";
          e.target.style.color = "#3e3e3e";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = props.backgroundColor;
          e.target.style.color = props.color;
        }}
        onClick={props.click}>
        {props.text}
      </button>
    </>
  );
}
