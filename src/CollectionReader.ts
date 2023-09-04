import * as fs from 'fs';
import * as pm from 'postman-collection';



import {parser} from 'stream-json';
import {pick} from 'stream-json/filters/Pick';
import {ignore} from 'stream-json/filters/Ignore';
import {streamValues} from 'stream-json/streamers/StreamValues';
import {streamArray} from 'stream-json/streamers/StreamArray';
import {chain} from 'stream-chain';
import Parser from 'stream-json/Parser';

export class CollectionReader{


    
    private _parser: Parser;
    
constructor(CollectionFileName: string)
{
    this._parser = parser();
    const apiCallDetailsFileRead = fs.readFileSync(CollectionFileName, 'utf-8');
    const apiCallDetails = JSON.parse(apiCallDetailsFileRead)
    console.log(apiCallDetails)
}

public async BuildPipeline(fileName:string){
    
    const pipeline = chain([fs.createReadStream(fileName), parser,streamArray()
    ]);
    pipeline.on('data', data=>{console.log(data)});
    //put various method calls to find particular data in this area
    //pipeline.on(end or close or whatever)
}
//open the file
//read it/

}

//REad the collection file
//parse the collection file