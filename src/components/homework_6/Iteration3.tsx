import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "../../assets/homework6/graph_iteration_3.png";
const Iteration3 = () => {
  return (
    <Fragment>
      <Typography variant="h5" style={{ margin: "1rem", fontWeight: "bold" }}>
        3.Iteracija
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
        x3: (+S,min({"\u221E"},31-2))=(+S,29)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Г(x3) = &#123;x1,x2,t&#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x1: (+x3,min(29,11-0))=(+x3,11)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x2: (+x3,min(29,17-0))=(+x3,17)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        t: nevar iezīmēt(piesātināts loks)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Г(x1) = &#123;t&#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        t: (+x1,min(11,15-10))=(+x1,5)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Ir iezīmēta tīkla izeja un &delta;(Xt) = 5
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Plūsmu maiņa:
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        t: [+x1,5] plūsma lokā (x1,t)=10+5 = 15
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        x1: [+x3,5] plūsma lokā (x1,x3) = 0+5 = 5
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        x3: [+S,5] plūsma lokā (S,x3) = 2+5 = 7
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Loks (x1,t) ir piesātināts loks ceļā: S-x3-x1-t
      </Typography>
      <Grid item xs={12} display="flex" justifyContent="center">
        <img src={Image} width="500px" height="300px" />
      </Grid>
    </Fragment>
  );
};

export default Iteration3;
