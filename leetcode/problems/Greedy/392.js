function myAnswer(s, t) {
  var listS = new Map();
  var listT = new Map();
  for (var i = 0; i < s.length; i++) {
    if (!listS.has(s[i])) {
      listS.set(s[i], t[i]);
    }
    if (!listT.has(t[i])) {
      listT.set(t[i], s[i]);
    }
  }
  for (var i = 0; i < s.length; i++) {
    if (listS.get(s[i]) !== t[i] || listT.get(t[i]) !== s[i]) {
      return false;
    }
  }
  return true;
}

// best Answer

function isIsomorphic(s, t) {
  var map = {};
  for (var i = 0; i < s.length; i++) {
    console.log(s[i]);
    if (s[i] in map) {
      if (map[s[i]] !== t[i]) return false;
    } else {
      if (Object.values(map).includes(t[i]) && s[i] !== map[t[i]]) return false;
      map[s[i]] = t[i];
    }
  }
  return true;
}
