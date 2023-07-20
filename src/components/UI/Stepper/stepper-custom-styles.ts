import icon from "../../../assets/done_icon.svg";

export const customStyles = {
  padding: 0,
  width: "100%",
  "& .MuiStepIcon-root": {
    height: "2rem",
    width: "2rem",
    "& .MuiStepIcon-text": {
      fill: "none",
    },
  },
  "& .icon": {
    height: "2rem",
    width: "2rem",
    background: "#A6A6A6",
    borderRadius: "50%",
  },
  "& .Mui-active": {
    "& .MuiStepConnector-line": {
      borderColor: "#5558FA",
    },
    "& .icon": {
      background:
        "radial-gradient(circle at center, white 0, white 2px, #5558FA 3px, #5558FA 100%)",
    },
    "&.MuiStepLabel-label": {
      color: "#5558FA",
    },
  },
  "& .Mui-completed": {
    "& .MuiStepConnector-line": {
      borderColor: "#5558FA",
    },
    "& .icon": {
      background: `#5558FA url('${icon}') no-repeat center`,
    },
    "&.MuiStepLabel-label": {
      color: "#5558FA",
    },
  },
  "& .MuiStepConnector-root": {
    top: "8px",
    left: "calc(-50% + 10px)",
    right: "calc(50% + 10px)",
    "& .MuiStepConnector-line": {
      borderTopWidth: ".5rem",
    },
  },
  "& .MuiStepLabel-label": {
    marginTop: ".9rem",
    fontFamily: "SB Sans Interface",
    fontSize: "1.4rem",
    fontWeight: 500,
  },
};
