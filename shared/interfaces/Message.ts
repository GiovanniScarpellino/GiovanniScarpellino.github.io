interface Message {
    id?: string;
    content: string;
    position?: 'left' | 'right';
    createdAt?: number,
}

export default Message;