var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


var listAllAndFollowsAndFollowes = function() {
  console.log("~ ~ ~ ~ ");
  for (var person in data) {
    console.log(`* ${data[person].name}:`);
    console.log(" Follows: ");
    data[person].follows.forEach(function(key) {
      console.log(` - ${data[key].name}`);
    });
    console.log(" Followers: ");
    for (var id in data) {
      data[id].follows.forEach(function(element) {
        if (person === element) {
          console.log(` + ${data[id].name}`);
        }
      });
    }
    console.log("~ ~ ~ ~ ");
  }
};

//listAllAndFollowsAndFollowes();

var whoFollowsMost = function() {
  var mostFollows = null;
  var n = 0;
  for (var id in data) {
    if(data[id].follows.length > n) {
      n = data[id].follows.length;
      mostFollows = id;
    }
  }
  console.log(`Who follows most people is: ${data[mostFollows].name}`);
};

//whoFollowsMost();

var getNumFollowers = function() {
  var objFollowers = {};
  for (var id in data) {
    var counter = 0;
    for (var person in data) {
      data[person].follows.forEach(function(element) {
        if(id === element) {
          counter++;
        }
      });
    }
    objFollowers[id] = counter;
  }
  return objFollowers;
};


var whoHasMostFollowers = function() {
  var obj = getNumFollowers();
  var numMost = 0;
  for (var key in obj) {
    if(obj[key] > numMost) {
      numMost = obj[key];
    }
  }
  console.log(`Who has most followers (n: ${numMost}) is (are):`);
  for (var id in obj) {
    if(obj[id] === numMost) {
      console.log(`  - ${data[id].name}`);
    }
  }
};

//whoHasMostFollowers();

// return object with id: array of followers
var getFollowers = function() {
  var objFollowers = {};
  for (var id in data) {
    var followers = [];
    for (var person in data) {
      data[person].follows.forEach(function(element) {
        if(id === element) {
          followers.push(person);
        }
      });
    }
    objFollowers[id] = followers;
  }
  return objFollowers;
};

//console.log(getFollowers());

// Print who has most followers over specific
var whoHasMostFollowersOverAge = function(ageX) {
  var obj = getFollowers();
  var objNumFollowersOverAge = {};
  for (var key in obj) {
    var counter = 0;
    obj[key].forEach(function(element) {
      if (data[element].age > ageX) {
        counter++;
      }
    });
    objNumFollowersOverAge[key] = counter;
  }

  var numMost = 0;
  for (var id in objNumFollowersOverAge) {
    if(objNumFollowersOverAge[id] > numMost) {
      numMost = objNumFollowersOverAge[id];
    }
  }
  console.log(`Who has most followers over ${ageX} (n: ${numMost}) is (are):`);
  for (var k in objNumFollowersOverAge) {
    if(objNumFollowersOverAge[k] === numMost) {
      console.log(`  - ${data[k].name}`);
    }
  }
};

//whoHasMostFollowersOverAge(30

var whoFollowsMostOverAge = function(ageX) {
  var objNumFollowsOverAge = {};
  for (var key in data) {
    var counter = 0;
    data[key].follows.forEach(function(element) {
      if (data[element].age > ageX) {
        counter++;
      }
    });
    objNumFollowsOverAge[key] = counter;
  }

  var numMost = 0;
  for (var id in objNumFollowsOverAge) {
    if(objNumFollowsOverAge[id] > numMost) {
      numMost = objNumFollowsOverAge[id];
    }
  }
  console.log(`Who most follows over ${ageX} (n: ${numMost}) is (are):`);
  for (var k in objNumFollowsOverAge) {
    if(objNumFollowsOverAge[k] === numMost) {
      console.log(`  - ${data[k].name}`);
    }
  }
};

//whoFollowsMostOverAge(30);

var whoIsNotFollowsBack = function() {
  var objNotFollowsBack = {};
  for (var key in data) {
    var arr = [];
    data[key].follows.forEach(function(element) {
      if(data[element].follows.indexOf(key) === - 1) {
        arr.push(element);
      }
    });
    if (arr.length > 0) {
      objNotFollowsBack[key] = arr;
    }
  }
  console.log("Who follow someone that doesn't follow them back is (are):");
  for (var k in objNotFollowsBack) {
    console.log(`* ${data[k].name}: `);
    objNotFollowsBack[k].forEach(function(element) {
      console.log(` - ${data[element].name}`);
    });
  }
};

//whoIsNotFollowsBack();