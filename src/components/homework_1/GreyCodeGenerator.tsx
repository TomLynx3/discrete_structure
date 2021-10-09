import { ModalUnstyled } from "@mui/core";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import { IconButton, Menu, MenuItem, Paper, Typography } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
const GreyCodeGenerator = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [greyCode, setGreyCode] = useState(5);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const openMenu = Boolean(anchorEl);
  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const greyCodeMenu = [2, 3, 4, 5, 6, 7, 8, 9, 10];

  const changeGreyCode = (choice: number): void => {
    setGreyCode(choice);
    setAnchorEl(null);
  };

  const generateGreyArr = (n: number): string[] => {
    if (n <= 0) return [];

    let arr = [];

    arr.push("0");
    arr.push("1");

    let i, j;
    for (i = 2; i < 1 << n; i = i << 1) {
      for (j = i - 1; j >= 0; j--) {
        arr.push(arr[j]);
      }

      for (j = 0; j < i; j++) {
        arr[j] = "0" + arr[j];
      }

      for (j = i; j < 2 * i; j++) arr[j] = "1" + arr[j];
    }

    return arr;
  };

  return (
    <Box textAlign="center">
      <Button
        variant="contained"
        style={{ marginTop: "1rem" }}
        onClick={handleOpen}
      >
        Greja Koda Generators
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
              <h2 id="unstyled-modal-title">Grey Code</h2>
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
          <Grid container xs={3}>
            <Grid item xs={2}>
              <Typography variant="h5" style={{ marginTop: "5px" }}>
                N=
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onClick={handleOpenMenu}
              >
                <Typography variant="h5">{greyCode}</Typography>
                <ArrowDropDownIcon />
              </Button>
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
          >
            {greyCodeMenu.map((menuItem) => (
              <MenuItem onClick={() => changeGreyCode(menuItem)}>
                {menuItem}
              </MenuItem>
            ))}
          </Menu>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                style={{
                  backgroundColor: "#95b0b5",
                  height: "600px",
                  overflowY: "scroll",
                }}
              >
                {generateGreyArr(greyCode).map((output) => (
                  <Typography variant="h6" textAlign="center">
                    {output}
                  </Typography>
                ))}
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper
                elevation={3}
                style={{
                  backgroundColor: "#95b0b5",
                  height: "600px",
                  overflowY: "scroll",
                }}
              >
                <pre style={{ color: "blue" }}>{`function generateGreyarr(n) {
    if (n &lt;= 0) return;

    // 'arr' seit bus visi genereti kodi
    let arr = [];

    //sakam ar vienu bitu
    arr.push("0");
    arr.push("1");

    // Katra iteracija genere  2*i kodus 
    //no ieprieks generetajiem i kodiem.
    let i, j;
    // 1'&lt;&lt;'nvar aizvietot ar Math.pow(i,2)
    for (i = 2; i &lt; 1 &lt;&lt; n; i = i &lt;&lt; 1) {

        //Ievieto iepreiks generatus kodus
        //bet apgriezta seciba. arr satur vienadus kodus
        for (j = i - 1; j &gt;= 0; j--) {
            arr.push(arr[j]);
        }
        //pievieno 0 pirmaijai pusei
        for (j = 0; j &lt; i; j++) {
            arr[j] = "0" + arr[j];
        }
        // pievieno 1 otrai pusei
        for (j = i; j &lt; 2 * i; j++) {
            arr[j] = "1" + arr[j];
        }
    }

    return arr;
}
               `}</pre>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default GreyCodeGenerator;
