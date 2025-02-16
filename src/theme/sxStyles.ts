import COLORS from './colors'

const sxStyles = {
  card: {
    maxWidth: 560,
    mx: 'auto',
    mt: 1,
    p: 5,
    color: COLORS.textPrimary,
    boxShadow: '0px 8px 16px 2px #6161611A, 0px 16px 32px 2px #6161611A',
    borderRadius: '8px',
  },
  cardContent: {
    p: 0,
    pb: "0 !important"
  },
  label: {
    mb: 1,
    fontSize: 12,
  },
  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
      height: 48,
      fontSize: 14,
    },
  },
  select: {
    color: COLORS.primary,
    fontWeight: 700,
    fontSize: 14,
    borderRadius: '8px',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.border,
    },
    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.borderDisabled,
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.borderHover,
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: COLORS.primary,
    },
  },
  icon: {
    color: COLORS.textLight,
    width: 24,
    height: 24,
  },
  iconSmall: { width: 16, height: 16 },
  button: {
    textTransform: 'none',
    color: COLORS.textSecondary,
    fontWeight: 700,
  },
  privacyText: { fontSize: '14px', color: COLORS.textPrimary, fontWeight: 700 },
  privacyLink: {
    color: COLORS.primary,
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: 14,
  },
  privacyItem: {
    display: "flex",
    alignItems: { xs: "start", sm: "center" },
    justifyContent: "space-between",
    mb: 2,
    gap: 2,
    flexDirection: { xs: "column", sm: "row" },
  },
  privacyTextContainer: {
    display: "flex",
    alignItems: "center",
    gap: 1,
    textAlign: { xs: "center", sm: "left" },
  },
  actionButtons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: { xs: "stretch", sm: "center" },
    gap: 2,
    flexDirection: { xs: "column", sm: "row" },
  }
}

export default sxStyles
