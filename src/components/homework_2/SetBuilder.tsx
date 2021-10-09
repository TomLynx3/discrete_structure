import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TextField,
  Grid,
  Button,
  Avatar,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";

const SetBuilder = ({ x, y }: { x: number; y: number }) => {
  const [matrix, setMatrix] = useState<number[][]>([]);
  const [xAxis, setXAxis] = useState<any[]>([]);
  const [yAxis, setYAxis] = useState<any[]>([]);
  const [canSetRelation, setCanSetRelation] = useState(false);
  const [relations, setRelation] = useState<string[]>([]);
  const [answer, setAnswer] = useState("");
  const [canRun, setCanRun] = useState(false);

  useEffect(() => {
    buildSet();
  }, [x, y]);

  useEffect(() => {
    cleantUpState();
    buildXAxis(x);
    buildYAxis(y);
  }, [x, y]);

  const cleantUpState = () => {
    setCanSetRelation(false);
    setRelation([]);
    setAnswer("");
    setCanRun(false);
  };

  const buildSet = () => {
    let output = [];
    for (let i = 0; i < y; i++) {
      let row = [];
      for (let j = 0; j < x; j++) {
        row.push(0);
        if (j === x - 1) {
          output.push(row);
        }
      }
    }

    setMatrix(output);
  };
  const buildXAxis = (x: number) => {
    const xAxis = [];

    for (let i = 0; i <= x; i++) {
      xAxis.push({ value: "?", error: true });
    }

    setXAxis(xAxis);
  };

  const buildYAxis = (y: number) => {
    const yAxis = [];
    for (let i = 0; i < y; i++) {
      yAxis.push({ value: "?", error: true });
    }

    setYAxis(yAxis);
    //revalidateCanSetRelation()
  };

  const onXAxisChange = (index: number, value: any) => {
    let items = [...xAxis];

    items[index].error = checkIfValidInput(value);
    items[index].value = value;
    setXAxis(items);

    revalidateCanSetRelation();
  };

  const onYAxisChange = (index: number, value: any) => {
    let items = [...yAxis];

    items[index].error = checkIfValidInput(value);
    items[index].value = value;
    setYAxis(items);

    revalidateCanSetRelation();
  };

  const revalidateCanSetRelation = (): void => {
    for (let i = 1; i < xAxis.length; i++) {
      if (xAxis[i].value === "?" || xAxis[i].error) {
        setCanSetRelation(false);
        return;
      }
    }
    for (let y of yAxis) {
      if (y.value === "?" || y.error) {
        setCanSetRelation(false);
        return;
      }
    }

    setCanSetRelation(true);
  };

  const checkIfValidInput = (value: any): boolean => {
    if (value === undefined || value === null) {
      return false;
    }
    for (let x of xAxis) {
      if (x.value.toLowerCase() === value.toLowerCase()) {
        return true;
      }
    }

    for (let y of yAxis) {
      if (y.value.toLowerCase() === value.toLowerCase()) {
        return true;
      }
    }
    return false;
  };

  const changeRelation = (row: number, col: number) => {
    if (!canSetRelation) {
      return;
    }
    let items = [...matrix];

    if (items[row][col] === 1) {
      items[row][col] = 0;
    } else {
      items[row][col] = 1;
    }

    setMatrix(items);
    console.log(matrix);
    checkIfCanRun();
  };

  const generateImages = () => {
    const newRelations = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          let yValue;
          let xValue;
          if (yAxis.length === 1) {
            yValue = yAxis[0].value;
          } else {
            yValue = yAxis[i].value;
          }
          xValue = xAxis[j + 1].value;
          let relation = `<${xValue}, ${yValue}>`;

          newRelations.push(relation);
        }
      }
    }
    setRelation(newRelations);
  };

  const checkIfInjection = () => {
    if (matrix.length === 1) {
      let match = false;
      for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 1) {
          if (match) {
            return false;
          } else {
            match = true;
          }
        }
      }
      return true;
    }

    for (let i = 0; i < matrix.length; i++) {
      let match = false;
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          if (match) {
            return false;
          } else {
            match = true;
          }
        }
      }
    }
    return true;
  };

  const checkIfSurjective = () => {
    if (matrix.length === 1) {
      console.log(matrix[0].some((x) => x !== 1));
      console.log("here");
      return !matrix[0].some((x) => x !== 1);
    }

    const columnLength = yAxis.length;
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < columnLength; j++) {
        if (matrix[j][i] === 1) {
          break;
        }
        if (j === columnLength - 1) {
          return false;
        }
      }
    }
    return true;
  };

  const checkIfFunction = () => {
    if (matrix.length === 1) {
      return true;
    }
    const columnLength = yAxis.length;
    for (let i = 0; i < matrix.length; i++) {
      let match = false;
      for (let j = 0; j < columnLength; j++) {
        if (matrix[j][i] === 1) {
          if (match) {
            return false;
          } else {
            match = true;
          }
        }
      }
    }
    return true;
  };

  const handleRun = () => {
    const isFunction = checkIfFunction();
    if (isFunction) {
      generateImages();
      const isInjection = checkIfInjection();
      const isSurjective = checkIfSurjective();

      if (isInjection && isSurjective) {
        setAnswer("Dotais attēlojums ir Bijekcija");
        return;
      } else if (isInjection) {
        setAnswer("Dotais attēlojums ir Injekcija");
        return;
      } else if (isSurjective) {
        setAnswer("Dotais attēlojums ir Sirjekcija");
        return;
      }
    } else {
      setAnswer("Dotais attēlojums nav funkcija");
    }
  };

  const checkIfCanRun = () => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          console.log("Testing");
          setCanRun(true);
          return;
        }
      }
    }
    setCanRun(false);
  };

  return (
    <Grid container style={{ display: "flex", justifyContent: "center" }}>
      {x === 0 && y === 0 ? (
        <Grid item xs={6} style={{ marginTop: "2rem" }}>
          <Typography variant="h6" textAlign="center">
            Ievadiet kopu lielumus
          </Typography>{" "}
        </Grid>
      ) : (
        <Grid item xs={6}>
          <TableContainer
            component={Paper}
            sx={{ minWidth: 250, maxWidth: 550, marginLeft: "2rem" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {xAxis.map((row, index) => (
                    <TableCell key={index} width="100px" align="center">
                      {index == 0 ? (
                        <Avatar
                          sx={{
                            bgcolor: canSetRelation ? "#57C991" : "#E30639",
                            marginLeft: "2rem",
                          }}
                        >
                          {canSetRelation ? <CheckIcon /> : <ClearIcon />}
                        </Avatar>
                      ) : (
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          placeholder="?"
                          value={xAxis[index].value}
                          onChange={(event) =>
                            onXAxisChange(index, event.target.value)
                          }
                          error={row.error}
                          inputProps={{ style: { textAlign: "center" } }}
                        />
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {matrix.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    {
                      <TableCell align="center" key={index}>
                        {" "}
                        <TextField
                          id="outlined-basic"
                          variant="outlined"
                          error={yAxis[index].error}
                          value={yAxis[index].value}
                          placeholder="?"
                          onChange={(event) =>
                            onYAxisChange(index, event.target.value)
                          }
                          inputProps={{ style: { textAlign: "center" } }}
                        />
                      </TableCell>
                    }
                    {row.map((row2, index1) => (
                      <TableCell
                        align="center"
                        key={index1}
                        style={{
                          backgroundColor: row2 === 1 ? "#57C991" : "white",
                        }}
                        onClick={() => {
                          changeRelation(index, index1);
                        }}
                      >
                        {row2}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      )}
      {x === 0 && y === 0 ? null : (
        <Grid item xs={6}>
          <Paper elevation={3} style={{ height: "100%" }}>
            {canSetRelation ? (
              <Typography variant="h6" textAlign="center">
                Varat ievadīt attēlojumus, lai to izdarīto uzklišķiniet ar peli.
              </Typography>
            ) : (
              <Typography variant="h6" textAlign="center">
                Aizpildiet ludzu tabulu
              </Typography>
            )}
            {canSetRelation ? (
              <Grid
                item
                xs={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleRun}
                  disabled={!canRun}
                >
                  Run
                </Button>
              </Grid>
            ) : null}
            <Grid item xs={12}>
              {answer.length > 0 ? (
                <Typography variant="h6">
                  F = &#123;{" "}
                  {relations.map(
                    (relation, index) =>
                      relation + (index === relations.length - 1 ? "" : ",")
                  )}{" "}
                  &#125;
                  <br />
                  {answer}
                </Typography>
              ) : // <Typography></Typography>
              null}
            </Grid>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};
export default SetBuilder;
