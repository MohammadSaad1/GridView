import { Box, Typography } from "@material-ui/core"
import { ImageItem } from "../../infrastructure/types/ImageItem"
import './GridItem.scss'

interface GridItemProps {
    imageItem: ImageItem
}

const GridItem = (props: GridItemProps) => {
    const { imageItem } = props

    return (
        <Box className='grid-item' padding={2} width={250}>
            <img width={200} height={200} src={imageItem.imagePath} />
            <Typography>{imageItem.title}</Typography>
            <Box color='gray'>
                <Typography variant='body2'>{imageItem.description}</Typography>
            </Box>
        </Box>
    )
}

export default GridItem

