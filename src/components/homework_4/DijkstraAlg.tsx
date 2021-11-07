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
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
  TableHead,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { CopyToClipboard } from "react-copy-to-clipboard";
import IterationTable from "./IterationTable";
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

const fillIterations = (
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

const iterations = [
  fillIterations(
    "0",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E",
    "\u221E"
  ),
  fillIterations(
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
  fillIterations(
    "0",
    "50",
    "\u221E",
    "\u221E",
    "12",
    "\u221E",
    "6",
    "9",
    "\u221E",
    "25"
  ),
  fillIterations(
    "0",
    "12",
    "\u221E",
    "\u221E",
    "12",
    "17",
    "6",
    "9",
    "33",
    "25"
  ),
  fillIterations(
    "0",
    "12",
    "\u221E",
    "\u221E",
    "12",
    "17",
    "6",
    "9",
    "26",
    "25"
  ),
  fillIterations("0", "12", "43", "\u221E", "12", "17", "6", "9", "26", "25"),
  fillIterations("0", "12", "35", "31", "12", "17", "6", "9", "26", "25"),
  fillIterations("0", "12", "35", "31", "12", "17", "6", "9", "26", "25"),
  fillIterations("0", "12", "35", "31", "12", "17", "6", "9", "26", "25"),
];

const DijkstraAlg = () => {
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

  return (
    <Box textAlign="center">
      <Button
        variant="contained"
        style={{ marginTop: "1rem" }}
        onClick={handleOpen}
      >
        Deikstra metode
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
              <h2 id="unstyled-modal-title"> Deikstra metode</h2>
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
                <Typography variant="h6" align="center">
                  S=&#123;1&#125;
                </Typography>
                <IterationTable
                  selectedElement={0}
                  data={iterations[0]}
                  elementsWithAs={[]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(1) = &#123;2,8,7&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  I(2) = min &#123;{"\u221E"},0+50&#125; = 50;
                </Typography>
                <Typography variant="h6" align="center">
                  I(8) = min &#123;{"\u221E"},0+9&#125; = 9;
                </Typography>
                <Typography variant="h6" align="center">
                  I(7) = min &#123;{"\u221E"},0+6&#125; = 6;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7&#125;
                </Typography>
                <IterationTable
                  selectedElement={6}
                  data={iterations[1]}
                  elementsWithAs={[0]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(7) = &#123;1*,8,10,5&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  I(8) = min &#123;9,6+3&#125; = 9;
                </Typography>
                <Typography variant="h6" align="center">
                  I(10) = min &#123;{"\u221E"},6+19&#125; = 25;
                </Typography>
                <Typography variant="h6" align="center">
                  I(5) = min &#123;{"\u221E"},6+7&#125; = 12;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7,8&#125;
                </Typography>
                <IterationTable
                  selectedElement={7}
                  data={iterations[2]}
                  elementsWithAs={[0, 6]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(8) = &#123;1*,2,7*,6,9,10&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  I(2) = min &#123;50,9+4&#125; = 12;
                </Typography>
                <Typography variant="h6" align="center">
                  I(6) = min &#123;{"\u221E"},9+8&#125; = 17;
                </Typography>
                <Typography variant="h6" align="center">
                  I(9) = min &#123;{"\u221E"},9+24&#125; = 33;
                </Typography>
                <Typography variant="h6" align="center">
                  I(10) = min &#123;25,9+38&#125; = 25;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7,8,2&#125;
                </Typography>
                <IterationTable
                  selectedElement={1}
                  data={iterations[3]}
                  elementsWithAs={[0, 6, 7]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(8) = &#123;1*,8*,9&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  I(9) = min &#123;33,12+14&#125; = 26;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7,8,2,9&#125;
                </Typography>
                <IterationTable
                  selectedElement={8}
                  data={iterations[4]}
                  elementsWithAs={[0, 1, 6, 7]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(9) = &#123;2*,8*,6,3&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  I(6) = min &#123;17,26+4&#125; = 17;
                </Typography>
                <Typography variant="h6" align="center">
                  I(3) = min &#123;{"\u221E"},26+17&#125; = 43;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7,8,2,9,6&#125;
                </Typography>
                <IterationTable
                  selectedElement={5}
                  data={iterations[5]}
                  elementsWithAs={[0, 1, 6, 7, 8]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(6) = &#123;8*,9*,3,4,5,10&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  I(3) = min &#123;43,17+18&#125; = 35;
                </Typography>
                <Typography variant="h6" align="center">
                  I(4) = min &#123;{"\u221E"},17+14&#125; = 31;
                </Typography>
                <Typography variant="h6" align="center">
                  I(5) = min &#123;12,17+8&#125; = 12;
                </Typography>
                <Typography variant="h6" align="center">
                  I(10) = min &#123;25,17+14&#125; = 25;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7,8,2,9,6,5&#125;
                </Typography>
                <IterationTable
                  selectedElement={4}
                  data={iterations[6]}
                  elementsWithAs={[0, 1, 6, 7, 8, 5]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(5) = &#123;7*,6*,10,4&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  I(10) = min &#123;25,12+15&#125; = 25;
                </Typography>
                <Typography variant="h6" align="center">
                  I(4) = min &#123;31,12+29&#125; = 31;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7,8,2,9,6,5,10&#125;
                </Typography>
                <IterationTable
                  selectedElement={9}
                  data={iterations[7]}
                  elementsWithAs={[0, 1, 6, 7, 8, 5, 4]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(10) = &#123;7*,8*,6*,5*&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7,8,2,9,6,5,10,4&#125;
                </Typography>
                <IterationTable
                  selectedElement={3}
                  data={iterations[7]}
                  elementsWithAs={[0, 1, 6, 7, 8, 5, 4, 9]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  Г(4) = &#123;5*,6*,3&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  I(3) = min &#123;35,31+5&#125; = 35;
                </Typography>
                <Typography variant="h6" align="center">
                  S=&#123;1,7,8,2,9,6,5,10,4,3&#125;
                </Typography>
                <IterationTable
                  selectedElement={2}
                  data={iterations[7]}
                  elementsWithAs={[0, 1, 6, 7, 8, 5, 4, 9, 3]}
                ></IterationTable>
                <Typography variant="h6" align="center">
                  No S=1 uz t=3
                </Typography>
                <Typography variant="h6" align="center">
                  1.Solis
                </Typography>
                <Typography variant="h6" align="center">
                  Г(3) = &#123;9,4,6&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  9: 26+17{"\u2260"} 35
                </Typography>
                <Typography variant="h6" align="center">
                  4: 31 + 5 {"\u2260"} 35
                </Typography>
                <Typography variant="h6" align="center">
                  6: 17 + 18 = 35
                </Typography>
                <Typography variant="h6" align="center">
                  {"\u279C"}6,3
                </Typography>
                <Typography variant="h6" align="center">
                  2.Solis
                </Typography>
                <Typography variant="h6" align="center">
                  Г(6) = &#123;9,8,3,4,5,10&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  9: 26+4{"\u2260"} 17
                </Typography>
                <Typography variant="h6" align="center">
                  8: 9+8 = 17
                </Typography>
                <Typography variant="h6" align="center">
                  4: 31+14 {"\u2260"} 17
                </Typography>
                <Typography variant="h6" align="center">
                  5: 12+8 {"\u2260"} 17
                </Typography>
                <Typography variant="h6" align="center">
                  10: 25+14 {"\u2260"} 17
                </Typography>
                <Typography variant="h6" align="center">
                  {"\u279C"}8,6,3
                </Typography>
                <Typography variant="h6" align="center">
                  3.Solis
                </Typography>
                <Typography variant="h6" align="center">
                  Г(8) = &#123;6,9,7,10,1,2&#125;
                </Typography>
                <Typography variant="h6" align="center">
                  9: 26+24{"\u2260"} 9
                </Typography>
                <Typography variant="h6" align="center">
                  7: 6+3 = 9
                </Typography>
                <Typography variant="h6" align="center">
                  10: 25+38 {"\u2260"} 9
                </Typography>
                <Typography variant="h6" align="center">
                  1: 0+9 = 9
                </Typography>
                <Typography variant="h6" align="center">
                  2: 12+4 {"\u2260"} 9
                </Typography>
                <Typography variant="h6" align="center">
                  Isākais ceļš
                </Typography>
                <Typography variant="h6" align="center">
                  {"\u279C"}1,8,6,3
                </Typography>
                <Typography variant="h6" align="center">
                  {"\u03C9"}(1,8) + {"\u03C9"}(8,6) + {"\u03C9"}(6,3) = l(3)= 9
                  + 8 + 18 = 35
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default DijkstraAlg;
