import {
  Paper,
  TableBody,
  TableContainer,
  TableRow,
  TableHead,
  Table,
  TableCell,
  Typography,
} from "@mui/material";

const matrixLabels = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

interface WeightMatrix {
  weight1: string;
  weight2: string;
  weight3: string;
  weight4: string;
  weight5: string;
  weight6: string;
  weight7: string;
  weight8: string;
  weight9: string;
  weight10: string;
}

type Props = {
  selectedElement: number;
  data: WeightMatrix;
  elementsWithAs: number[];
};

const IterationTable: React.FC<Props> = ({
  selectedElement,
  data,
  elementsWithAs,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {matrixLabels.map((item, index) => (
              <TableCell align="center" height="5px" width="5px">
                <Typography variant="h6">
                  {item}
                  {elementsWithAs.indexOf(index) > -1 ? (
                    <span
                    //   style={{
                    //     color: selectedElement == index ? "#00a9c9" : "",
                    //   }}
                    >
                      *
                    </span>
                  ) : (
                    ""
                  )}

                  {selectedElement == index ? (
                    <span style={{ color: "#00a9c9" }}>*</span>
                  ) : (
                    ""
                  )}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center" height="5px" width="5px">
              {data.weight1}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight2}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight3}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight4}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight5}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight6}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight7}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight8}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight9}
            </TableCell>
            <TableCell align="center" height="5px" width="5px">
              {data.weight10}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IterationTable;
