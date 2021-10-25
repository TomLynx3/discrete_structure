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
const Projection = () => {
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

  const examLabels = ["StApliecNumurs", "Atzime", "Datums", "Prieksmets"];
  const fillExam = (
    stapliec: string,
    atzime: string,
    datums: string,
    prieksmets: string
  ) => {
    return { stapliec, atzime, datums, prieksmets };
  };

  const filleProjection = (atzime: string, prieksmets: string) => {
    return { atzime, prieksmets };
  };

  const examData = [
    fillExam("234HJK", "7", "05/10/2021", "DSD"),
    fillExam("89OLK", "9", "06/10/2021", "DSD"),
    fillExam("56OPK", "10", "06/10/2021", "SIMP"),
    fillExam("867MK", "5", "06/10/2021", "DSD"),
    fillExam("14JDJK", "8", "05/12/2021", "SIMP"),
  ];

  const projectionResult = [
    filleProjection("7", "DSD"),
    filleProjection("9", "DSD"),
    filleProjection("10", "SIMP"),
    filleProjection("5", "DSD"),
    filleProjection("8", "SIMP"),
  ];
  return (
    <Box textAlign="center">
      <Button
        variant="contained"
        style={{ marginTop: "1rem" }}
        onClick={handleOpen}
      >
        Projekcija
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
              <h2 id="unstyled-modal-title"> Projekcija</h2>
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
                <Typography align="center" variant="h4">
                  Projekcija
                </Typography>
                <Typography align="center" variant="h6">
                  Exam
                </Typography>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 250, maxHeight: 200 }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        {examLabels.map((item) => (
                          <TableCell align="center" height="10px" width="15px">
                            {item}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {examData.map((row, index) => (
                        <TableRow key={row.stapliec}>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            // style={{ backgroundColor: "#00a9c9" }}
                            height="10px"
                            width="15px"
                          >
                            <Typography variant="h6">
                              {" "}
                              {row.stapliec}
                            </Typography>
                          </TableCell>
                          <TableCell height="10px" width="15px" align="center">
                            {row.atzime}
                          </TableCell>
                          <TableCell height="10px" width="15px" align="center">
                            {row.datums}
                          </TableCell>
                          <TableCell height="10px" width="15px" align="center">
                            {row.prieksmets}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Typography variant="h5" align="center">
                  Exam<sub>atzime,prieksmets</sub>
                </Typography>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 250, maxHeight: 200 }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" height="10px" width="15px">
                          Atzime
                        </TableCell>
                        <TableCell align="center" height="10px" width="15px">
                          Prieksmets
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {projectionResult.map((row, index) => (
                        <TableRow key={row.atzime}>
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            // style={{ backgroundColor: "#00a9c9" }}
                            height="10px"
                            width="15px"
                          >
                            <Typography variant="h6">{row.atzime}</Typography>
                          </TableCell>
                          <TableCell height="10px" width="15px" align="center">
                            {row.prieksmets}
                          </TableCell>
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

export default Projection;
