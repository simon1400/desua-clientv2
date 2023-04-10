import { IconButton } from "@mui/material"
import { ControlsButtonsS } from "./styled"
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const ControlButtons = () => {
  return (
    <ControlsButtonsS>
      <IconButton aria-label="delete" size="large">
        <PersonOutlineIcon />
      </IconButton>
      <IconButton aria-label="delete" size="large">
        <LocalMallIcon />
      </IconButton>
    </ControlsButtonsS>
  )
}

export default ControlButtons