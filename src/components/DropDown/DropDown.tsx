import { Grid, MenuItem, Select } from "@material-ui/core"
import { ChangeEvent, Dispatch, ReactNode } from "react"
import { ItemsEachPage } from "../../types/ItemsEachPage"

interface DropDownProps {
    itemsEachPage: ItemsEachPage
    setItemEachPage: Dispatch<React.SetStateAction<ItemsEachPage>>
}

const DropDown = (props: DropDownProps) => {
    const handleChange = (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: ReactNode) => {
        props.setItemEachPage(event.target.value as ItemsEachPage)
    }

    return (
        <Select
            value={props.itemsEachPage}
            label="Age"
            onChange={handleChange}
        >
            <MenuItem value={3}>Three</MenuItem>
            <MenuItem value={6}>Six</MenuItem>
            <MenuItem value={9}>Nine</MenuItem>
        </Select>
    )
}

export default DropDown