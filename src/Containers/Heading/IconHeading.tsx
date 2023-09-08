import { Grid, Typography } from "@mui/material";
import './iconheading.css';

export interface IconProps {
  title: string;
  paragraph: string;
  logo: string;
}

const IconHeading = ({ title, paragraph, logo }: IconProps) => {
  return (
    <Grid container className="icon-section">
      <Grid item>
        <img src={logo} alt="logo1" />
      </Grid>
      <Grid item className="text-section">
        <p  className="reactangle-heading">{title}</p>
        <p className="reactangle-para">{paragraph}</p>
      </Grid>
    </Grid>
  );
};

export default IconHeading;
