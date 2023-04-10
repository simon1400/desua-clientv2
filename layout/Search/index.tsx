import { FormControl } from "@mui/material"
import { SearchS } from "./styled"
import Input from "components/Input"
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  return (
    <SearchS>
      <FormControl fullWidth sx={{ m: 1 }}>
        <Input startAdornment={<SearchIcon />} />
      </FormControl>
    </SearchS>
  )
}

export default Search