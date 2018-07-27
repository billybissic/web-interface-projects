export class InquiryType {
    inquiry_type_id: number;
    inquiry_type_name: string;
    inquiry_type_description: string;

    constructor(inquiry_type_id, inquiry_type_name, inquiry_type_description)
    {    
        this.inquiry_type_id = inquiry_type_id;
        this.inquiry_type_name = inquiry_type_name;
        this.inquiry_type_description = inquiry_type_description;
    }
}