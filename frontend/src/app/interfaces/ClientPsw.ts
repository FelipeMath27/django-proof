type DocumentType = 'CC' | 'CE' | 'NIT' | 'ti' ;

export default interface ClientPsw{
    documentType : DocumentType;
    document : string;
    email : string;
    password : string;
}
