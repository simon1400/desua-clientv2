import Button from "components/Button"
import { ButtonCountS } from "./styled"
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const BuyButtonCard = () => {
  return (
    <>
      <ButtonCountS>
        <Button size="small" variant="outlined"><RemoveIcon /></Button>
        <span>52</span>
        <Button size="small" variant="outlined"><AddIcon /></Button>
      </ButtonCountS>
      {/* <Button>Comprare</Button> */}
    </>
  )
}

export default BuyButtonCard