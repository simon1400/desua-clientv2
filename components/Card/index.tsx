import { CardS, ChipCardWrap, ContentCard, ControlCard } from "./styled";
import { Typography } from "@mui/material";
import Chip from "components/Chip";
import ControlButtonsCard from "./ControlButtonsCard";
import Price from "components/Price";
import BuyButtonCard from "./BuyButtonCard";
import Slider from "./Slider";

const Card = () => {
  return (
    <CardS>
      <ChipCardWrap>
        <Chip label="скидка"/>
      </ChipCardWrap>
      <ControlButtonsCard />
      <Slider />
      <ContentCard>
        <Typography variant="h3">NikeCourt Zoom Vapor Cage</Typography>
        <ControlCard>
          <Price />
          <BuyButtonCard />
        </ControlCard>
      </ContentCard>
    </CardS>
  );
};

export default Card;
