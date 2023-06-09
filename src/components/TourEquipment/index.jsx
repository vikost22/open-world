export function TourEquipment(props) {
  const { item } = props;
  return (
    <section
      className="tour-equipment"
      style={{
        backgroundImage: `url(${item.equipmentBackground})`,
      }}>
      <div className="tour-equipment__wrapper">
        <h3 className="about-page-title">{item.equipmentName}</h3>
        <ul className="equipment-list">
          {item.equipment.map((equip, i) => (
            <li className="equipment-item" key={i}>
              <img
                className="equipment-img"
                src={item.equipmentPhoto[i]}
                alt={equip}
              />
              <p>{equip}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
