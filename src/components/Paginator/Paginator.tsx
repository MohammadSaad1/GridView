import { Box, Grid, IconButton, Typography } from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { Dispatch, SetStateAction } from "react"

interface PaginatiorProps {
    setPage: Dispatch<SetStateAction<number>>
    page: number
    totalPages: number
}

const Paginator = (props: PaginatiorProps) => {
    const { page, setPage, totalPages } = props

    const handleNext = () => props.setPage(page + 1)
    const handlePrevious = () => props.setPage(page - 1)

    return (
        <Box style={{ backgroundColor: 'gray', borderRadius: '15px' }} color='rgba(0, 0, 0, 0.54)' width={200} height={0}>
            <Grid container={true} direction='row' alignItems='center'>
                <Grid item={true} xs={4}>
                    <IconButton onClick={handlePrevious} disabled={page === 0}>
                        <KeyboardArrowLeft />
                    </IconButton>
                </Grid>
                <Grid item={true} xs={4}>
                    <Typography> {props.page + 1} </Typography>
                </Grid>
                <Grid item={true} xs={4}>
                    <IconButton onClick={handleNext} disabled={page === totalPages - 1}>
                        <KeyboardArrowRight />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Paginator