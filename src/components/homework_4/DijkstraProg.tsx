import { ModalUnstyled } from "@mui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import {
  IconButton,
  InputLabel,
  Menu,
  Paper,
  SelectChangeEvent,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Fragment, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
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

interface Output {
  path: any[];
  pathLength: number;
  isSuccess: boolean;
}

const runAlgorithm = (from: number, to: number) => {
  const output: Output = {
    path: [],
    pathLength: 0,
    isSuccess: false,
  };
  const initalMatrix = [
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
  ];

  const s = from - 1;
  const g = to - 1;
  const inf = 100000;
  const p = 10;

  const x = [];
  const t = [];
  const h = [];

  let u = p;

  for (u = 0; u < p; u++) {
    t[u] = inf;
    x[u] = 0;
  }
  h[s] = 0;
  t[s] = 0;
  x[s] = 1;

  let v = s;

  while (true) {
    for (u = 0; u < p; u++) {
      if (parseInt(initalMatrix[v][u]) == 0) {
        continue;
      }
      if (x[u] == 0 && t[u] > t[v] + parseInt(initalMatrix[v][u])) {
        t[u] = t[v] + parseInt(initalMatrix[v][u]);
        h[u] = v;
      }
    }
    let w = inf;
    v = -1;

    for (u = 0; u < p; u++) {
      if (x[u] == 0 && t[u] < w) {
        v = u;
        w = t[u];
      }
    }
    if (v == -1) {
      output.isSuccess = false;
      break;
    }
    if (v == g) {
      output.isSuccess = true;
      u = g;
      while (u != s) {
        output.path.push(u + 1);
        u = h[u];
      }
      output.pathLength = t[g];
      break;
    }
    x[v] = 1;
  }

  if (output.isSuccess) {
    output.path = output.path.reverse();
  }

  return output;
};

const vertexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const DijkstraProg = () => {
  const [open, setOpen] = useState(false);
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

  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(3);
  const [initial, setInitial] = useState(true);
  const [result, setResult] = useState<Output>({
    path: [],
    pathLength: 0,
    isSuccess: false,
  });

  const changeFromVertex = (event: SelectChangeEvent) => {
    setFrom(parseInt(event.target.value));
  };

  const changeToVertex = (event: SelectChangeEvent) => {
    setTo(parseInt(event.target.value));
  };

  const findPath = () => {
    const output = runAlgorithm(from, to);

    setResult(output);
    setInitial(false);
  };

  const buildPathString = (values: number[], from: number, to: number) => {
    let output = `Īsākais ceļš no ${from} uz ${to}: ${from} `;

    for (let i = 0; i < values.length; i++) {
      output += `${values[i]} `;
    }

    return output;
  };

  const renderResult = () => {
    if (result.isSuccess && !initial) {
      return (
        <Fragment>
          <Typography variant="h6">
            {buildPathString(result.path, from, to)}
          </Typography>
          <Typography variant="h6">
            Ceļa garums ir {result.pathLength}
          </Typography>
          <Typography
            variant="h6"
            fontStyle="italic"
            style={{ marginTop: "1rem" }}
          >
            Tiek analizēts tikai iepriekš aprakstītais grafs
          </Typography>
        </Fragment>
      );
    } else if (initial) {
      return (
        <Typography align="center" variant="h6">
          Nospiediet meklēt pogu
        </Typography>
      );
    } else if (!initial && !result.isSuccess) {
      return (
        <Typography align="center" variant="h6">
          Nav ceļa
        </Typography>
      );
    }
  };

  return (
    <Box textAlign="center">
      <Button
        variant="contained"
        style={{ marginTop: "1rem" }}
        onClick={handleOpen}
      >
        Deikstra Programma
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
              <h2 id="unstyled-modal-title"> Deikstra Programma</h2>
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
                <Grid container spacing={2}>
                  <Grid item xs={3}>
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
                        value={from.toString()}
                        label="No"
                        onChange={changeFromVertex}
                      >
                        {vertexes.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
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
                        value={to.toString()}
                        label="Uz"
                        onChange={changeToVertex}
                      >
                        {vertexes.map((item, index) => (
                          <MenuItem key={index} value={item}>
                            {item}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      style={{ marginTop: "1.5rem" }}
                      onClick={findPath}
                    >
                      Meklēt
                    </Button>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={2}
                  style={{ marginTop: "2rem", padding: "1rem" }}
                >
                  <Grid item xs={4}>
                    <Typography variant="h6" align="center">
                      Atbilde
                    </Typography>
                    {renderResult()}
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="h6" align="center">
                      Programmas kods
                    </Typography>
                    <Paper
                      elevation={3}
                      style={{ overflowY: "scroll", maxHeight: "400px" }}
                    >
                      <pre style={{ color: "blue" }}>
                        {`const runAlgorithm = (from: number, to: number) => {
  const output: Output = {
    path: [],
    pathLength: 0,
    isSuccess: false,
  };
  const initalMatrix = [
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
  ];

  const s = from - 1;
  const g = to - 1;
  const inf = 100000;
  const p = 10;

  const x = [];
  const t = [];
  const h = [];

  let u = p;

  for (u = 0; u < p; u++) {
    t[u] = inf;
    x[u] = 0;
  }
  h[s] = 0;
  t[s] = 0;
  x[s] = 1;

  let v = s;

  while (true) {
    for (u = 0; u < p; u++) {
      if (parseInt(initalMatrix[v][u]) == 0) {
        continue;
      }
      if (x[u] == 0 && t[u] > t[v] + parseInt(initalMatrix[v][u])) {
        t[u] = t[v] + parseInt(initalMatrix[v][u]);
        h[u] = v;
      }
    }
    let w = inf;
    v = -1;

    for (u = 0; u < p; u++) {
      if (x[u] == 0 && t[u] < w) {
        v = u;
        w = t[u];
      }
    }
    if (v == -1) {
      output.isSuccess = false;
      break;
    }
    if (v == g) {
      output.isSuccess = true;
      u = g;
      while (u != s) {
        output.path.push(u + 1);
        u = h[u];
      }
      output.pathLength = t[g];
      break;
    }
    x[v] = 1;
  }

  if (output.isSuccess) {
    output.path = output.path.reverse();
  }

  return output;
};`}
                      </pre>
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default DijkstraProg;
