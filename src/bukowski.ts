
//import { splat } from '../collections/deletethis';

//import { Collection } from 'postman-collection';
const fs = require('fs')
const pm = require('postman-collection');
const pmProperty = require('postman-collection').Property;
const pmCollection = require('postman-collection').Collection;
const pmItemGroup =  require('postman-collection').ItemGroup;
const pmItem =  require('postman-collection').Item;
const pmRequest = require('postman-collection').Request;
const pmEvent = require('postman-collection').Event;
const pmPropertyList = require('postman-collection').PropertyList;

console.log("bukowski typescript")
parseCollection();
hitBrakes();
function hitBrakes(){
    let grg = 0;
    console.log(grg);
}

let myBreakPoint = 0;
console.log("ended")


function parseCollection(){
    let myCollection;
    let apiCalls;

// Load a collection to memory from a JSON file on disk (say, sample-collection.json)
//myCollection = new pm.Collection(JSON.stringify(fs.readFileSync('C:\\Users\\cgibbs2\\Documents\\GitHub\\Bukowski\\collections\\OLT.postman_collection.json').toString()));
myCollection = new pmCollection(JSON.parse(fs.readFileSync('C:\\Users\\c\gibbs2\\Documents\\GitHub\\Bukowski\\collections\\OLT.postman_collection.json')));
console.log(myCollection);

let Iknowthereareitemshere ="";//JSON.parse(myCollection.items);
console.log(Iknowthereareitemshere);

console.log(myCollection.name);
console.log(myCollection.id);

if(pmPropertyList.isPropertyList(myCollection.items))
{
    console.log("BLAH");
    console.log(myCollection.items.count())
    console.log(myCollection.items.all());
    //let p = new pmItem();
    
    //p = myCollection.items[0].toJSON();
    //console.log(p);
}
else {
    console.log("poop");
}
let item = new pmItem;
myCollection.items.each(function (item) {
    // Check if this is a request at the top level
    if (pmItem.isItem(item)) {
      if (item.request && pmRequest.isRequest(item.request)) {
  //      console.log(item.request.toJSON());
      }
    }
    // Check if this is a folder at the top level
    else if (pmItemGroup.isItemGroup(item)) {
      item.items.each(function (itemb) {
    //    console.log('ItemGrouprequests.push(dfs(item, []))');
    console.log(itemb.toJSON());
      })
    }
  });
//console.log(myCollection.);
//let item;
//for(item in myCollection.items)
//{
  //  console.log(item);
//}
//console.log(Iknowtheresitemshere);
//console.log(myCollection.events.toJSON());

//console.log(myCollection.variables.toJSON());
  

//console.log(myCollection.item.name);
//console.log(myCollection.events);
//console.log(myCollection.variables);

};


function extractTests(){}
//Get the collection
let collectionFile = "";
function readcollection(){
}