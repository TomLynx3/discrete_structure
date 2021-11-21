import {
  Grid,
  TableContainer,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  Table,
  Typography,
  TableHead,
} from "@mui/material";
import { useEffect, useState } from "react";
import WeightMatrix from "./WeightMatrix";

interface pMatrix {
  weight1: string;
  weight2: string;
  weight3: string;
  weight4: string;
  weight5: string;
}

const matrixNames = ["a", "b", "c", "d", "f"];

type Props = {
  weightMatrix: { [k: string]: any }[];
  weightMatrixIndex: number;
  pMatrix: pMatrix[];
};

const createMatrixM = (weightMatrix: { [k: string]: any }[], index: number) => {
  const sel = `weight${index + 1}`;

  const output = [];
  //i =1
  //j =1
  for (let i = 0; i < weightMatrix.length; i++) {
    let val;
    let obj: { [k: string]: any } = {};
    let selector = `weight${index + 1}`;
    val = weightMatrix[i][selector];
    for (let j = 0; j <= 5; j++) {
      let value;
      if (j === index) {
        value = val;
      } else {
        let selector = `weight${j + 1}`;
        value = weightMatrix[index][selector];
      }

      if (j === 0) {
        obj.name = weightMatrix[i].name;
      } else {
        let d = parseInt(val) + parseInt(value);

        obj[selector] = d.toString();
      }

      if (j === 5) {
        output.push(obj);
      }
    }
  }

  // const output = [];
  //   for (let i = 0; i < weightMatrix.length; i++) {
  //     let val = weightMatrix[i][sel];

  //     let obj: { [k: string]: any } = {};
  //     for (let j = 0; j <= 5; j++) {
  //       if (j === index + 1) {
  //         val = weightMatrix[index][sel];
  //       } else {
  //         val = weightMatrix[i][sel];
  //       }
  //       if (j === 0) {
  //         obj.name = weightMatrix[i].name;
  //       } else {
  //         let selector = `weight${j}`;
  //         let value = parseInt(weightMatrix[i][selector]) + parseInt(val);

  //         obj[selector] = value.toString();
  //       }

  //       if (j === 5) {
  //         output.push(obj);
  //       }
  //     }
  //   }
  console.log(output);
  return output;
};

const FloydIterationTable: React.FC<Props> = ({
  weightMatrix,
  weightMatrixIndex,
  pMatrix,
}) => {
  useEffect(() => {
    intializeMatrixM();
  }, []);

  const [matrixM, setMatrixM] = useState<any>([]);

  const intializeMatrixM = () => {
    const matrix = createMatrixM(weightMatrix, weightMatrixIndex);

    setMatrixM(matrix);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h6" align="center">
              W<sub>{weightMatrixIndex}</sub>
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      height="10px"
                      width="10px"
                    ></TableCell>
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
                      {Object.keys(item).map((el, index1) =>
                        index1 > 0 ? (
                          <TableCell
                            align="center"
                            height="10px"
                            width="10px"
                            key={index1}
                            style={{
                              backgroundColor:
                                index === weightMatrixIndex ||
                                index1 === weightMatrixIndex + 1
                                  ? "#8672A9"
                                  : "",
                            }}
                          >
                            {weightMatrix[index][el]}
                          </TableCell>
                        ) : null
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" align="center">
              M<sub>{weightMatrixIndex}</sub>
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      height="10px"
                      width="10px"
                    ></TableCell>
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
                  {matrixM.map((item: { name?: any }, index: number) => (
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
                            style={{
                              backgroundColor:
                                index === weightMatrixIndex ||
                                index1 === weightMatrixIndex + 1
                                  ? "#8672A9"
                                  : "",
                            }}
                          >
                            {matrixM[index][el]}
                          </TableCell>
                        ) : null
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h6" align="center">
          P<sub>{weightMatrixIndex}</sub>
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableBody>
              {pMatrix.map((row, index) => (
                <TableRow>
                  <TableCell align="center" height="10px" width="10px">
                    {row.weight1}
                  </TableCell>
                  <TableCell align="center" height="10px" width="10px">
                    {row.weight2}
                  </TableCell>
                  <TableCell align="center" height="10px" width="10px">
                    {row.weight3}
                  </TableCell>
                  <TableCell align="center" height="10px" width="10px">
                    {row.weight4}
                  </TableCell>
                  <TableCell align="center" height="10px" width="10px">
                    {row.weight5}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default FloydIterationTable;
