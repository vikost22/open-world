import { Link, useNavigate } from "react-router-dom";
import { Button } from "../Button";
import { useEffect } from "react";

export default function SoonAdded() {
  const navigate = useNavigate();
  
  useEffect(() => {
    const goToHomeTimer = setTimeout(() => navigate("/"), 10000);
    return clearTimeout(goToHomeTimer)
  }, [navigate]);
  return (
    <div className="soon-added">
      <div className="soon-added__content">
        <h2 className="soon-added__text">This page will be soon added:(</h2>
        <span className="go-home"></span>
      </div>
      <Link to={"/"}>
        <Button
          className="project-btn"
          text="Home"
          backgroundColor="#F0E33F"
          color="#000000"
          border="none"
          padding="4px 55px"
          lineHigh="40px"
          size="24px"
        />
      </Link>
    </div>
  );
}
