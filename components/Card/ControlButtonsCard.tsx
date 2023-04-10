import { IconButton } from "@mui/material"
import { ControlButtons } from "./styled"
import VisibilityIcon from "@mui/icons-material/Visibility";

const ControlButtonsCard = () => {
  return (
    <ControlButtons>
      <IconButton aria-label="show-more" size="small">
        <VisibilityIcon fontSize="small" />
      </IconButton>
    </ControlButtons>
  )
}

export default ControlButtonsCard