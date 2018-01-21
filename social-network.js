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

listAllAndFollowsAndFollowes();

