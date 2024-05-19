type DocumentType = 'CC' | 'CE' | 'NIT' | 'ti' ;
type StateType = 'ACT' | 'INA';

export default interface Client{
    fullName : string;
    documentType : DocumentType;
    document : string;
    email : string;
    state : StateType;
}
