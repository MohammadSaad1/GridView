import { Box, Grid, Toolbar } from "@material-ui/core"
import { useState } from "react"
import GridView from "../components/GridView/GridView"
import Paginator from "../components/Paginator/Paginator"
import { imageItems } from "../data/imageItems"
import { ItemsEachPage } from "../types/ItemsEachPage"
import { toSubArrays } from "../utility/toSubArrays"

interface FrontPageProps { }

const FrontPage = (props: FrontPageProps) => {
    const [page, setPage] = useState<number>(0)
    const [itemsEachPage, setItemsEachPage] = useState<ItemsEachPage>(3)

    const dividedImageItemsPerPage = toSubArrays(imageItems, Math.ceil(imageItems.length / itemsEachPage))
    const currentPageImageItems = dividedImageItemsPerPage[page]

    return (
        <Box width='100%'>
            <Grid container={true} direction='column' alignContent='center'>
                <Grid item={true}>
                    <Toolbar />
                </Grid>
                <Grid item={true}>
                    <GridView
                        itemsEachPage={itemsEachPage}
                        imageItems={currentPageImageItems}
                    />
                </Grid>
                <Grid item={true}>
                    <Paginator page={page} setPage={setPage} totalPages={dividedImageItemsPerPage.length} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default FrontPage