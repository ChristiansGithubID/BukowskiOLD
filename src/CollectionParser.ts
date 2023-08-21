export abstract class CollectionParser{

    protected _name:string;
    protected _event: string; //probably not needed
    protected _listen:string;
    protected _scriptLines: string[]; //multiple lines
    protected _scriptType: string;
    protected _requestMethod: String;
    protected _requestHeaders: string[];//multiple lines
    protected _requestBody: string;
    protected _URLraw:string;
    protected _URLhost: string[];////multiple lines, url parts that comprise the url (delimited by dots)
    protected _URlpath: string[]; //multiple lines, url parts that comprise the file path (delimited by slashes)  
    protected _URLprotocol: string;
    protected _URLquery: string; //multiple lines
    protected _URLport: string;
    protected _collectionVersion:Number;
    
    //getter methods

    public get CollectionVersion(){ return this._collectionVersion;}
    public get Name(){ return this._name ; }
    public get Event(){ return this._event ; } //probably not needed
    public get Listen(){ return this._listen; }
    public get ScriptLines(){ return this._scriptLines ; } //multiple lines
    public get ScriptType(){ return this._scriptType ; }
    public get RequestMethod(){ return this._requestMethod ; }
    public get RequestHeaders(){ return this._requestHeaders ; }//multiple lines
    public get RequestBody(){ return this._requestBody; }
    public get URLraw(){ return this._URLraw; }
    public get URLhost(){ return this._URLhost; }////multiple lines, url parts that comprise the url (delimited by dots)
    public get URlpath(){ return this._URlpath; } //multiple lines, url parts that comprise the file path (delimited by slashes)  
    public get URLprotocol(){ return this._URLprotocol ; }
    public get URLquery(){ return this._URLquery ; } //multiple lines
    public get URLport(){ return this._URLport ; }
    public get URL(){return this._URLraw;}

    constructor(CollectionText:string){
//this is just a placeholder until I get the real constructor built
this._name="";//string;
this._event="";// string; //probably not needed
this._listen="";//string;
this._scriptLines=["",""];// string[]; //multiple lines
this._scriptType="";// string;
this._requestMethod="";// String;
this._requestHeaders=["",""];// string[];//multiple lines
this._requestBody="";// string;
this._URLraw="";//string;
this._URLhost=["",""];// string[];////multiple lines, url parts that comprise the url (delimited by dots)
this._URlpath=["",""];// string[]; //multiple lines, url parts that comprise the file path (delimited by slashes)  
this._URLprotocol="";// string;
this._URLquery="";// string; //multiple lines
this._URLport="";// string;
this._collectionVersion=0;//Number;
        //Create a reader object
    }

    

 //parser info:
 /*break down    into the  following objects: 
 Info
    get info.schema value and search it for "collectionv2" to determine collection value type

item[]
    name
    event (this is where tests are held)    
        listen:"test"
        script
            exec[]
            type :"text/javascript"
    request (Request info is all here)
        mthod: "GET"
        header[]:
            key: 
            value:
            type:
            disabled:
        URL
 */


}