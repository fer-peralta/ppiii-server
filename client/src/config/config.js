const persistence = () => {
    if (REACT_APP_API_MODE === "LOCAL") {
        console.log("LOCAL mode selected")
        return process.env.REACT_APP_API_BASE_URL_LOCAL
    } else if (REACT_APP_API_MODE === "CLOUD") {
        console.log("CLOUD mode selected")
        return process.env.REACT_APP_API_BASE_URL_CLOUD
    } else {
        console.log("There's no mode selected, LOCAL was setted by default")
        return process.env.REACT_APP_API_BASE_URL_LOCAL
    }
}

export const config = {
    REACT_APP_API_MODE: process.env.REACT_APP_API_MODE,
    REACT_APP_API_BASE_URL: persistence()
}