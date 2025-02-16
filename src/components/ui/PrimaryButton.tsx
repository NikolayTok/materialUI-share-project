
import { Button, ButtonProps } from "@mui/material";

const PrimaryButton = ({ children, onClick, disabled }: ButtonProps) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      disabled={disabled}
      sx={{
        textTransform: "none",
        borderRadius: "8px",
        width: "75px",
        height: "48px",
        fontSize: "16px",
        backgroundColor: "#0F56B3",
        color: "#fff",
        boxShadow: "0px 2px 4px 0px #0F56B333, 0px 1px 2px 0px #0F56B333",
        "&:hover": {
          backgroundColor: "#0D4DAA",
        },
        "&:disabled": {
          backgroundColor: "#A0A0A0",
        },
      }}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
