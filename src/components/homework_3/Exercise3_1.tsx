import { Paper, Grid, Typography } from "@mui/material";
import InsertStatements from "./InsertStatements";
import Operations from "./Union";
import PseidoCode from "./PseidoCode";
import SQLQuerry from "./SQLQuerry";
import Union from "./Union";
import Section from "./Section";
import Difference from "./Difference";
import CartesianProduct from "./CartesianProduct";
import Projection from "./Projection";
import SelectionComp from "./Selection";

const Exercise3_1 = () => {
  return (
    <Grid container item xs={12} spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{ height: "80%", backgroundColor: "#d9e9e4" }}
        >
          <Typography variant="h5" textAlign="center">
            <a href="https://sqliteonline.com" target="_blank">
              Datu Bāze online
            </a>
          </Typography>
          <InsertStatements></InsertStatements>
          <SQLQuerry></SQLQuerry>
          <PseidoCode></PseidoCode>
          <Typography align="center" variant="h5" style={{ marginTop: "2rem" }}>
            Attieksmju algebras operācijas
          </Typography>
          <Grid container xs={12}>
            <Grid item xs={4}>
              <Union></Union>
            </Grid>
            <Grid item xs={4}>
              <Difference></Difference>
            </Grid>

            <Grid item xs={4}>
              <CartesianProduct></CartesianProduct>
            </Grid>
          </Grid>
          <Grid container xs={12}>
            <Grid item xs={6}>
              <Projection></Projection>
            </Grid>
            <Grid item xs={6}>
              <SelectionComp></SelectionComp>
            </Grid>
          </Grid>
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
          <Typography variant="h6">
            Lai redzētu pirma uzdevuma rezultātus pa kreisi ir links uz SQLite
            datu bāzi online. Lejā ir secība kura jaizpilda lai veiksmīgi
            parbaudītu darbu.
          </Typography>
          <Typography variant="h6">
            <ol type="1">
              <li>Nospiest pogu SQL komandas lai izveidotu datu bāzi</li>
              <li>
                Nokopet tekstu to var izdarīt nospiežot pogu labja augšēja stūri
                vai arī izvelēties tekstu un nokopēt. Ja teksts tika veiksmīgi
                nokopēts labajā stūri ir japaradās informatīvajam tekstam
              </li>
              <li>Atvert linku ar datu bāzi un ielimēt nokopētu tekstu</li>
              <li>
                Kreisajā augšejā pusē ir komandu rīks, ir janospiež pogu RUN.
                Pēc šīs operācijas visas tabulas ka arī dati bus ievadīti datu
                bāze un mēs varam meiģinat izpildit vaicājumu
              </li>
              <li>
                Nospiest pogu SQL komandas lai iegūtu datus. Un veikt lidzīgas
                darbības iepriekš minētos punktos
              </li>
            </ol>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise3_1;
