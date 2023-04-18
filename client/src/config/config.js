

export const config = {
    REACT_APP_API_MODE: process.env.REACT_APP_API_MODE,
    REACT_APP_API_BASE_URL: (process.env.REACT_APP_API_MODE === "LOCAL" && process.env.REACT_APP_API_BASE_URL_LOCAL) || (process.env.REACT_APP_API_MODE === "CLOUD" && process.env.REACT_APP_API_BASE_URL_CLOUD)
}