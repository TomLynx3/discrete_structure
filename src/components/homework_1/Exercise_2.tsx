import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Exercise2Matrix from "./Exercise_2_Matrix";
import Image1 from "../../assets/homework1/uzd_2.png";

const Exercise2 = () => {
  return (
    <Grid container item xs={12} spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{ height: "80%", backgroundColor: "#d9e9e4" }}
        >
          <Typography variant="h5" textAlign="center">
            Dots grafs. Uzrakstīt tā blakusvirsotņu matricu un incidentes
            matricu.
          </Typography>
          <Box display="flex" justifyContent="center" marginTop="5rem">
            <img src={Image1} />
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{
            height: "550px",
            backgroundColor: "#d9e9e4",
            overflowY: "scroll",
          }}
        >
          <Exercise2Matrix></Exercise2Matrix>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise2;
