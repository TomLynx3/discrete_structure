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
  width: 1200,
  height: 750,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 2,
  px: 4,
  pb: 3,
};
const InsertStatements = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showSnackBar, setShowSnackBar] = useState(false);
  const [copyValue, setCopyValue] = useState(`BEGIN TRANSACTION;
CREATE TABLE Student 
(
	StApliecNumurs TEXT PRIMARY KEY NOT NULL,
  	Specialitate TEXT NOT NULL,
  Uzvards TEXT NOT NULL,
  Vards TEXT NOT NULL
);

CREATE TABLE Lecturer
(
	Amats TEXT NOT NULL,
  	Prieksmets TEXT  NOT NULL,
  	Uzvards TEXT NOT NULL,
  	Vards TEXT NOT NULL
);


CREATE TABLE Exam
(
	StApliecNumurs TEXT  NOT NULL,
  	Atzime Integer NOT NULL,
  	Datums TEXT NOT NULL,
  	Prieksmets TEXT NOT NULL,
  	FOREIGN KEY(StApliecNumurs) REFERENCES Student(StApliecNumurs),
  	FOREIGN KEY (Prieksmets) REFERENCES Lecturer(Prieksmets)
);


INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('234HJK','IT','Antans','Kaspars');

INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('14JDJK','MEH','Ozols','Janis');

INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('56OPK','MEH','Stirna','Andrejs');

INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('89OLK','DF','Ulmanis','Karlis');

INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('867MK','LP','Liepa','Brigita');

INSERt INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','SMIP','Smirnova','Raisa');

INSERt INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','DSD','Smirnova','Raisa');

INSERT INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','PV','Scukins','Igors');

INSERT INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','OS','Scukins','Igors');

INSERT INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','AP','Ivanovs','Jurijs');



INSERT INTO Exam(stapliecnumurs,atzime,datums,prieksmets)
VALUES('234HJK',7,'05/10/2021','DSD');


INSERT INTO Exam(stapliecnumurs,atzime,datums,prieksmets)
VALUES('89OLK',9,'06/10/2021','DSD');

INSERT INTO Exam(stapliecnumurs,atzime,datums,prieksmets)
VALUES('56OPK',10,'06/10/2021','SIMP');

INSERT INTO Exam(stapliecnumurs,atzime,datums,prieksmets)
VALUES('867MK',5,'06/11/2021','DSD');

insert into Exam(stapliecnumurs,atzime,datums,prieksmets)
values ('14JDJK',8,'05/12/2021','SIMP');
        
END TRANSACTION;`);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const openMenu = Boolean(anchorEl);

  const handleOpenMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setShowSnackBar(false);
  };

  return (
    <Box textAlign="center">
      <Snackbar
        open={showSnackBar}
        autoHideDuration={1500}
        onClose={() => setShowSnackBar(false)}
        message="Nokopēts"
        anchorOrigin={{ vertical: "top", horizontal: "right" }}

        // action={action}
      />
      <Button
        variant="contained"
        style={{ marginTop: "1rem" }}
        onClick={handleOpen}
      >
        SQL Komandas Lai Izveidotu Datu Bāzi
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
              <h2 id="unstyled-modal-title">SQL</h2>
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
              <CopyToClipboard
                text={copyValue}
                onCopy={() => setShowSnackBar(true)}
              >
                <IconButton color="inherit" edge="end" size="large">
                  <FileCopyIcon />
                </IconButton>
              </CopyToClipboard>
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
          <Grid container xs={3}></Grid>
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
                <pre style={{ color: "blue" }}>{`   
BEGIN TRANSACTION;
CREATE TABLE Student 
(
	StApliecNumurs TEXT PRIMARY KEY NOT NULL,
  	Specialitate TEXT NOT NULL,
  Uzvards TEXT NOT NULL,
  Vards TEXT NOT NULL
);

CREATE TABLE Lecturer
(
	Amats TEXT NOT NULL,
  	Prieksmets TEXT  NOT NULL,
  	Uzvards TEXT NOT NULL,
  	Vards TEXT NOT NULL
);


CREATE TABLE Exam
(
	StApliecNumurs TEXT  NOT NULL,
  	Atzime Integer NOT NULL,
  	Datums TEXT NOT NULL,
  	Prieksmets TEXT NOT NULL,
  	FOREIGN KEY(StApliecNumurs) REFERENCES Student(StApliecNumurs),
  	FOREIGN KEY (Prieksmets) REFERENCES Lecturer(Prieksmets)
);


INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('234HJK','IT','Antans','Kaspars');

INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('14JDJK','MEH','Ozols','Janis');

INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('56OPK','MEH','Stirna','Andrejs');

INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('89OLK','DF','Ulmanis','Karlis');

INSERT INTO Student (stapliecnumurs,specialitate,uzvards,vards)
VALUES ('867MK','LP','Liepa','Brigita');

INSERt INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','SMIP','Smirnova','Raisa');

INSERt INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','DSD','Smirnova','Raisa');

INSERT INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','PV','Scukins','Igors');

INSERT INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','OS','Scukins','Igors');

INSERT INTO Lecturer(amats,prieksmets,uzvards,vards)
VALUES ('Docents','AP','Ivanovs','Jurijs');



INSERT INTO Exam(stapliecnumurs,atzime,datums,prieksmets)
VALUES('234HJK',7,'05/10/2021','DSD');


INSERT INTO Exam(stapliecnumurs,atzime,datums,prieksmets)
VALUES('89OLK',9,'06/10/2021','DSD');

INSERT INTO Exam(stapliecnumurs,atzime,datums,prieksmets)
VALUES('56OPK',10,'06/10/2021','SIMP');

INSERT INTO Exam(stapliecnumurs,atzime,datums,prieksmets)
VALUES('867MK',5,'06/11/2021','DSD');

insert into Exam(stapliecnumurs,atzime,datums,prieksmets)
values ('14JDJK',8,'05/12/2021','SIMP');
        
END TRANSACTION;
               `}</pre>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </StyledModal>
    </Box>
  );
};

export default InsertStatements;
