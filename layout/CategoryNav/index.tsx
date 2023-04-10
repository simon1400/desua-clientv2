import { Box, Tab, Tabs } from "@mui/material"
import { CategoryNavS } from "./styled"
import { useState } from "react";

import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';

const CategoryNav = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <CategoryNavS>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        // variant="scrollable"
        // scrollButtons={false}
        centered={true}
        aria-label="scrollable prevent tabs example"
      >
        <Tab icon={<PhoneIcon />} label="Recents" />
        <Tab icon={<FavoriteIcon />} label="Favorites" />
        <Tab icon={<PersonPinIcon />} label="Nearby" />
      </Tabs>
      </Box>
    </CategoryNavS>
  )
}

export default CategoryNav