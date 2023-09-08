import { Grid } from "@mui/material";
import "./heading.css";

interface PremiumHeadingProps {
  title: string;
  paragraph: string;
}

const Heading = ({ title, paragraph }: PremiumHeadingProps) => {
  return (
    <Grid container xs={12} className="premium-section">
      <Grid xs={12}>
        <p className="premium-heading basic-css">{title}</p>
      </Grid>
      <Grid xs={12}>
        <p className="premium-para basic-css">{paragraph}</p>
      </Grid>
    </Grid>
  );
};

export default Heading;
