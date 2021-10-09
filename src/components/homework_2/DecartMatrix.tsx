import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
} from "@mui/material";
import { useState } from "react";

const DecartMatrix = ({ setMatrixCallback }: any) => {
  const givenSet = ["a", "b", "c", "d", "e", "f", "g"];

  const [matrix, setMatrix] = useState<number[][]>([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);

  const handleClick = (row: number, col: number) => {
    let items = [...matrix];

    if (items[row][col] === 1) {
      items[row][col] = 0;
    } else {
      items[row][col] = 1;
    }

    setMatrix(items);
    setMatrixCallback(matrix);
  };

  return (
    <TableContainer
      component={Paper}
      sx={{ minWidth: 250, maxWidth: 550, marginLeft: "2rem" }}
    >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell key="empty" width="100px" align="center"></TableCell>
            {givenSet.map((value, index) => (
              <TableCell key={index} align="center">
                <Typography variant="h6"> {value}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell key="a" align="center">
              <Typography variant="h6"> {givenSet[0]}</Typography>
            </TableCell>
            {matrix[0].map((value, index) => (
              <TableCell
                key={index}
                align="center"
                onClick={() => handleClick(0, index)}
                style={{
                  backgroundColor: value === 1 ? "#57C991" : "white",
                }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="b" align="center">
              <Typography variant="h6"> {givenSet[1]}</Typography>
            </TableCell>
            {matrix[1].map((value, index) => (
              <TableCell
                key={index}
                align="center"
                onClick={() => handleClick(1, index)}
                style={{
                  backgroundColor: value === 1 ? "#57C991" : "white",
                }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="c" align="center">
              <Typography variant="h6"> {givenSet[2]}</Typography>
            </TableCell>
            {matrix[2].map((value, index) => (
              <TableCell
                key={index}
                align="center"
                onClick={() => handleClick(2, index)}
                style={{
                  backgroundColor: value === 1 ? "#57C991" : "white",
                }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="d" align="center">
              <Typography variant="h6"> {givenSet[3]}</Typography>
            </TableCell>
            {matrix[3].map((value, index) => (
              <TableCell
                key={index}
                align="center"
                onClick={() => handleClick(3, index)}
                style={{
                  backgroundColor: value === 1 ? "#57C991" : "white",
                }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="e" align="center">
              <Typography variant="h6"> {givenSet[4]}</Typography>
            </TableCell>
            {matrix[4].map((value, index) => (
              <TableCell
                key={index}
                align="center"
                onClick={() => handleClick(4, index)}
                style={{
                  backgroundColor: value === 1 ? "#57C991" : "white",
                }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="f" align="center">
              <Typography variant="h6"> {givenSet[5]}</Typography>
            </TableCell>
            {matrix[5].map((value, index) => (
              <TableCell
                key={index}
                align="center"
                onClick={() => handleClick(5, index)}
                style={{
                  backgroundColor: value === 1 ? "#57C991" : "white",
                }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="g" align="center">
              <Typography variant="h6"> {givenSet[6]}</Typography>
            </TableCell>
            {matrix[6].map((value, index) => (
              <TableCell
                key={index}
                align="center"
                onClick={() => handleClick(6, index)}
                style={{
                  backgroundColor: value === 1 ? "#57C991" : "white",
                }}
              >
                {value}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DecartMatrix;
