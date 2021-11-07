import { ModalUnstyled } from "@mui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Snackbar,
  Typography,
  TextField,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
  Select,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import IterationTable from "./IterationTable";
import { isTemplateHead } from "typescript";
const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 1200,
  height: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

enum LabelType {
  NUMERIC = "Numuri",
  ALPHABETIC = "Burti",
  //CUSTOM="",
}

const generateMatrixLabels = (type: LabelType, length: number): string[] => {
  const output: string[] = [];
  //console.log(length);
  switch (type) {
    case LabelType.NUMERIC:
      for (let i = 1; i <= length; i++) {
        output.push(i.toString());
      }
      break;
  }

  return output;
};

const DeikstraAlg = (vertexes: number, matrix: number[]) => {
  const infinity = 100000;
};

const possibleMatrixSizes = [2, 3, 4, 5, 6, 7, 8, 9, 10];

const fillMatrix = (labels: string[]) => {
  const output = [];

  for (let i = 0; i < labels.length; i++) {
    const row = [];
    for (let j = 0; j <= labels.length; j++) {
      if (j === 0) {
        row.push(labels[i]);
      } else {
        row.push("");
      }
    }
    output.push(row);
  }
  return output;
};

const Deikstr = (matrix: string[][], from: number, to: number) => {
  const output = [];
  const inf = 100000;

  const x = [];

  const t = [];
  const h = [];

  const vertex = matrix.length;

  for (let i = 0; i < vertex; i++) {
    t[i] = inf;
    x[i] = 0;
  }
  h[from - 1] = 0;
  t[from - 1] = 0;
  x[from - 1] = 1;

  let v = from - 1;

  while (true) {
    for (let i = 0; i < vertex; i++) {
      if (parseInt(matrix[v][i]) == 0) continue;
      if (x[i] == 0 && t[i] > t[v] + parseInt(matrix[v][i])) {
        t[i] = t[v] + parseInt(matrix[v][i]);
        h[i] = v;
      }
    }

    let w = inf;
    v = -1;
    for (let i = 0; i < vertex; i++) {
      if (x[i] == 0 && t[i] < w) {
        v = i;
        w = t[i];
      }
    }
    if (v == -1) {
      break;
    }
    if (v == to - 1) {
      let m = to - 1;

      while (m != from - 1) {
        output.push(m + 1);
        m = h[m];
      }

      break;
    }
    x[v] = 1;
  }
  return output;
};

const DijkstraAlgImpl = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setMatrixSize(10);

    setLabels(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);

    const initialMatrix = [
      ["1", "0", "50", "0", "0", "0", "0", "6", "9", "0", "0"],
      ["2", "50", "0", "0", "0", "0", "0", "0", "4", "14", "0"],
      ["3", "0", "0", "0", "5", "0", "18", "0", "0", "17", "0"],
      ["4", "0", "0", "5", "0", "29", "14", "0", "0", "0", "0"],
      ["5", "0", "0", "0", "29", "0", "8", "7", "0", "0", "15"],
      ["6", "0", "0", "18", "14", "8", "0", "0", "8", "4", "14"],
      ["7", "6", "0", "0", "0", "7", "0", "0", "3", "0", "19"],
      ["8", "9", "4", "0", "0", "0", "8", "3", "0", "24", "38"],
      ["9", "0", "14", "17", "0", "0", "4", "0", "24", "0", "0"],
      ["10", "0", "0", "0", "0", "15", "14", "19", "38", "0", "0"],
    ];

    setMatrix(initialMatrix);
    console.log(matrix);
  }, [open]);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const changeMatrixSize = (event: SelectChangeEvent) => {
    setMatrixSize(parseInt(event.target.value, 10));
    const labels = generateMatrixLabels(
      LabelType.NUMERIC,
      parseInt(event.target.value, 10)
    );
    setLabels(labels);
    const newMatrix = fillMatrix(labels);

    setMatrix(newMatrix);
  };

  const handleFromVertexChange = (event: SelectChangeEvent) => {
    setFromVertex(event.target.value);
  };
  const handleToVertexChange = (event: SelectChangeEvent) => {
    setToVertex(event.target.value);
  };
  const [labels, setLabels] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
  ]);
  const [matrixSize, setMatrixSize] = useState(10);
  const [isDisabled, setDisabled] = useState(false);
  const [labelType, setLabelType] = useState(LabelType.NUMERIC);
  const [matrix, setMatrix] = useState([
    ["1", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["2", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["3", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["4", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["5", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["6", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["7", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["8", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["9", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
    ["10", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ]);

  const [fromVertex, setFromVertex] = useState("");
  const [toVertex, setToVertex] = useState("");

  const findPath = () => {
    const output = Deikstr(
      [
        ["0", "50", "0", "0", "0", "0", "6", "9", "0", "0"],
        ["50", "0", "0", "0", "0", "0", "0", "4", "14", "0"],
        ["0", "0", "0", "5", "0", "18", "0", "0", "17", "0"],
        ["0", "0", "5", "0", "29", "14", "0", "0", "0", "0"],
        ["0", "0", "0", "29", "0", "8", "7", "0", "0", "15"],
        ["0", "0", "18", "14", "8", "0", "0", "8", "4", "14"],
        ["6", "0", "0", "0", "7", "0", "0", "3", "0", "19"],
        ["9", "4", "0", "0", "0", "8", "3", "0", "24", "38"],
        ["0", "14", "17", "0", "0", "4", "0", "24", "0", "0"],
        ["0", "0", "0", "0", "15", "14", "19", "38", "0", "0"],
      ],
      1,
      3
    );

    console.log(output);
  };

  return (
    <Box textAlign="center">
      <Button
        variant="contained"
        style={{ marginTop: "1rem" }}
        onClick={handleOpen}
      >
        Deikstra kalkulatora programma
      </Button>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <Grid container>
            <Grid item xs={11}>
              <h2 id="unstyled-modal-title"> Deikstra kalkulatora programma</h2>
            </Grid>
            <Grid
              item
              xs={1}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                color="inherit"
                edge="end"
                size="large"
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>

          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleCloseMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          ></Menu>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper
                elevation={3}
                style={{
                  backgroundColor: "#95b0b5",
                  height: "600px",
                  overflowY: "scroll",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={2}>
                    <FormControl
                      style={{
                        marginTop: "1rem",
                        marginLeft: "1rem",
                        width: "75px",
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">
                        Izmērs
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={matrixSize.toString()}
                        label="Izmērs"
                        onChange={changeMatrixSize}
                        disabled={isDisabled}
                      >
                        {possibleMatrixSizes.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <FormControl
                      style={{
                        marginTop: "1rem",
                        marginLeft: "1rem",
                        width: "75px",
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">No</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fromVertex.toString()}
                        label="No"
                        onChange={handleFromVertexChange}
                        disabled={isDisabled}
                      >
                        {labels.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl
                      style={{
                        marginTop: "1rem",
                        marginLeft: "1rem",
                        width: "75px",
                      }}
                    >
                      <InputLabel id="demo-simple-select-label">Uz</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={toVertex.toString()}
                        label="Uz"
                        onChange={handleToVertexChange}
                        disabled={isDisabled}
                      >
                        {labels.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="contained"
                      style={{ marginTop: "1rem" }}
                      onClick={findPath}
                    >
                      Meklēt
                    </Button>
                  </Grid>
                </Grid>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: "400px", maxHeight: "300px" }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell
                          align="center"
                          height="10px"
                          width="10px"
                        ></TableCell>
                        {labels.map((item, index) => (
                          <TableCell
                            align="center"
                            height="10px"
                            width="10px"
                            key={index}
                          >
                            {item}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {matrix.map((row, rowIndex) => (
                        <TableRow>
                          {row.map((item, colIndex) => (
                            <TableCell
                              align="center"
                              height="15px"
                              width="15px"
                            >
                              {colIndex == 0 ? (
                                <Typography>{item}</Typography>
                              ) : (
                                <TextField
                                  id="outlined-basic"
                                  variant="outlined"
                                  placeholder="?"
                                  value={item}
                                  inputProps={{
                                    style: {
                                      textAlign: "center",
                                      width: "35px",
                                      height: "10px",
                                    },
                                  }}
                                />
                              )}
                            </TableCell>
                          ))}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default DijkstraAlgImpl;
