import Grid from "@mui/material/Grid";
import "./mailingsection.css";
import Heading from "../../Containers/PremiumHeading/Heading";
import Button from "../../Containers/Button/Button";

const MailingSection = () => {
  return (
    <Grid className="mailing-section">
      <Grid xs={12}>
        <Heading
          title="Join Our Mailing List"
          paragraph="Sign up to receive inspiration, product updates, and special offers from our team."
        />
      </Grid>
      <Grid xs={12} className="formfield-section">
        <Grid display={"flex"} flex-direction={"row"} justifyContent={"center"}>
          <input
            type="text"
            placeholder="example@gmail.com"
            className="formfeild"
          />
          <Button title="Submit" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MailingSection;
