import { Grid, Link } from "@mui/material";
import "./header.css";

const Header = () => {
  return (
    <Grid container className="page-section header">
      <Grid item xs={5} className="header-logo">
        Furniture
      </Grid>
      <Grid item xs={7} className="header-navbar">
        <p className="header-link">Home</p>
        <p className="header-link">Services</p>
        <p className="header-link">Doctors</p>
        <p className="header-link">Products</p>
        <p className="header-link">Gallery</p>
      </Grid>
    </Grid>
  );
};

export default Header;
