import Axios from 'axios';
import { API_PATH } from '../constants';
import Message from '../../shared/interfaces/Message';

export const addMessage = (message: Message, userId: string): Promise<{ data: string }> => {
    return Axios({
        baseURL: API_PATH + '/newMessage',
        method: 'POST',
        data: {
            userId,
            position: 'right',
            content: message.content,
        }
    });
}