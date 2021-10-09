import {
  Typography,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  TableBody,
  Table,
  Paper,
} from "@mui/material";
import { Fragment } from "react";

const fillMatrix = (
  name: string,
  V1: string,
  V2: string,
  V3: string,
  V4: string,
  V5: string,
  V6: string
) => {
  return { name, V1, V2, V3, V4, V5, V6 };
};
const fillIncidenceMatrix = (
  name: string,
  q1: string,
  q2: string,
  q3: string,
  q4: string,
  q5: string,
  q6: string,
  q7: string
) => {
  return { name, q1, q2, q3, q4, q5, q6, q7 };
};

const incidentMatrix = [
  fillIncidenceMatrix("V1", "+1", "+1", "0", "0", "0", "0", "0"),
  fillIncidenceMatrix("V2", "-1", "0", "-1", "0", "0", "0", "0"),
  fillIncidenceMatrix("V3", "0", "-1", "+1", "+1", "0", "0", "0"),
  fillIncidenceMatrix("V4", "0", "0", "0", "-1", "-1", "0", "0"),
  fillIncidenceMatrix("V5", "0", "0", "0", "0", "+1", "+1", "-1"),
  fillIncidenceMatrix("V6", "0", "0", "0", "0", "0", "-1", "+1"),
];

const matrixData = [
  fillMatrix("V1", "0", "1", "1", "0", "0", "0"),
  fillMatrix("V2", "0", "0", "0", "0", "0", "0"),
  fillMatrix("V3", "0", "1", "0", "1", "0", "0"),
  fillMatrix("V4", "0", "0", "0", "0", "0", "0"),
  fillMatrix("V5", "0", "0", "0", "1", "0", "1"),
  fillMatrix("V6", "0", "0", "0", "0", "1", "0"),
];
const Exercise3Matrix = () => {
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
                <Typography variant="h6">V1</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">V2</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">V3</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">V4</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">V5</Typography>
              </TableCell>
              <TableCell
                height="10px"
                width="15px"
                align="right"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">V6</Typography>
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
                <TableCell height="10px" width="15px" align="right">
                  {row.V1}
                </TableCell>
                <TableCell height="10px" width="15px" align="right">
                  {row.V2}
                </TableCell>
                <TableCell height="10px" width="15px" align="right">
                  {row.V3}
                </TableCell>
                <TableCell height="10px" width="15px" align="right">
                  {row.V4}
                </TableCell>
                <TableCell height="10px" width="15px" align="right">
                  {row.V5}
                </TableCell>
                <TableCell height="10px" width="15px" align="right">
                  {row.V6}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h5" textAlign="center">
        Incidentes Matrica
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right"></TableCell>
              <TableCell align="right" style={{ backgroundColor: "#00a9c9" }}>
                <Typography variant="h6">q1</Typography>
              </TableCell>
              <TableCell align="right" style={{ backgroundColor: "#00a9c9" }}>
                <Typography variant="h6">q2</Typography>
              </TableCell>
              <TableCell align="right" style={{ backgroundColor: "#00a9c9" }}>
                <Typography variant="h6">q3</Typography>
              </TableCell>
              <TableCell align="right" style={{ backgroundColor: "#00a9c9" }}>
                <Typography variant="h6">q4</Typography>
              </TableCell>
              <TableCell align="right" style={{ backgroundColor: "#00a9c9" }}>
                <Typography variant="h6">q5</Typography>
              </TableCell>
              <TableCell align="right" style={{ backgroundColor: "#00a9c9" }}>
                <Typography variant="h6">q6</Typography>
              </TableCell>
              <TableCell align="right" style={{ backgroundColor: "#00a9c9" }}>
                <Typography variant="h6">q7</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {incidentMatrix.map((row) => (
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
                <TableCell align="right">{row.q1}</TableCell>
                <TableCell align="right">{row.q2}</TableCell>
                <TableCell align="right">{row.q3}</TableCell>
                <TableCell align="right">{row.q4}</TableCell>
                <TableCell align="right">{row.q5}</TableCell>
                <TableCell align="right">{row.q6}</TableCell>
                <TableCell align="right">{row.q7}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default Exercise3Matrix;
