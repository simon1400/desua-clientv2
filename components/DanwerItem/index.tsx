import ButtonCount from "components/ButtonCount"
import { DanwerItemS } from "./styled"
import Image from "next/image"
import { IconButton, Typography } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { FC, useEffect, useState } from "react"
import { getPrice } from "helpers/getPrice";
import { useDispatch, useSelector } from "react-redux";
import { changeBasket, selectBasket } from "stores/slices/basket";
import { changeCountProduct } from "helpers/changeCountProduct";

interface IDanwerItem {
  data: any
}

const APP_API = process.env.APP_API

const DanwerItem: FC<IDanwerItem> = ({data}) => {

  const [count, setCount] = useState<number>(data.count)
  const dispatch = useDispatch()
  const basket: BasketItem[] = useSelector(selectBasket)
  const [localePrice, setLocalePrice] = useState<number>(data.variants[0].salePrice ? data.variants[0].salePrice.toFixed(2) : getPrice(data.variants[0]))

  const handleChange = (type: string) => {
    const {newBasket} = changeCountProduct(data, type, count, basket)
    dispatch(changeBasket(newBasket))
  }

  useEffect(() => {
    const currentBasketItem = basket.find(item => item.id === data.id && item.idVariant === data.idVariant) || data
    setCount(currentBasketItem.count)
  }, [basket])

  return (
    <DanwerItemS>
      <div className="count-wrap">
        <ButtonCount handleChange={handleChange} count={count} vertical />
      </div>
      <div>
        <Image src={`${APP_API}${data.variants[0].images.data[0].attributes.url}`} width="76" height="76" alt="" />
      </div>
      <div className="danwer-item-body">
        <Typography variant="h4">{data.title}</Typography>
        <small>€ {localePrice} x {data.variants[0].countInPack} x {data.count}</small>
        <span>€ {(localePrice * data.variants[0].countInPack * data.count).toFixed(2)}</span>
      </div>
      <div>
        <IconButton aria-label="close" size="small">
          <CloseIcon fontSize="small" />
        </IconButton>
      </div>
    </DanwerItemS>
  )
}

export default DanwerItem