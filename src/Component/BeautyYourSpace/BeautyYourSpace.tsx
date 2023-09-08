import Grid from "@mui/material/Grid";
import "./beautyyourspace.css";
import Button from "../../Containers/Button/Button";
import ecllipse from "../../assests/Ellipse.png";
import girlImage from "../../assests/girlimage.png";

const BeautyYourSpace = () => {
  return (
    <Grid container className="beauty-section">
      <Grid item sm={4} md={4} xs={12}>
        <p className="beauty-heading basic-css">Beautify Your Space</p>
        <p className="beauty-para basic-css">
          Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam,quis nostrud exercitation ullamco laboris
        </p>
        <Button title="Learn More" />
      </Grid>
      <Grid item xs={4} className="beauty-image">
        <img src={girlImage} alt="girlImage" className="girlImage" />
      </Grid>
    </Grid>
  );
};

export default BeautyYourSpace;
