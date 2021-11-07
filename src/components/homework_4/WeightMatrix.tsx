import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Typography,
} from "@mui/material";

const fillWeightMatrix = (
  name: string,
  weight1: string,
  weight2: string,
  weight3: string,
  weight4: string,
  weight5: string,
  weight6: string,
  weight7: string,
  weight8: string,
  weight9: string,
  weight10: string
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
    weight8,
    weight9,
    weight10,
  };
};

const weightMatrix = [
  fillWeightMatrix(
    "1",
    "0",
    "50",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "6",
    "9",
    "\u221E",
    "\u221E"
  ),
  fillWeightMatrix(
    "2",
    "50",
    "0",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "4",
    "14",
    "\u221E"
  ),
  fillWeightMatrix(
    "3",
    "\u221E",
    "\u221E",
    "0",
    "5",
    "\u221E",
    "18",
    "\u221E",
    "\u221E",
    "17",
    "\u221E"
  ),
  fillWeightMatrix(
    "4",
    "\u221E",
    "\u221E",
    "5",
    "0",
    "29",
    "14",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E"
  ),
  fillWeightMatrix(
    "5",
    "\u221E",
    "\u221E",
    "\u221E",
    "29",
    "0",
    "8",
    "7",
    "\u221E",
    "\u221E",
    "15"
  ),
  fillWeightMatrix(
    "6",
    "\u221E",
    "\u221E",
    "18",
    "14",
    "8",
    "0",
    "\u221E",
    "8",
    "4",
    "14"
  ),
  fillWeightMatrix(
    "7",
    "6",
    "\u221E",
    "\u221E",
    "\u221E",
    "7",
    "\u221E",
    "0",
    "3",
    "\u221E",
    "19"
  ),
  fillWeightMatrix(
    "8",
    "9",
    "4",
    "\u221E",
    "\u221E",
    "\u221E",
    "8",
    "3",
    "0",
    "24",
    "38"
  ),
  fillWeightMatrix(
    "9",
    "\u221E",
    "14",
    "17",
    "\u221E",
    "\u221E",
    "4",
    "\u221E",
    "24",
    "0",
    "\u221E"
  ),
  fillWeightMatrix(
    "10",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "15",
    "14",
    "19",
    "38",
    "\u221E",
    "0"
  ),
];

const WeightMatrix = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" height="10px" width="10px"></TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">1</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">2</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">3</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">4</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">5</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">6</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">7</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">8</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">9</Typography>
            </TableCell>
            <TableCell
              align="center"
              height="10px"
              width="10px"
              style={{ backgroundColor: "#00a9c9" }}
            >
              <Typography variant="h6">10</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {weightMatrix.map((item, index) => (
            <TableRow
              key={item.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                align="center"
                height="10px"
                width="10px"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">{item.name}</Typography>
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight1}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight2}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight3}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight4}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight5}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight6}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight7}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight8}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight9}
              </TableCell>
              <TableCell align="center" height="10px" width="10px">
                {item.weight10}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeightMatrix;
