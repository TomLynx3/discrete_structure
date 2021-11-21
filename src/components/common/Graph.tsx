import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Typography,
} from "@mui/material";

type Props = {
  matrix: { [k: string]: any }[];
  matrixLabels: string[];
};

const Graph: React.FC<Props> = ({ matrix, matrixLabels }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" height="10px" width="10px"></TableCell>
            {matrixLabels.map((name) => (
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
          {matrix.map((item, index) => (
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
                    {matrix[index][el]}
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

export default Graph;
