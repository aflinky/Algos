const input = [
  "/home/heart/lipitor",
  "/home/stomach/directory/path/meds",
  "/home/skin/lotion/lotionStuff",
  "/notHome/otherDirectory/otherPath/anotherPath/andAnother/diffMeds",
  "/home/heart/things/moreThings"
]

/**
 * OUTPUT (printed/console logged)
 * 
 * -home
 *    -heart
 *        -lipitor
 *        -things
 *            -moreThings
 *    -stomach
 *        -directory
 *            -path
 *                -meds
 *    -skin
 *        -lotion
 *            -lotionStuff
 * -notHome
 *    -otherDirectory
 *        -otherPath
 *            -anotherPath
 *                -andAnother
 *                    -diffMeds
 */

function toObject(arr) {
  const siteMap = {};
  for (let med of arr) {
    const path = med.split("/");
    let i = 1;
    let curr = siteMap;
    while (i < path.length) {
      curr = curr.hasOwnProperty(path[i]) ? curr[path[i]] : curr[path[i]] = {};
      i++;
    }
  }
  return siteMap;
}

const result = toObject(input);

function print(obj, level = 0) {
  for (let path in obj) {
    console.log("  ".repeat(level) + path)
    if (Object.keys(path).length) print(obj[path], level+1);
  }
}

print(result)