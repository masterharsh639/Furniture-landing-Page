import { Grid } from "@mui/material";
import IconHeading from "../Heading/IconHeading";
import logo1 from "../../assests/Group2.svg";
import logo2 from "../../assests/Group.svg";
import logo3 from "../../assests/shield.svg";
import './rectanglecomponent.css';


const RectangleComponent = () => {
  return (
    <Grid
      className="page-section iconHeading" xs={12}
    >
      <Grid>
        <IconHeading
          title="Free Delivery"
          paragraph="Lorem ipsum dolor sit amet."
          logo={logo1}
        />
      </Grid>
      <Grid>
        <IconHeading
          title="Support 24/7"
          paragraph="Lorem ipsum dolor sit amet."
          logo={logo2}
        />
      </Grid>
      <Grid>
        <IconHeading
          title="100% Authentic"
          paragraph="Lorem ipsum dolor sit amet."
          logo={logo3}
        />
      </Grid>
    </Grid>
  );
};

export default RectangleComponent;
