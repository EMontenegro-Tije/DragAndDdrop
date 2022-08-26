import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export const Operator = ({
  onchangeLeftInput,
  onchangeRightInput,
  children
}) => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          backgroundColor: "yellowGreen",
          width: "250px",
          alignItems: "center",
          padding: "10px 10px 10px 10px",
          borderRadius: "10px"
        }}
      >
        <Box
          style={{
            width: "40%",
            backgroundColor: "white",
            borderRadius: "10px"
          }}
        >
          <TextField onChange={onchangeLeftInput} />
        </Box>
        <Box
          style={{
            width: "20%"
          }}
        >
          {children}
        </Box>
        <Box
          style={{
            width: "40%",
            backgroundColor: "white",
            borderRadius: "10px"
          }}
        >
          <TextField onChange={onchangeRightInput} />
        </Box>
      </Box>
    </>
  );
};
