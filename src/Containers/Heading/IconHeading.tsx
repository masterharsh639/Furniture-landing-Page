import { Grid, Typography } from "@mui/material";
import './iconheading.css';

export interface IconProps {
  title: string;
  paragraph: string;
  logo: string;
}

const IconHeading = ({ title, paragraph, logo }: IconProps) => {
  return (
    <Grid container>
      <Grid item>
        <img src={logo} alt="logo1" />
      </Grid>
      <Grid>
        <Typography  className="reactangle-heading">{title}</Typography>
        <Typography className="reactangle-para">{paragraph}</Typography>
      </Grid>
    </Grid>
  );
};

export default IconHeading;
