import { Grid, GridSize, Box } from "@material-ui/core"
import { ImageItem } from "../../types/ImageItem"
import { ItemsEachPage } from "../../types/ItemsEachPage"
import GridItem from "../GridItem/GridItem"

interface GridViewProps {
    itemsEachPage: ItemsEachPage,
    imageItems: ImageItem[]
}

const GridView = (props: GridViewProps) => {
    const { imageItems, itemsEachPage } = props

    return (
        <Box padding={5}>
            <Grid container={true} spacing={2}>
                {imageItems.map(imageItem => (
                    <Grid item={true} xs={4}>
                        <GridItem imageItem={imageItem} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default GridView
