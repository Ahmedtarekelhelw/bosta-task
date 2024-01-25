"use client";

import { FaPersonCircleCheck, FaTruck, FaCheck } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { LuClipboardEdit } from "react-icons/lu";

import { styled } from "@mui/material/styles";
import { Step, StepLabel, Stepper as StepperMui } from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";

const Stepper = ({ completed, color, StepsText }) => {
  const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      left: "calc(-50% + 15px)",
      right: "calc(50% + 15px)",
      top: 20,
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: color,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        backgroundColor: color,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: 4,
      border: 0,
      backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
      borderRadius: 1,
    },
  }));

  const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 45,
    height: 45,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    ...(ownerState.active && {
      backgroundColor: color,
    }),
    ...(ownerState.completed && {
      backgroundColor: color,
      width: 30,
      height: 30,
      top: 7,
    }),
  }));

  function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
      1: completed ? <FaCheck /> : <LuClipboardEdit />,
      2: completed ? <FaCheck /> : <FiPackage />,
      3: completed ? <FaCheck /> : <FaTruck />,
      4: completed ? <FaCheck /> : <FaPersonCircleCheck />,
    };

    return (
      <ColorlibStepIconRoot
        ownerState={{ completed, active }}
        className={className}
      >
        {icons[String(props.icon)]}
      </ColorlibStepIconRoot>
    );
  }
  return (
    <div className={`shipment-progress md:flex p-5  hidden `}>
      <StepperMui
        activeStep={completed ? 4 : color ? 2 : -1}
        alternativeLabel
        connector={<ColorlibConnector />}
        sx={{ width: "100%" }}
      >
        {StepsText.map((text, i) => (
          <Step key={i}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{text}</StepLabel>
          </Step>
        ))}
      </StepperMui>
    </div>
  );
};

export default Stepper;
