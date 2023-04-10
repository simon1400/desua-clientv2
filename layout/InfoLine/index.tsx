import Chip from "components/Chip"
import { InfoLineS, InfoLineWrapS, LeftS, RightS } from "./styled"
import { Container, Typography } from "@mui/material"
import Lang from "components/Lang"

const InfoLine = () => {
  return (
    <InfoLineWrapS>
      <Container>
        <InfoLineS>
          <LeftS>
            <Chip label="HOT"/>
            <Typography>Free Express Shipping</Typography>
          </LeftS>
          <RightS>
            <Lang />
          </RightS>
        </InfoLineS>
      </Container>
    </InfoLineWrapS>
  )
}

export default InfoLine