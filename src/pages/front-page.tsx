import { Box, Grid } from "@material-ui/core"
import { useState } from "react"
import GridView from "../components/GridView/GridView"
import Toolbar from "../components/Toolbar/Toolbar"
import Paginator from "../components/Paginator/Paginator"
import { imageItems } from "../infrastructure/data/imageItems"
import { ItemsEachPage } from "../infrastructure/types/ItemsEachPage"
import { toSizePerPage } from "../infrastructure/utility/toSizePerPage"
import { ImageItem } from "../infrastructure/types/ImageItem"

interface FrontPageProps { }

const FrontPage = (props: FrontPageProps) => {
    const [page, setPage] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    const [itemsEachPage, setItemsEachPage] = useState<ItemsEachPage>(3)

    const filterOnSearch = (imageItems: ImageItem[]) => {
        if (search) {
            return imageItems.filter(imageItem => imageItem.title.toLowerCase().includes(search.toLowerCase()))
        }

        return imageItems
    }

    const dividedImageItemsPerPage = toSizePerPage(filterOnSearch(imageItems), itemsEachPage)
    console.log(dividedImageItemsPerPage)
    const currentPageImageItems = dividedImageItemsPerPage[page] ?? []

    return (
        <Grid container={true} justifyContent='center'>
            <Grid item={true} container={true} xs={12} sm={10} md={8} direction='column'>
                <Grid item={true}>
                    <Toolbar setSearch={setSearch} itemsEachPage={itemsEachPage} setItemsEachPage={setItemsEachPage} />
                </Grid>
                <Grid item={true}>
                    <GridView
                        imageItems={currentPageImageItems}
                    />
                </Grid>
                <Grid item={true}>
                    <Paginator page={page} setPage={setPage} totalPages={dividedImageItemsPerPage.length} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default FrontPage