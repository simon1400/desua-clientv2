import { useLazyQuery } from "@apollo/client";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Typography,
} from "@mui/material";
import axios from "axios";
import CheckoutInfo from "components/CheckoutInfo";
import CheckoutSum from "components/CheckoutSum";
import { getBasket } from "helpers/getBasket";
import { getSum } from "helpers/getSum";
import Page from "layout/Page";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { getBasketProducts } from "queries/products";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBasket, selectBasket } from "stores/slices/basket";
import { Paper } from "styles/Paper";

const Checkout: NextPage = () => {
  const [getBasketItems] = useLazyQuery(getBasketProducts);
  const basket = useSelector(selectBasket);
  const router = useRouter();

  const dispatch = useDispatch();

  const [basketItems, setBasketItems] = useState([]);

  const [sum, setSum] = useState<number>(0);

  useEffect(() => {
    getBasket(basket, basketItems, getBasketItems, router.locale).then(
      (result) => {
        // @ts-ignore
        setBasketItems(result);
        setSum(+getSum(result));
      }
    );
  }, [basket]);

  const [shiping, setShiping] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    zip: "",
    city: "",
    address: "",
    state: "Italy",
  });

  const handleShiping = (name: string, value: string) => {
    setShiping({
      ...shiping,
      [name]: value,
    });
  };

  const [billing, setBilling] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    zip: "",
    city: "",
    address: "",
    state: "Italy",
  });

  const handleBilling = (name: string, value: string) => {
    setBilling({
      ...billing,
      [name]: value,
    });
  };

  const [sameAddress, setSameAddress] = useState(false);

  const handleOrder = async () => {
    const order = await axios.post(`/api/order`, {
      shiping,
      billing,
      sum,
      sameAddress,
      basket: basketItems,
    });

    axios.post(`/api/mail`, { ...order.data }).then((res) => {
      dispatch(changeBasket([]));
      router.push("/thank-you");
    });
  };

  return (
    <Page>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Paper elevation={1}>
              <Typography variant="h3" marginBottom={3}>
                Indirizzo di spedizione
              </Typography>
              <CheckoutInfo
                state={shiping}
                handle={handleShiping}
                prefix="shiping"
              />
            </Paper>
            <Paper elevation={1}>
              <Typography variant="h3" marginBottom={3}>
                Indirizzo di Biling
              </Typography>
              <Box marginBottom={3}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={() => setSameAddress(!sameAddress)}
                      checked={sameAddress}
                    />
                  }
                  label="Same as shipping address"
                />
              </Box>
              {!sameAddress && (
                <CheckoutInfo
                  state={billing}
                  handle={handleBilling}
                  prefix="billing"
                />
              )}
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <CheckoutSum sum={sum} handle={handleOrder} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Checkout;
