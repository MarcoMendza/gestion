import {loadBlogs} from "../../helpers/";
import {setBlogs} from "./blogSlice.js";

export const startLoadingBlogs = () => {
    return async (dispatch ) => {
        const blogs = await loadBlogs();
        dispatch( setBlogs( blogs ));
    }
}

