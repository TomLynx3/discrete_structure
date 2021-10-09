import { Paper, Menu, MenuItem, Button, Typography, Grid } from "@mui/material";
import { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SetBuilder from "./SetBuilder";
const Exercise1_2 = () => {
  const sizeX = [1, 2, 3, 4, 5];
  const sizeY = [1, 2, 3, 4, 5, 6, 7];

  const [anchorElX, setAnchorElX] = useState(null);
  const [anchorElY, setAnchorElY] = useState(null);

  const [x, setX] = useState(1);
  const [y, setY] = useState(1);

  const handleOpenXMenu = (event: any) => {
    setAnchorElX(event.currentTarget);
  };
  const handleCloseXMenu = () => {
    setAnchorElX(null);
  };
  const openXMenu = Boolean(anchorElX);

  const handleOpenYMenu = (event: any) => {
    setAnchorElY(event.currentTarget);
  };
  const handleCloseYMenu = () => {
    setAnchorElY(null);
  };
  const openYMenu = Boolean(anchorElY);

  const changeX = (choice: number): void => {
    setX(choice);
    setAnchorElX(null);
    
  };
  const changeY = (choice: number): void => {
    setY(choice);
    setAnchorElY(null);
  };

  return (
    <Paper
      elevation={3}
      style={{ height: "100%", width: "100%", backgroundColor: "#d9e9e4" }}
    >
      <Grid container xs={12} spacing={2} justifyContent="center">
        <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">Kopas X elementu skaits</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            id="demo-positioned-button"
            aria-controls="demo-positioned-menu"
            aria-haspopup="true"
            aria-expanded={openXMenu ? "true" : undefined}
            onClick={handleOpenXMenu}
          >
            <Typography variant="h5">{x}</Typography>
            <ArrowDropDownIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorElX}
            open={openXMenu}
            onClose={handleCloseXMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {sizeX.map((menuItem) => (
              <MenuItem onClick={() => changeX(menuItem)}>{menuItem}</MenuItem>
            ))}
          </Menu>
        </Grid>
      </Grid>
      <Grid container xs={12} spacing={2} justifyContent="center">
        <Grid item xs={2} style={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6">Kopas Y elementu skaits</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            id="demo-positioned-button"
            aria-controls="demo-positioned-menu"
            aria-haspopup="true"
            aria-expanded={openYMenu ? "true" : undefined}
            onClick={handleOpenYMenu}
          >
            <Typography variant="h5">{y}</Typography>
            <ArrowDropDownIcon />
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorElY}
            open={openYMenu}
            onClose={handleCloseYMenu}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            {sizeY.map((menuItem) => (
              <MenuItem onClick={() => changeY(menuItem)}>{menuItem}</MenuItem>
            ))}
          </Menu>
        </Grid>
        <SetBuilder x={x} y={y}></SetBuilder>
      </Grid>
    </Paper>
  );
};

export default Exercise1_2;
