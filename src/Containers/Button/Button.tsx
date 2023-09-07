import { Grid } from "@mui/material";
import './button.css'

interface ButtonProps {
  title: string;
}
const Button = ({ title }: ButtonProps) => {
  return (
    <Grid className="button">
      <p className="text">{title}</p>
    </Grid>
  );
};

export default Button;
