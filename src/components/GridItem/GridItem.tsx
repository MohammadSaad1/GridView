import { Box, Grid, Paper, Typography } from "@material-ui/core"
import { ImageItem } from "../../types/ImageItem"

interface GridItemProps {
    imageItem: ImageItem
}

const GridItem = (props: GridItemProps) => {
    const { imageItem } = props

    return (
        <Grid style={{ backgroundColor: 'black', borderRadius: '20px' }}>
            <Box padding={2} width={250}>
                <img width={200} height={200} src={imageItem.imagePath} />
                <Typography>{imageItem.title}</Typography>
                <Box color='gray'>
                    <Typography variant='body2'>{imageItem.description}</Typography>
                </Box>
            </Box>
        </Grid>
    )
}

export default GridItem

