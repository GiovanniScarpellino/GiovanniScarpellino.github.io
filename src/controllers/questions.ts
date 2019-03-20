import Axios from 'axios';
import { API_PATH } from '../constants';

export const addQuestion = (question: string, email: string) => {
    return Axios({
        baseURL: API_PATH + '/newQuestion',
        method: 'POST',
        data: { question, email }
    });
}