import {createTheme} from "@mui/material";

let theme = createTheme();

export const styles = {
    article: {
        cursor: "pointer",
        [theme.breakpoints.up("md")]: {
            backgroundColor: "var(--color-complement-black)",
            borderRadius: "5px",
            height: "200px",
            width: "900px"
        }
    },
    frontCard: {
        position: "relative"
    },
    imgFront: {
        height: "100%",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            borderRadius: "4px",
            height: "80%",
            margin: "20px",
            width: "80%"
        }
    },
    icon: {
        color: "var(--color-complement-black)",
        fontSize: "30px",
        [theme.breakpoints.up("md")]: {
            color: "var(--color-gray-lofi)"
        }
    },
    descriptionIcon: {
        color: "var(--color-orange-base)",
        fontFamily: "var(--font-secondary)",
        padding: "4px"
    },
    hoverDescription: {
        alignItems: "center",
        backgroundColor: "var(--color-black-lofi)",
        bottom: 0,
        color: "white",
        display: "none",
        fontSize: "20px",
        height: "100%",
        left: 0,
        opacity: "0.7",
        padding: "10px",
        position: "absolute",
        right: 0,
        textAlign: "center",
        top: 0,
        transition: "all 5s",
        width: "100%",
        [theme.breakpoints.up("md")] : {
            display: "none"
        }
    },
    proyectData: {
        alignItems: "center",
        backgroundColor: "var(--color-black-lofi)",
        bottom: "0",
        display: "flex",
        justifyContent: "space-evenly",
        opacity: "0.8",
        padding: "10px",
        position: "absolute",
        width: "100%",
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    displayDescription: {
        display: "block"
    },
    bottomContainer: {
        alignItems: "center",
        display: "flex",
        justifyContent: "space-between",
        padding: "5px"
    },
    btnTechnology: {
        border: "solid 1px var(--color-orange-base)",
        borderRadius: "20px",
        color: "var(--color-orange-base)",
        fontSize: "12px",
        padding: "4px 8px"
    }
}

export const HandleMouseEnter = (ref) => {
    ref.current.style.display = "flex";
}

export const HandleMouseLeave = (ref) => {
    ref.current.style.display = "none";
}