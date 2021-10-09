import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import GreyCodeGenerator from "./GreyCodeGenerator";

const answerStyle = {
  fontWeight: 400,
  padding: "1rem",
};

const Exercise1 = () => {
  return (
    <Grid container item xs={12} spacing={2} style={{ marginTop: "1rem" }}>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{ height: "80%", backgroundColor: "#d9e9e4" }}
        >
          <Typography variant="h5" textAlign="center">
            Dota binārā kopa (n- elementu skaits).
          </Typography>
          <ol type="a">
            <Typography variant="h6">
              <li>Paskaidrot Greja koda algoritmu.</li>
            </Typography>
            <Typography variant="h6">
              <li>
                Noteikt visas apakškopas dotai kopai, izmantojot Greja kodu (n=5
                - varianta numurs ir pārskaitlis vai n=7 - varianta numurs ir
                nepārskaitlis).
              </li>
            </Typography>
            <Typography variant="h6">
              <li>
                Dod reālas kopas piemēru (tehniskas sistēmas kopas piemērs, ja
                varianta numurs ir pārskaitlis; kopas piemērs no dabas, ja
                varianta numurs ir nepārskaitlis) un noteikt visas apakškopas
                dotai kopai, izmantojot Greja kodu.
              </li>
            </Typography>
            <Typography variant="h6">
              <li>
                Papildjautājums: Kādi vel eksistē algoritmi, lai noteikt visas
                apakškopas dotai kopai?
              </li>
            </Typography>
          </ol>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper
          elevation={3}
          style={{ height: "550px", backgroundColor: "#d9e9e4" }}
        >
          <Typography variant="h6" textAlign="center">
            a. Paskaidrot Greja koda algoritmu.
          </Typography>
          <Typography variant="h6" style={answerStyle}>
            Greja kods ir tāda kārtība binārajā sistēmā ka divas secīgas
            vērtības atšķiras tikai ar vienu bitu.
          </Typography>
          <Typography variant="h6" textAlign="center">
            a,b. Greja koda algoritms
          </Typography>
          <GreyCodeGenerator></GreyCodeGenerator>
          <Typography variant="h6" textAlign="center">
            c. Dod reālas kopas piemēru
          </Typography>
          <Paper elevation={0} style={{ backgroundColor: "#d9e9e4" }}>
            Greja kodu pielieto mainīgo digitālo signālu pārraidei, ja nav
            sinhronizācijas takta. Greja kodu pielieto bieži vien leņķa
            kodētājos. Piemēram mums ir disks ar 16 stāvokļiem kas raksturo
            pagrieziena leņķi. Katrs stāvoklis var but aprkastīts ar bināro
            skaitli.(0 - 0000, 1-0001, 2-0010,3-0011 un ta talāk) Lai aprakstīto
            šos skaitļus mehāniski uz diska tiek izveidoti caurumi kas var būt
            parvērsti bināraja skaitlī. No abam pusem mums atrodas diodes , kad
            disks tiek pagriezts atkarība no tā kāds ir stāvoklis uz
            diska,gaisma iet caur konkrētiem caurumiem cauri diskam, tas velāk
            varbūt pārveidots binārajā skaitlī, kas velāk
          </Paper>
          <Typography variant="h6" textAlign="center">
            d. Kādi vel eksistē algoritmi, lai noteikt visas apakškopas dotai
            kopai?
          </Typography>
          <Typography variant="h6" textAlign="center">
            Anti-Grey kods
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Exercise1;
