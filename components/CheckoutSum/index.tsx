import { CheckoutSumS } from "./styled"
import Button from "components/Button"
import { FC } from "react";

interface ICheckoutSum {
  handle: () => void
  sum: number
}

const CheckoutSum: FC<ICheckoutSum> = ({sum, handle}) => {
  
  return (
    <CheckoutSumS>
      <div><span>Subtotal:</span><b>€ {(sum - (sum * 0.21)).toFixed(2)}</b></div>
      <div><span>Tax:</span><b>€ {(sum * 0.21).toFixed(2)}</b></div>
      <hr />
      <p className="sum-total">€ {sum}</p>
      {/* <Input placeholder="Voucher" />
      <Button size="large" variant="outlined">Apply voucher</Button> */}
      <Button size="large" onClick={() => handle()}>Order now</Button>
    </CheckoutSumS>
  )
}

export default CheckoutSum