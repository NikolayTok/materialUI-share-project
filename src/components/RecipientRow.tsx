import { Box, Avatar, Typography, Select, MenuItem } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import sxStyles from "../theme/sxStyles";
import COLORS from "../theme/colors";
import { Recipient } from "../types/Recipient";
import { Role } from "../types/roles";

interface RecipientRowProps {
  recipient: Recipient;
  roles: string[];
}

const RecipientRow = ({ recipient, roles }: RecipientRowProps) => {
  return (
    <Box display="flex" alignItems="center" gap={2} mb={2}>
      <Avatar sx={{ bgcolor: recipient.avatar ? "orange" : "gray" }} />
      <Box flexGrow={1} minWidth={250}>
        <Typography fontWeight="bold">{recipient.name}</Typography>
        <Typography variant="body2" color="text.secondary" component="a" href={`mailto:${recipient.email}`} sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
          {recipient.email}
        </Typography>
      </Box>
      <Select
        defaultValue={recipient.role}
        variant="outlined"
        size="small"
        disabled={recipient.role === "Admin"}
        IconComponent={(props) => <ExpandMore sx={{ color: recipient.role === Role.Admin ? `${COLORS.textLight} !important` : `${COLORS.primary} !important` }} {...props} />}
        sx={sxStyles.select}
      >
        {roles.map((role) => (
          <MenuItem key={role} value={role}>
            {role}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default RecipientRow;
