import { Typography } from "@mui/material";

interface SectionTitleProps {
  children: React.ReactNode;
  mt?: number;
  mb?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, mb = 2 }) => {
  return (
    <Typography variant="subtitle1" fontWeight="bold" fontSize={14} mb={mb}>
      {children}
    </Typography>
  );
};

export default SectionTitle;
