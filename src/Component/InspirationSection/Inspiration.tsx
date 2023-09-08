import Grid from "@mui/material/Grid";
import Heading from "../../Containers/PremiumHeading/Heading";
import maskgroup from "../../assests/maskgroup.png";
import maskgroup2 from "../../assests/maskgroup2.png";
import maskgroup3 from "../../assests/maskgroup3.png";
import './inspiration.css';

const Inspiration = () => {
  return (
    <Grid container>
      <Grid xs={12}>
        <Heading
          title="Inspiration Collection"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </Grid>
      <Grid xs={12} className="inspiration-image">
        <p>
          <img src={maskgroup3} alt="img 1" />
        </p>
        <p>
          <img src={maskgroup2} alt="img 2" />
        </p>
        <p>
          <img src={maskgroup} alt="img 3" />
        </p>
      </Grid>
    </Grid>
  );
};

export default Inspiration;
