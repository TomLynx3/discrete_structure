import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "../../assets/homework6/graph_iteration_2.png";
const Iteration2 = () => {
  return (
    <Fragment>
      <Typography variant="h5" style={{ margin: "1rem", fontWeight: "bold" }}>
        2.Iteracija
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        1.Solis
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        S(+S, {"\u221E"})
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        2.Solis
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        a) Г(S) = &#123;x1, x3&#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x1: nevar iezīmēt(piesātināts loks)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x3: (+S,min({"\u221E"},31-0))=(+S,31)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Г(x3) = &#123;x1,x2,t&#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x1: (+x3,min(31,11-0))=(+x3,11)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x2: (+x3,min(31,17-0))=(+x3,17)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        t: (+x3,min(31,2-0))=(+x3,2)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Ir iezīmēta tīkla izeja un &delta;(Xt) = 2
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Plūsmu maiņa:
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        t: [+x3,2] plūsma lokā (x3,t)=0+2 = 2
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        x3: [+S,2] plūsma lokā (s,x3) = 0+2 = 2
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Loks (x3,t) ir piesātināts loks ceļā: S-x3-t
      </Typography>
      <Grid item xs={12} display="flex" justifyContent="center">
        <img src={Image} width="500px" height="300px" />
      </Grid>
    </Fragment>
  );
};

export default Iteration2;
