import axios from "axios";

export default axios.create({
    baseURL: "chi chen url may chu o day",
    headers: {
        "Content-type" : "application/json"
    }
});