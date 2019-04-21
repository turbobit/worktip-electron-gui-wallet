import enUS from "./en-us"

// ADD LANGUAGES HERE
const languages = [
    { name: "English", code: "en-us", flag: "us" },
    { name: "한국어", code: "ko-kr", flag: "kr" },
    { name: "Russian", code: "ru", flag: "ru" }
]

export { languages }

// DO NOT MODIFY THIS EXPORT, LANGUAGE FILES CAN BE DYNAMICALLY LOADED
export default {
    "en-us": enUS
}
