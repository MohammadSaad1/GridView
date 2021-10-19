import { Box, Grid, InputAdornment, TextField } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"
import { Dispatch } from "react"
import { ItemsEachPage } from "../../infrastructure/types/ItemsEachPage"
import DropDown from "../DropDown/DropDown"
import './Toolbar.scss'

interface ToolbarProps {
    itemsEachPage: ItemsEachPage
    setSearch: Dispatch<React.SetStateAction<string>>
    setItemsEachPage: Dispatch<React.SetStateAction<ItemsEachPage>>
}

const Toolbar = (props: ToolbarProps) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearch(event.currentTarget.value)
    }
    return (
        <Box className='toolbar'>
            <Grid container={true} direction='row' justifyContent='space-around'>
                <Grid item={true} xs={12} sm='auto'>
                    Mohammads Gridview
                </Grid>
                <Grid item={true} component='span'>
                    <TextField
                        onChange={handleSearch}
                        InputProps={{
                            startAdornment: (
                                <SearchOutlined />
                            )
                        }} />
                </Grid>
                <Grid item={true}>
                    <DropDown itemsEachPage={props.itemsEachPage} setItemEachPage={props.setItemsEachPage} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Toolbar