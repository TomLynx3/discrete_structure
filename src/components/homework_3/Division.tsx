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
const Division = () => {
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

  const fillDivisition = (stapliecnumurs: string) => {
    return { stapliecnumurs };
  };

  const examData = [
    fillExam("234HJK", "7", "05/10/2021", "DSD"),
    fillExam("89OLK", "9", "06/10/2021", "DSD"),
    fillExam("56OPK", "10", "06/10/2021", "SIMP"),
    fillExam("867MK", "5", "06/10/2021", "DSD"),
    fillExam("14JDJK", "8", "05/12/2021", "SIMP"),
  ];

  const examData1 = [
    fillExam("234HJK", "7", "05/10/2021", "DSD"),
    fillExam("89OLK", "9", "06/10/2021", "DSD"),
    fillExam("562PK", "7", "06/10/2021", "SIMP"),
  ];

  const examDivisionResult = [
    fillDivisition("234HJK"),
    fillDivisition("89OLK"),
  ];
  return (
    <Box textAlign="center">
      <Button
        variant="contained"
        style={{ marginTop: "1rem" }}
        onClick={handleOpen}
      >
        Dalīšana
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
              <h2 id="unstyled-modal-title">Dalīšana</h2>
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
                  Dalīšana
                </Typography>
                <Grid container xs={12} spacing={2}>
                  <Grid item xs={6}>
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
                              <TableCell
                                align="center"
                                height="10px"
                                width="15px"
                              >
                                {item}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {examData.map((row, index) => (
                            <TableRow
                              key={row.stapliec}
                              sx={{
                                border: 0,
                                backgroundColor:
                                  index == 0 || index == 1 ? "#00a9c9" : null,
                              }}
                            >
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
                              <TableCell
                                height="10px"
                                width="15px"
                                align="center"
                              >
                                {row.atzime}
                              </TableCell>
                              <TableCell
                                height="10px"
                                width="15px"
                                align="center"
                              >
                                {row.datums}
                              </TableCell>
                              <TableCell
                                height="10px"
                                width="15px"
                                align="center"
                              >
                                {row.prieksmets}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography align="center" variant="h6">
                      Exam1
                    </Typography>
                    <TableContainer component={Paper}>
                      <Table
                        sx={{ minWidth: 250, maxHeight: 200 }}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            {examLabels.map((item) => (
                              <TableCell
                                align="center"
                                height="10px"
                                width="15px"
                              >
                                {item}
                              </TableCell>
                            ))}
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {examData1.map((row, index) => (
                            <TableRow
                              key={row.stapliec}
                              sx={{
                                border: 0,
                                backgroundColor:
                                  index == 0 || index == 1 ? "#00a9c9" : null,
                              }}
                            >
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                                height="10px"
                                width="15px"
                              >
                                <Typography variant="h6">
                                  {" "}
                                  {row.stapliec}
                                </Typography>
                              </TableCell>
                              <TableCell
                                height="10px"
                                width="15px"
                                align="center"
                              >
                                {row.atzime}
                              </TableCell>
                              <TableCell
                                height="10px"
                                width="15px"
                                align="center"
                              >
                                {row.datums}
                              </TableCell>
                              <TableCell
                                height="10px"
                                width="15px"
                                align="center"
                              >
                                {row.prieksmets}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>

                <Typography variant="h5" align="center">
                  Exam<sub>1,4</sub> {"\u00F7"} Exam1<sub>4</sub>
                </Typography>
                <TableContainer component={Paper}>
                  <Table
                    sx={{ minWidth: 250, maxHeight: 200 }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" height="10px" width="15px">
                          {examLabels[0]}
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {examDivisionResult.map((row) => (
                        <TableRow
                          key={row.stapliecnumurs}
                          sx={{
                            border: 0,
                            backgroundColor: "#00a9c9",
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            align="center"
                            height="10px"
                            width="15px"
                          >
                            <Typography variant="h6">
                              {" "}
                              {row.stapliecnumurs}
                            </Typography>
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

export default Division;
