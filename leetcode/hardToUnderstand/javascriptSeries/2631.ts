// 2631. Group By

// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.

// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

// Please solve it without lodash's _.groupBy function.

/**
 * @argument {
 * Input:
 * array = [
 *   {"id":"1"},
 *   {"id":"1"},
 *   {"id":"2"}
 * ],
 * fn = function (item) {
 *   return item.id;
 * }
 * }
 * @returns {
 * Output:
 * {
 *   "1": [{"id": "1"}, {"id": "1"}],
 *   "2": [{"id": "2"}]
 * }}
 */

function Loop(fn: any){
    const group = {}
    for(const item of this){
        const key = fn(item)
    
        if(!(key in group)){
            group[key] = [item]
        } else {
            group[key].push(item)
        }
    }
    return group
}

function Reduce(fn: any){
    return this.reduce((accum, item) => {
        const key = fn(item)
        accum[key] ||= [];
        accum[key].push(item)
        return accum
    }, {})
}

// Use cases

function buildTree(list, keys, index = 0) {
    if (index >= keys.length) return list;
    const group = list.groupBy((item) => item[keys[index]]);
    Object.keys(group).forEach((key) => {
      const list = group[key]
      group[key] = buildTree(list, keys, index + 1);
    });
    return group;
  }
  
  buildTree([{a: 1, b: 2}, {a: 1, b: 3}], ['a', 'b']);
  /*
  {
    "1": {
      "2": [{a: 1, b: 2}],
      "3": [{a: 1, b: 3}]
    }
  }
  */


  const people = [
    { name: 'Alice', birthYear: 1990 },
    { name: 'Bob', birthYear: 1972 },
    { name: 'Jose', birthYear: 1999 },
    { name: 'Claudia', birthYear: 1974 },
    { name: 'Marcos', birthYear: 1995 }
  ];
  
  const decades = [
    { start: 1970, theme: 'Disco',
    { start: 1980, theme: 'Arcades' },
    { start: 1990, theme: 'Beanie Babies' }
  ];
  
  const groupedByDecade = list.groupBy((person) =>  {
    const decade = Math.floor(person.birthYear / 10) * 10;
    return String(decade);
  });
  
  const decadesWithPeople = decade.map((decade) => {
    return { 
      ...decade,
      people: groupedByDecade[decade.start] || [],
    };
  });