import { Box, Grid, Paper, Typography } from "@material-ui/core"
import { ImageItem } from "../../types/ImageItem"

interface GridItemProps {
    imageItem: ImageItem
}

const GridItem = (props: GridItemProps) => {
    const { imageItem } = props

    return (
        <Box style={{ backgroundColor: 'black', borderRadius: '20px' }} padding={2} minWidth={250}>
            <img width={200} height={200} src={imageItem.imagePath} />
            <Typography>{imageItem.title}</Typography>
            <Box color='gray'>
                <Typography variant='body2'>{imageItem.description}</Typography>
            </Box>
        </Box>
    )
}

export default GridItem

