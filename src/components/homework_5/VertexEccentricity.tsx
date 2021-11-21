import { useState } from "react";
import { ModalUnstyled } from "@mui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Pdf from "../../assets/homework5/floyed_pdf.pdf";
import Excel from "../../assets/homework5/floyed.xlsx";
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
import CloseIcon from "@mui/icons-material/Close";
import Graph from "../common/Graph";

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
  width: 1400,
  height: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

const matrixLabels = ["a", "b", "c", "d", "f"];

const fillWeightMatrix = (name: string, ...args: string[]) => {
  const res: { [k: string]: any } = { name: name };

  args.forEach((weight, index) => {
    const fieldName: string = `weight${index + 1}`;
    res[fieldName] = weight;
  });

  return res;
};

const matrixData = [
  fillWeightMatrix("a", "0", "21", "5", "28", "20"),
  fillWeightMatrix("b", "21", "0", "16", "8", "18"),
  fillWeightMatrix("c", "5", "16", "0", "23", "15"),
  fillWeightMatrix("d", "28", "8", "23", "0", "10"),
  fillWeightMatrix("f", "20", "18", "15", "10", "0"),
];

const VertexEccentricity = () => {
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
        Virsotņu ekscentrisitātes,rādiuss un diametrs,centrālas un perifērijas
        virsotnes
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
              <h2 id="unstyled-modal-title">
                Virsotņu ekscentrisitātes,grafa rādiuss un diametrs,centrālas un
                perifērijas virsotnes
              </h2>
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
          <Paper
            elevation={3}
            style={{
              backgroundColor: "#95b0b5",
              height: "600px",
              overflowY: "scroll",
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Graph matrixLabels={matrixLabels} matrix={matrixData}></Graph>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h5" align="center">
                  Virsotne a
                </Typography>
                <Typography>W={"\u03C1"}(a,b)=21</Typography>
                <Typography>W={"\u03C1"}(a,c)=5</Typography>
                <Typography>W={"\u03C1"}(a,d)=28</Typography>
                <Typography>W={"\u03C1"}(a,b)=20</Typography>
                <Typography>
                  <b>e(a)=28</b>
                </Typography>
                <Typography variant="h5" align="center">
                  Virsotne b
                </Typography>
                <Typography>W={"\u03C1"}(b,a)=21</Typography>
                <Typography>W={"\u03C1"}(b,c)=16</Typography>
                <Typography>W={"\u03C1"}(b,d)=8</Typography>
                <Typography>W={"\u03C1"}(b,f)=18</Typography>
                <Typography>
                  <b>e(b)=21</b>
                </Typography>
                <Typography variant="h5" align="center">
                  Virsotne c
                </Typography>
                <Typography>W={"\u03C1"}(c,a)=5</Typography>
                <Typography>W={"\u03C1"}(c,b)=16</Typography>
                <Typography>W={"\u03C1"}(c,d)=23</Typography>
                <Typography>W={"\u03C1"}(c,f)=15</Typography>
                <Typography>
                  <b>e(c)=23</b>
                </Typography>
                <Typography variant="h5" align="center">
                  Virsotne d
                </Typography>
                <Typography>W={"\u03C1"}(d,a)=28</Typography>
                <Typography>W={"\u03C1"}(d,b)=8</Typography>
                <Typography>W={"\u03C1"}(d,c)=23</Typography>
                <Typography>W={"\u03C1"}(d,f)=10</Typography>
                <Typography>
                  <b>e(d)=28</b>
                </Typography>
                <Typography variant="h5" align="center">
                  Virsotne f
                </Typography>
                <Typography>W={"\u03C1"}(f,a)=20</Typography>
                <Typography>W={"\u03C1"}(f,b)=18</Typography>
                <Typography>W={"\u03C1"}(f,c)=15</Typography>
                <Typography>W={"\u03C1"}(f,d)=15</Typography>
                <Typography>
                  <b>e(f)=20</b>
                </Typography>
                <Typography variant="h5" align="center">
                  <b>Grafa diametrs d(G)=e(d)=e(a)=28</b>
                </Typography>
                <Typography variant="h5" align="center">
                  <b>Grafa radius r(G)=e(f)=20</b>
                </Typography>
                <Typography variant="h5" align="center">
                  <b>Grafa centrāla virsotne ir f e(f)=r(G)=20</b>
                </Typography>
                <Typography variant="h5" align="center">
                  <b>Grafa perifērijas virsotnes ir d,a e(d)=e(a)=d(G)=28</b>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default VertexEccentricity;
