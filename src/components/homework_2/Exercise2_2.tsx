import {
  Paper,
  Typography,
  Grid,
  Box,
  Button,
  Modal,
  IconButton,
} from "@mui/material";
import { useEffect, useState } from "react";
import DecartMatrix from "./DecartMatrix";
import { ModalUnstyled } from "@mui/core";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/system";
import ReflexiveModal from "./ReflexiveModal";
import SymetricModal from "./SymetricModal";
import TransitiveModal from "./TransitiveModal";
export enum AlgorithmType {
  REFLEXIVE,
  SYMMETRIC,
  TRANSITIVE,
}

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

const Exercise2_2 = () => {
  const [matrix, setMatrix] = useState<number[][]>([]);

  const [isRelationSet, setIsRelationSet] = useState(false);

  const [tuples, setTuples] = useState<string[]>([]);

  const [answer, setAnswer] = useState("");

  const [showReflexive, setShowReflexive] = useState(false);

  const [showSymetric, setShowSymetric] = useState(false);

  const [showTransitive, setShowTransitive] = useState(false);

  const handleModalOpen = (type: AlgorithmType) => {
    switch (type) {
      case AlgorithmType.REFLEXIVE:
        setShowReflexive(true);
        break;
      case AlgorithmType.SYMMETRIC:
        setShowSymetric(true);
        break;
      case AlgorithmType.TRANSITIVE:
        setShowTransitive(true);
        break;
    }
  };

  const handleModalClose = (type: AlgorithmType) => {
    switch (type) {
      case AlgorithmType.REFLEXIVE:
        setShowReflexive(false);
        break;
      case AlgorithmType.SYMMETRIC:
        setShowSymetric(false);
        break;
      case AlgorithmType.TRANSITIVE:
        setShowTransitive(false);
        break;
    }
  };

  useEffect(() => {
    checkIfRelationSet();
  }, [matrix]);

  const checkIfReflexive = () => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i === j && matrix[i][j] !== 1) {
          return false;
        }
      }
    }

    return true;
  };

  const checkIfSymetric = () => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i !== j) {
          if (matrix[i][j] === 1 && matrix[j][i] !== 1) {
            return false;
          }
        }
      }
    }
    return true;
  };

  const checkIfTransitive = () => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (i !== j && matrix[i][j] === 1) {
          for (let k = 0; k <= i; k++) {
            if (j !== k && matrix[j][k] === 1 && matrix[i][k] !== 1) {
              return false;
            }
          }
        }
      }
    }
    return true;
  };

  const checkIfRelationSet = () => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          setIsRelationSet(true);
          return;
        }
      }
    }
    setIsRelationSet(false);
  };

  const buildTuples = () => {
    const letters = ["a", "b", "c", "d", "e", "f", "g"];
    const newTuples = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 1) {
          const newRelation = `<${letters[j]}, ${letters[i]}>`;
          newTuples.push(newRelation);
        }
      }
    }
    setTuples(newTuples);
    console.log(tuples);
  };

  const findAnswer = () => {
    const isReflexive = checkIfReflexive();
    const isSymetric = checkIfSymetric();
    const isTransitive = checkIfTransitive();
    buildTuples();

    if (isReflexive && isSymetric && isTransitive) {
      setAnswer("Ir refleksīva, ir simetriska un transitīva => ir ekvivalence");
    } else {
      let output = "Ir";

      if (isReflexive) {
        output += " refleksīva";
      } else if (isSymetric) {
        output += " simetriska";
      } else if (isTransitive) {
        output += " transitīva";
      }

      setAnswer(output);
    }
  };

  return (
    <Paper
      elevation={3}
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#d9e9e4",
        marginTop: "2rem",
      }}
    >
      <Grid container xs={12} spacing={0} justifyContent="center">
        <Grid item xs={5} style={{ padding: "1rem" }}>
          <DecartMatrix setMatrixCallback={setMatrix}></DecartMatrix>
        </Grid>
        <Grid item xs={7} style={{ padding: "1rem" }}>
          <Paper
            elevation={5}
            style={{
              backgroundColor: "#98AFBA",
              height: "50%",
              width: "100%",
            }}
          >
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                variant="contained"
                onClick={findAnswer}
                disabled={!isRelationSet}
                style={{ marginTop: "1rem" }}
              >
                Meklēt ekvivalences īpašības
              </Button>
            </Grid>
            <Grid item xs={12}>
              {answer.length > 0 ? (
                <Typography textAlign="center" variant="h6">
                  {answer}
                </Typography>
              ) : null}
            </Grid>
            <Grid item xs={12}>
              {tuples.length > 0 && answer.length > 0 ? (
                <Typography textAlign="center" variant="h6">
                  R =
                  {tuples.map((item, index) => (
                    <span>
                      {item} {index !== tuples.length - 1 ? "," : ""}{" "}
                    </span>
                  ))}
                </Typography>
              ) : null}
            </Grid>
            <Grid
              xs={12}
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="contained"
                onClick={() => handleModalOpen(AlgorithmType.REFLEXIVE)}
                // disabled={!isRelationSet}
                style={{ marginTop: "1rem" }}
              >
                Refleksivitātes algoritms
              </Button>
              <Button
                variant="contained"
                onClick={() => handleModalOpen(AlgorithmType.SYMMETRIC)}
                // disabled={!isRelationSet}
                style={{ marginTop: "1rem" }}
              >
                Simetriskuma algoritms
              </Button>
              <Button
                variant="contained"
                onClick={() => handleModalOpen(AlgorithmType.TRANSITIVE)}
                // disabled={!isRelationSet}
                style={{ marginTop: "1rem" }}
              >
                Transitivitātes algoritms
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <ReflexiveModal
        show={showReflexive}
        closeHandler={handleModalClose}
      ></ReflexiveModal>
      <SymetricModal show={showSymetric} closeHandler={handleModalClose} />
      <TransitiveModal show={showTransitive} closeHandler={handleModalClose} />
    </Paper>
  );
};

export default Exercise2_2;
