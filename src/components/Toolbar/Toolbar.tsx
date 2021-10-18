import { Box, Grid, TextField } from "@material-ui/core"
import { Dispatch } from "react"
import { ItemsEachPage } from "../../types/ItemsEachPage"

interface ToolbarProps {
    setSearch: Dispatch<React.SetStateAction<string>>
}

const Toolbar = (props: ToolbarProps) => {
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearch(event.currentTarget.value)
    }
    return (
        <Box style={{ backgroundColor: 'black', borderRadius: '15px' }} color='white' padding={2} width='100%'>
            <Grid container={true} direction='row' justifyContent='space-between'>
                <Grid item={true}>
                    Mohammads Gridview
                </Grid>
                <Grid item={true}>
                    <TextField onChange={handleSearch} />
                </Grid>
                <Grid item={true}>
                    <TextField />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Toolbar