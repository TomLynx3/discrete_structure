import { Grid, Typography } from "@mui/material";

interface FirstStep {}

type Props = {
  iteration: string;
};

const Iteration: React.FC<Props> = ({ iteration }) => {
  return (
    <Typography variant="h5" style={{ margin: "1rem", fontWeight: "bold" }}>
      {iteration}.Iteracija
    </Typography>
  );
};

export default Iteration;
