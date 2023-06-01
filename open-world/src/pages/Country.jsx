import StatusRoader from "../components/StatusRoader";

export function Country() {
  return (
    <>
      <div className="country-section">
        <div className="container">
          <StatusRoader statusNumber={4} statusName="Select a tour" />
        </div>
      </div>
    </>
  );
}
