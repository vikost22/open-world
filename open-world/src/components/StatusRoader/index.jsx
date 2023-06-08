export default function StatusRoader(props) {
  const roadPoints = [
    <li className="road-point" key={1}>
      <span className="status-number">1</span>
    </li>,
    <li className="road-point" key={2}>
      <span className="status-number">2</span>
    </li>,
    <li className="road-point" key={3}>
      <span className="status-number">3</span>
    </li>,
    <li className="road-point" key={4}>
      <span className="status-number">4</span>
    </li>,
    <li className="road-point" key={5}>
      <span className="status-number">5</span>
    </li>,
  ];
  return (
    <div className="status-roader">
      <ul className="roads">
        {roadPoints.map((point, index) => {
          if (index + 1 < props.statusNumber) {
            return (
              <li className="road-point road-point--passed" key={index + 1}>
                <span className="status-number">{index + 1}</span>
              </li>
            );
          }
          if (index + 1 ===  props.statusNumber) {
            return (
              <li className="road-point road-point--actual" key={index + 1}>
                <span className="status-number">{props.statusNumber}</span>
              </li>
            );
          }
          return point;
        })}
      </ul>
      <p className="status-name">{ props.statusName}</p>
    </div>
  );
}
