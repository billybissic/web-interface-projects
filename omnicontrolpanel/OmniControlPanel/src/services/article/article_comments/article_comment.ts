export class ArticleComment {
    id: number;
    post_id: number;
    is_reply_to_id: number;
    comment: string;
    user_id: number;
    mark_read: number;
    enabled: number;
    date: string;
    
    constructor() {

    }
}