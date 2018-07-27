export class User {
    uuid: number;
    user_profile_id: number;
    user_name: string;
    user_password: string;
    last_password_changed_date: string;
    password_change_requested: number;
    password_reset_requested: number;
    user_email: string;
    user_touched: string;
    user_token: string;
    user_email_authenticated: number;
    user_email_token: string;
    user_edit_count: number;
    user_language_code: number;
    user_signature: string;
    user_create_timestamp: number;
    user_login_count: number;
    user_timezone_code: number;
    user_preferred_admin_language: number;
    user_init: string;

    constructor() {
        
    }
}