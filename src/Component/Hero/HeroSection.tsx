import "./herosection.css";
import { Grid } from "@mui/material";
import Details from "../../Containers/DetailContainer/Details";

const HeroSection = () => {
  return (
    <Grid container xs={12} className="hero-section">
      <Grid className="side-modal">
        <Details
          heading="New Arrival"
          title="Discover Our New Collection"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis."
        />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
