var fs = require('fs'), // needed to read JSON file from disk
  sdk = require('postman-collection'),
  Collection = sdk.Collection,
  Request = sdk.Request,
  Item = sdk.Item,
  ItemGroup = sdk.ItemGroup,
  _ = require('lodash'),
  myCollection,
  requests = [],
  dfs = function (item, requests) { // fn -> Depth first search
    // Check if this is a request
    if (Item.isItem(item)) {
      if (item.request && Request.isRequest(item.request)) {
        requests.push(item.request);
      }
    }
    // Check if this is a nested folder
    else if (ItemGroup.isItemGroup(item)) {
      // Check if this is an empty folder
      if (item.items && (item.items.count() === 0)) {
        return requests;
      }
      // Do a depth first search for requests on the nested folder
      item.each(function (item) {
        requests.push(dfs(item, []));
      })
    }

    return requests;
  };

// Load a collection to memory from a JSON file on disk
myCollection = new Collection(JSON.parse(
  fs.readFileSync('<path_to_collection_json_file>').toString()));

myCollection.items.each(function (item) {
  // Check if this is a request at the top level
  if (Item.isItem(item)) {
    if (item.request && Request.isRequest(item.request)) {
      requests.push(item.request);
    }
  }
  // Check if this is a folder at the top level
  else if (ItemGroup.isItemGroup(item)) {
    item.items.each(function (item) {
      requests.push(dfs(item, []));
    })
  }
});

// Flatten. After flattening requests will an array of PostmanRequest objects
requests = _.flattenDeep(requests)

// Serialize each PostmanRequest to it's JSON representation
requests = _.map(requests, (r) => { return r.toJSON(); })

_.each(requests, (request) => {
  console.log(request.url); // The request URL
  console.log(request.method); // The HTTP Verb of your request Eg. GET, POST
  _.each(request.header, (header) => {
    console.log(header.key, header.value); // Eg. key -> 'Content-Type', value -> 'application/json'
  });
  // You can also access the request body and the auth, certificate and proxy used by the request
  // Your PostmanRequest description is also available
});

