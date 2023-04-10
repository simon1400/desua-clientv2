import { Container, Grid } from '@mui/material'
import Card from 'components/Card'
import Page from 'layout/Page'


const Homepage = () => {
  return (
    <Page>
      <Container>
        <Grid container spacing={4.8}>
          <Grid item xs={3}>
            <Card />
          </Grid>
          <Grid item xs={3}><Card /></Grid>
          <Grid item xs={3}><Card /></Grid>
          <Grid item xs={3}><Card /></Grid>
        </Grid>
      </Container>
    </Page>
  )
}

export default Homepage
