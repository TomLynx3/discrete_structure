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
import { useState } from "react";
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
  width: 1400,
  height: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};

const fillWeightMatrix = (name: string, ...args: string[]) => {
  const res: { [k: string]: any } = { name: name };

  args.forEach((weight, index) => {
    const fieldName: string = `weight${index + 1}`;
    res[fieldName] = weight;
  });

  return res;
};

const fillMatrixP = (
  weight1: string,
  weight2: string,
  weight3: string,
  weight4: string,
  weight5: string
) => {
  return { weight1, weight2, weight3, weight4, weight5 };
};

const firstIteration = [
  fillWeightMatrix("a", "0", "28", "5", "99999", "99999"),
  fillWeightMatrix("b", "28", "0", "16", "8", "18"),
  fillWeightMatrix("c", "5", "16", "0", "23", "15"),
  fillWeightMatrix("d", "99999", "8", "23", "0", "10"),
  fillWeightMatrix("f", "99999", "18", "15", "10", "0"),
];

const firstIterationP = [
  fillMatrixP("1", "1", "1", "0", "0"),
  fillMatrixP("2", "2", "2", "2", "2"),
  fillMatrixP("3", "3", "3", "3", "3"),
  fillMatrixP("0", "4", "4", "4", "4"),
  fillMatrixP("0", "5", "5", "5", "5"),
];

const Floyd = () => {
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
        Floida Algoritms
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
              <h2 id="unstyled-modal-title">Floida Algoritms</h2>
              <Button variant="contained" style={{ marginBottom: "1rem" }}>
                <a href={Excel} download style={{ textDecoration: "none" }}>
                  <Typography variant="h6">Lejupielādēt Excel failu</Typography>
                </a>
              </Button>
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
                <iframe
                  src={Pdf}
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default Floyd;
