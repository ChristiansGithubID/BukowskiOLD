
//import { splat } from '../collections/deletethis';
//import { Collection } from 'postman-collection';
const fs = require('fs')
const pm = require('postman-collection');
const Collection = require('postman-collection').Collection;
console.log("bukowski typescript")
parseCollection();

function parseCollection(){
    let myCollection;

// Load a collection to memory from a JSON file on disk (say, sample-collection.json)
//myCollection = new pm.Collection(JSON.stringify(fs.readFileSync('C:\\Users\\cgibbs2\\Documents\\GitHub\\Bukowski\\collections\\OLT.postman_collection.json').toString()));

//myCollection = new Collection(JSON.parse(fs.readFileSync('C:\\Users\\c\gibbs2\\Documents\\GitHub\\Bukowski\\collections\\OLT.postman_collection.json')));
myCollection = JSON.parse(fs.readFileSync('C:\\Users\\c\gibbs2\\Documents\\GitHub\\Bukowski\\collections\\OLT.postman_collection.json'));

//.stringify(fs.readFileSync('C:\\Users\\cgibbs2\\Documents\\GitHub\\Bukowski\\collections\\OLT.postman_collection.json').toString()));
//let myItemsList = myCollection.items;
// log items at root level of the collection
console.log(myCollection);

//let Iknowtheresitemshere = JSON.parse(myCollection.items);
//console.log(Iknowtheresitemshere);
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