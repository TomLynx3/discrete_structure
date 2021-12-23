import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import Image from "../../assets/homework6/graph_iteration_4.png";
const Iteration4 = () => {
  return (
    <Fragment>
      <Typography variant="h5" style={{ margin: "1rem", fontWeight: "bold" }}>
        4.Iteracija
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
        x3: (+S,min({"\u221E"},31-7))=(+S,24)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Г(x3) = &#123;x1,x2,t&#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x1: (+x3,min(24,11-5))=(+x3,6)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x2: (+x3,min(24,17-0))=(+x3,17)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        t: nevar iezīmēt(piesātināts loks)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Г(x1) = &#123;t&#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        t: nevar iezīmēt(piesātināts loks)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Г(x2) = &#123;x1, t &#125;
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        x1: (+x2,min(17,8-0))=(+x3,6)
      </Typography>
      <Typography variant="h6" style={{ margin: "3rem" }}>
        t: (+x2,min(17,12-0))=(+x3,12)
      </Typography>
      <Typography variant="h6" style={{ margin: "2rem" }}>
        Ir iezīmēta tīkla izeja un &delta;(Xt) = 12
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Plūsmu maiņa:
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        t: [+x2,12] plūsma lokā (x2,t)=12+0 = 12
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        x2: [+x3,12] plūsma lokā (x2,x3) = 0+12 = 12
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        x3: [+S,12] plūsma lokā (S,x3) = 7+12 = 19
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Loks (x2,t) ir piesātināts loks ceļā: S-x3-x2-t
      </Typography>
      <Grid item xs={12} display="flex" justifyContent="center">
        <img src={Image} width="500px" height="300px" />
      </Grid>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Algoritms darbu beidz tīkla izeju t nevar iezīmēt
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        4 iterācijas atrasta max plūsma 10+2+5+12 = 29
      </Typography>
      <Typography variant="h6" style={{ margin: "1rem", fontWeight: "bold" }}>
        Minimālais griezums ir (x2,t)(x1,t)(x3,t) 12+15+2 = 29
      </Typography>
    </Fragment>
  );
};

export default Iteration4;
