import { Box, Grid, TextField } from "@material-ui/core"
import { Dispatch } from "react"
import { ItemsEachPage } from "../../types/ItemsEachPage"
import DropDown from "../DropDown/DropDown"

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
        <Box style={{ backgroundColor: 'black', borderRadius: '15px' }} color='white' padding='20px 0px' width='100%'>
            <Grid container={true} direction='row' justifyContent='space-around'>
                <Grid item={true}>
                    Mohammads Gridview
                </Grid>
                <Grid item={true}>
                    <TextField onChange={handleSearch} />
                </Grid>
                <Grid item={true}>
                    <DropDown itemsEachPage={props.itemsEachPage} setItemEachPage={props.setItemsEachPage} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Toolbar