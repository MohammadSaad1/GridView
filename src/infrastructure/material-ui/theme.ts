import { colors, createTheme, Theme } from "@material-ui/core";

export const theme: Theme = createTheme({
    overrides: {
        MuiSelect: {
            root: {
                color: 'whitesmoke'
            },
            icon: {
                color: 'whitesmoke'
            },
        },
        MuiTextField: {
            root: {
                backgroundColor: '#121417',
            },
        },
        MuiInputBase: {
            root: {
                color: 'whitesmoke',
            }
        }
    }
})