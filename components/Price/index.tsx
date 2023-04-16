import { FC } from "react"
import { PriceS } from "./styled"
import { getPrice } from "helpers/getPrice"

interface IPrice {
  big?: boolean
  data: {
    endPrice?: number
    salePrice?: number
    margin?: number
    price: number
  }
}

const Price: FC<IPrice> = ({data, big = false}) => {
  return (
    <PriceS big={big}>
      <span>€ {data.salePrice ? data.salePrice.toFixed(2) : getPrice(data)}</span>
      {data.salePrice && <del>€ {getPrice(data)}</del>}
    </PriceS>
  )
}

export default Price