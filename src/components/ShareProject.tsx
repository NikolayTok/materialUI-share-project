import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  FormLabel,
  FormControl,
  Stack,
  Link,
  MenuItem,
  Select,
} from "@mui/material";
import { AccountCircleOutlined, CodeOff, ContentCopyRounded, ExpandMore, LinkOutlined } from "@mui/icons-material";
import { recipients } from "../mocks/recipients";
import { Role } from "../types/roles";
import PrimaryButton from "./ui/PrimaryButton";
import COLORS from "../theme/colors";
import RecipientRow from "./RecipientRow";
import sxStyles from "../theme/sxStyles";
import SectionTitle from "./ui/SectionTitle";

const ShareProject = () => {
  const roles = Object.values(Role);

  return (
    <Card variant="outlined" sx={sxStyles.card}>
      <CardContent sx={sxStyles.cardContent}>
        <Typography variant="h2" fontWeight="600" sx={{ mb: 5, fontSize: "22px" }}>
          Share Project
        </Typography>
        {/* Document Link */}
        <FormControl fullWidth sx={{ mb: 2 }}>
          <FormLabel sx={sxStyles.label}>Document Link</FormLabel>
          <TextField
            fullWidth
            variant="outlined"
            sx={sxStyles.textField}
            defaultValue="https://www.setproduct.com/resources/agency/thisisthelin"
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <ContentCopyRounded />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
        {/* Search Input */}
        <FormControl fullWidth>
          <FormLabel sx={sxStyles.label}>Search recipients</FormLabel>
          <Stack direction="row" spacing={2}>
            <TextField
              fullWidth
              placeholder="Search for names or email..."
              variant="outlined"
              sx={sxStyles.textField}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Select
                      defaultValue="Can View"
                      IconComponent={ExpandMore}
                      sx={{
                        height: "40px",
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        "& fieldset": { border: "none" },
                      }}
                    >
                      <MenuItem value="Can View">Can View</MenuItem>
                      <MenuItem value="Can Edit">Can Edit</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                    </Select>
                  </InputAdornment>
                ),
              }}
            />
            <PrimaryButton>
              Share
            </PrimaryButton>
          </Stack>
        </FormControl>
        {/* Recipients List */}
        <Box mt={5} mb={3}>
          <SectionTitle>Recipients</SectionTitle>
          <Box overflow={"auto"} maxHeight={280}>
            {recipients.map((recipient) => (
              <RecipientRow key={recipient.id} recipient={recipient} roles={roles} />
            ))}
          </Box>
        </Box>
        {/* Privacy Settings */}
        <Box mb={8}>
          <SectionTitle>Privacy Settings</SectionTitle>
          <Box sx={sxStyles.privacyItem}>
            <Box sx={sxStyles.privacyTextContainer}>
              <AccountCircleOutlined sx={sxStyles.icon} />
              <Typography sx={sxStyles.privacyText}>
                Anyone at{" "}
                <Link href="#" sx={sxStyles.privacyLink}>
                  Project
                </Link>{" "}
                can view and edit
              </Typography>
            </Box>
            <Button endIcon={<ExpandMore sx={{ color: COLORS.primary }} />} sx={sxStyles.button}>
              Change Access
            </Button>
          </Box>
          <Box sx={sxStyles.privacyItem}>
            <Box sx={sxStyles.privacyTextContainer}>
              <LinkOutlined sx={{ ...sxStyles.icon, transform: "rotate(140deg)" }} />
              <Typography sx={sxStyles.privacyText}>Anyone with the link can edit</Typography>
            </Box>
            <Link href="#" sx={sxStyles.privacyLink}>Set Password</Link>
          </Box>
        </Box>
        {/* Action Buttons */}
        <Box sx={sxStyles.actionButtons}>
          <PrimaryButton>Done</PrimaryButton>
          <Box>
            <Button startIcon={<CodeOff sx={{ ...sxStyles.iconSmall, color: COLORS.primary }} />} sx={sxStyles.button}>
              Get embed Code
            </Button>
            <Button startIcon={<LinkOutlined sx={{ ...sxStyles.iconSmall, color: COLORS.primary, transform: "rotate(140deg)" }} />} sx={sxStyles.button}>
              Copy Link
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};


export default ShareProject;
