import {createTheme} from "@mui/material";

let theme = createTheme();

export const HandleMouseEnter = (ref, widthResize) => {
    widthResize < theme.breakpoints.values.lg ? ref.current.style.display = "flex" : "";
}

export const HandleMouseLeave = (ref) => {
    ref.current.style.display = "none";
}