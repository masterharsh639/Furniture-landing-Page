import Grid from "@mui/material/Grid";
import "./footer.css";
import image94 from "../../assests/image94.png";
import image95 from "../../assests/image95.png";
import image96 from "../../assests/image96.png";
import image98 from "../../assests/image98.png";

const Footer = () => {
  return (
    <Grid container className="footer-section page-section">
      <Grid item xs={4} className="text-1 basic-css">
        Beauty Care
      </Grid>
      <Grid item xs={8} className="text-1 basic-css">
        Instagram Shop
      </Grid>
      <Grid xs={4} className="basic-css text-para">
        Do eiusmod tempor incididunt ut labore et magna aliqua. Ut enim ad minim
        veniam,quis nostrud exercitation ullamco laboris.
      </Grid>
      <Grid xs={8} className="image-container">
        <p>
          <img src={image94} alt="" />
        </p>
        <p>
          <img src={image95} alt="" />
        </p>
        <p>
          <img src={image96} alt="" />
        </p>
        <p>
          <img src={image98} alt="" />
        </p>
      </Grid>
      <Grid xs={12} className="text-1 basic-css">
        Follow Us
      </Grid>
    </Grid>
  );
};

export default Footer;
