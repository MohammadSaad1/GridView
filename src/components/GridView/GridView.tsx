import { Grid, Box, Typography } from "@material-ui/core"
import { ImageItem } from "../../types/ImageItem"
import { ItemsEachPage } from "../../types/ItemsEachPage"
import { isArrayEmpty } from "../../utility/isArrayEmpty"
import GridItem from "../GridItem/GridItem"

interface GridViewProps {
    itemsEachPage: ItemsEachPage,
    imageItems: ImageItem[]
}

const GridView = (props: GridViewProps) => {
    const { imageItems, itemsEachPage } = props

    return (
        <Box padding={5}>
            <Grid container={true} spacing={2} justifyContent='center'>
                {isArrayEmpty(imageItems) ? <Typography> No search results </Typography> : (
                    imageItems.map(imageItem => (
                        <Grid item={true} xs={12} sm={6} md={4}>
                            <GridItem imageItem={imageItem} />
                        </Grid>
                    )))}
            </Grid>
        </Box>
    )
}

export default GridView
