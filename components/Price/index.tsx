import { FC } from "react"
import { PriceS } from "./styled"
import { getPrice } from "helpers/getPrice"

interface IPrice {
  big?: boolean
  unit?: string;
  data: {
    endPrice?: number
    salePrice?: number
    margin?: number
    price: number
    amount: number
    countInPack: number
  }
}

const Price: FC<IPrice> = ({data, big = false}) => {
  return (
    <PriceS big={big}>
      <div>
        <span>€ {data.salePrice ? data.salePrice.toFixed(2) : getPrice(data)}</span>
        {data.salePrice && <del>€ {getPrice(data)}</del>}
      </div>
      <div>
        <small>x {data.countInPack} pz | {data.amount} l</small>
      </div>
    </PriceS>
  )
}

export default Price