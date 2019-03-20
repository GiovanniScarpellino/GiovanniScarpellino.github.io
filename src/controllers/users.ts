import Axios from 'axios';
import { API_PATH } from '../constants';

export const addEmailToUser = (email: string, userId: string): Promise<{ data: string }> => {
    return Axios({
        baseURL: API_PATH + '/addEmailToUser',
        method: 'POST',
        data: {
            userId,
            email,
        }
    });
}

export const setActiveUser = (id: string, state: boolean): Promise<{ data: any }> => {
    return Axios({
        baseURL: API_PATH + '/setActiveUser',
        method: 'POST',
        data: {
            id,
            state,
        }
    });
}