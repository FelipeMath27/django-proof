export type DocumentType = 'CC' | 'CE' | 'NIT' | 'TI' ;
export type StateType = 'ACT' | 'INA';

export default interface Client{
    str_fullname_client : string;
    str_type_identification : DocumentType;
    str_identification_number : string;
    str_email_client : string;
    str_state : StateType;
}
