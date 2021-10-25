import { Fragment } from "react";
import {
  TableContainer,
  Typography,
  TableBody,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const fillMatrix = (
  name: string,
  V1: string,
  V2: string,
  V3: string,
  V4: string,
  V5: string,
  V6: string,
  V7: string
) => {
  return { name, V1, V2, V3, V4, V5, V6, V7 };
};

const filleWeightMatrix = (
  name: string,
  weight1: string,
  weight2: string,
  weight3: string,
  weight4: string,
  weight5: string,
  weight6: string,
  weight7: string
) => {
  return {
    name,
    weight1,
    weight2,
    weight3,
    weight4,
    weight5,
    weight6,
    weight7,
  };
};

const matrixData = [
  fillMatrix("Daugavpils", "0", "1", "1", "1", "0", "0", "0"),
  fillMatrix("Krāslava", "0", "0", "0", "0", "0", "0", "0"),
  fillMatrix("Ilūkste", "0", "0", "0", "0", "0", "0", "0"),
  fillMatrix("Aglona", "0", "0", "0", "0", "1", "0", "0"),
  fillMatrix("Rēzekne", "0", "0", "0", "0", "0", "1", "1"),
  fillMatrix("Viļāni", "0", "0", "0", "0", "0", "0", "0"),
  fillMatrix("Ludza", "0", "0", "0", "0", "0", "0", "0"),
];

const weightMatrix = [
  filleWeightMatrix(
    "Daugavpils",
    "0",
    "43.2",
    "23.4",
    "51.6",
    "\u221E",
    "\u221E",
    "\u221E"
  ),
  filleWeightMatrix(
    "Krāslava",
    "43.2",
    "0",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E"
  ),
  filleWeightMatrix(
    "Ilūkste",
    "23.4",
    "\u221E",
    "0",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E"
  ),
  filleWeightMatrix(
    "Aglona",
    "51.6",
    "\u221E",
    "\u221E",
    "0",
    "56.6",
    "\u221E",
    "\u221E"
  ),
  filleWeightMatrix(
    "Rēzekne",
    "\u221E",
    "\u221E",
    "\u221E",
    "56.6",
    "0",
    "31.9",
    "26.0"
  ),
  filleWeightMatrix(
    "Viļāni",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "31.9",
    "0",
    "\u221E"
  ),
  filleWeightMatrix(
    "Ludza",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "26.0",
    "\u221E",
    "0"
  ),
];

const Exercise3_2Matrix = () => {
  return (
    <Fragment>
      <Typography variant="h5" textAlign="center">
        Blakusvirsotņu Matrica
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right" height="10px" width="15px"></TableCell>
              <TableCell
                align="right"
                height="10px"
                width="15px"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Daugavpils</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Krāslava</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Ilūkste</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Aglona</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Rēzekne</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Viļāni</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Ludza</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matrixData.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{ backgroundColor: "#00a9c9" }}
                  height="10px"
                  width="15px"
                >
                  <Typography variant="h6"> {row.name}</Typography>
                </TableCell>
                <TableCell height="10px" width="15px" align="center">
                  {row.V1}
                </TableCell>
                <TableCell height="10px" width="15px" align="center">
                  {row.V2}
                </TableCell>
                <TableCell height="10px" width="15px" align="center">
                  {row.V3}
                </TableCell>
                <TableCell height="10px" width="15px" align="center">
                  {row.V4}
                </TableCell>
                <TableCell height="10px" width="15px" align="center">
                  {row.V5}
                </TableCell>
                <TableCell height="10px" width="15px" align="center">
                  {row.V6}
                </TableCell>
                <TableCell height="10px" width="15px" align="center">
                  {row.V7}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" textAlign="center">
        Svara Matrica
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell
                align="right"
                height="10px"
                width="15px"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Daugavpils</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Krāslava</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Ilūkste</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Aglona</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Rēzekne</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Viļāni</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">Ludza</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weightMatrix.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{ backgroundColor: "#00a9c9" }}
                >
                  <Typography variant="h6"> {row.name}</Typography>
                </TableCell>
                <TableCell align="center">{row.weight1}</TableCell>
                <TableCell align="center">{row.weight2}</TableCell>
                <TableCell align="center">{row.weight3}</TableCell>
                <TableCell align="center">{row.weight4}</TableCell>
                <TableCell align="center">{row.weight5}</TableCell>
                <TableCell align="center">{row.weight6}</TableCell>
                <TableCell align="center">{row.weight7}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Exercise3_2Matrix;
