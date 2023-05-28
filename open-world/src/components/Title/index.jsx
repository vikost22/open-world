import { Button } from "../Button";
export function Title(props) {
  return (
    <section className="title-section">
      <div className="container">
        <div className="title-wrapper">
          <h1 className="title-slogan">
            EXPLORE
            <span className="title-slogan field--text">AND</span>
            TRAVEL
          </h1>
          <Button
            text="Started"
            backgroundColor="#F0E33F"
            color="#000000"
            border="none"
          />
        </div>
      </div>
    </section>
  );
}
