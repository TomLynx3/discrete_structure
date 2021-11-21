import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Typography,
  TableBody,
} from "@mui/material";

const fillWeightMatrix = (name: string, ...args: string[]) => {
  const res: { [k: string]: any } = { name: name };

  args.forEach((weight, index) => {
    const fieldName: string = `weight${index + 1}`;
    res[fieldName] = weight;
  });

  return res;
};

const matrixData = [
  fillWeightMatrix("a", "0", "28", "5", "\u221E", "\u221E"),
  fillWeightMatrix("b", "28", "0", "16", "8", "18"),
  fillWeightMatrix("c", "5", "16", "0", "23", "15"),
  fillWeightMatrix("d", "\u221E", "8", "23", "0", "10"),
  fillWeightMatrix("f", "\u221E", "18", "15", "10", "0"),
];

const matrixNames = ["a", "b", "c", "d", "f"];

const WeightMatrix = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" height="10px" width="10px"></TableCell>
            {matrixNames.map((name) => (
              <TableCell
                align="center"
                height="10px"
                width="10px"
                style={{ backgroundColor: "#00a9c9" }}
              >
                <Typography variant="h6">{name}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {matrixData.map((item, index) => (
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
              {Object.keys(item).map((el, index1) =>
                index1 > 0 ? (
                  <TableCell
                    align="center"
                    height="10px"
                    width="10px"
                    key={index1}
                  >
                    {matrixData[index][el]}
                  </TableCell>
                ) : null
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WeightMatrix;
