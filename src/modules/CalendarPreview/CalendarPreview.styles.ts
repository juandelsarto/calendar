export const getStyles = ({ primaryColor, secondaryColor}:{primaryColor: string, secondaryColor: string}) => ({
  monthName: {
    color: secondaryColor,
  },
  monthNotes: {
    label: {
      color: secondaryColor,
    },
    line: {
      borderColor: primaryColor,
    },
  },
  monthWeek: {
    day: {
      color: secondaryColor,
    },
  },
  monthGrid: {
    borderColor: primaryColor,
  },
  day: {
    color: secondaryColor,
    borderColor: primaryColor,
  },
});
