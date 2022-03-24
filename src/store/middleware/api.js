import axios from "axios";
import { ApiRequestSuccess } from '../product';

const api = store => next => async action => {

    if(action.type !== "apiRequest") return next(action);

    next(action);
    // Prosses

    const { url, method, data, onSuccess, onError } = action.payload;
    const response = await axios.request({
        baseURL: 'https://jsonplaceholder.typicode.com',
        url,
        method,
        data
    });

    store.dispatch(ApiRequestSuccess(response.data));

}

export default api;
