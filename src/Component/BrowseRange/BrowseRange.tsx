import Grid from "@mui/material/Grid";
import Heading from "../../Containers/PremiumHeading/Heading";
import "./browserange.css";
import image99 from "../../assests/image99.png";
import image101 from "../../assests/image101.png";

const BrowseRange = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Heading
          title="Browse The Range"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Grid>
      <Grid xs={12} display={"flex"} justifyContent={"space-between"} className="page-section" >
        <Grid xs={3}>
          <img src={image99} alt="image99" />
        </Grid>
        <Grid xs={3}>
          <img src={image101} alt="image99" />
        </Grid>
        <Grid xs={3}>
          <img src={image99} alt="image99" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BrowseRange;
