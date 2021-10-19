import { Box, Grid, IconButton, Typography } from "@material-ui/core"
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons"
import { Dispatch, SetStateAction } from "react"
import './Paginator.scss'

interface PaginatiorProps {
    setPage: Dispatch<SetStateAction<number>>
    page: number
    totalPages: number
}

const Paginator = (props: PaginatiorProps) => {
    const { page, setPage, totalPages } = props

    const handleNext = () => setPage(page + 1)
    const handlePrevious = () => setPage(page - 1)

    return (
        <Box className='paginator'>
            <Grid container={true} direction='row' alignItems='center'>
                <Grid item={true} xs={4}>
                    <IconButton color='inherit' onClick={handlePrevious} disabled={page === 0}>
                        <KeyboardArrowLeft color='inherit' />
                    </IconButton>
                </Grid>
                <Grid item={true} xs={4}>
                    <Typography> {props.page + 1} </Typography>
                </Grid>
                <Grid item={true} xs={4}>
                    <IconButton color='inherit' onClick={handleNext} disabled={page === totalPages - 1}>
                        <KeyboardArrowRight color='inherit' />
                    </IconButton>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Paginator