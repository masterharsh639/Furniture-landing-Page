import { Grid } from "@mui/material";
import Button from "../Button/Button";
import "./detail.css";

interface DetailsProps {
  heading: string;
  title: string;
  paragraph: string;
}

const Details = ({ heading, title, paragraph }: DetailsProps) => {
  return (
    <Grid container spacing={2} className="cardDetails">
      <Grid item className="detail-heading basic-css">
        {heading}
      </Grid>
      <Grid item className="detail-title">
        {title}
      </Grid>
      <Grid item>{paragraph}</Grid>
      <Grid item>
        <Button title="Buy Now" />
      </Grid>
    </Grid>
  );
};

export default Details;
