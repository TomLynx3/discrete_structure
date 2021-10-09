import { Paper, Grid, Box, IconButton } from "@mui/material";

import { ModalUnstyled } from "@mui/core";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import { AlgorithmType } from "./Exercise2_2";

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

const ReflexiveModal = ({ show, closeHandler }: any) => {
  return (
    <StyledModal
      open={show}
      BackdropComponent={Backdrop}
      onClose={() => closeHandler(AlgorithmType.REFLEXIVE)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container xs={12}>
          <Grid item xs={11}>
            <h2> Refleksīvas īpašības algoritms</h2>
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
              onClick={() => closeHandler(AlgorithmType.REFLEXIVE)}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Paper elevation={6} style={{ backgroundColor: "#98AFBA" }}>
                <Box display="flex" justifyContent="center">
                  <img
                    src="/homework2/block_diagramma_1.png"
                    height="100%"
                    width="100%"
                  />
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={6}>
                <pre
                  style={{ color: "blue" }}
                >{`const checkIfReflexive = () => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        //parbaudam vai galvena diogonale 
        //visi ir vieninieki
        if (i === j && matrix[i][j] !== 1) {
          return false;
        }
      }
    }

    return true;
  };`}</pre>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </StyledModal>
  );
};

export default ReflexiveModal;
