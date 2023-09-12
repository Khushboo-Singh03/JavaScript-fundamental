const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    swift: 'Ruby',
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr = [1, 3, 4, 6, 7]

for (const key in arr) {
    //    console.log(key);
    // console.log(arr[key]);
}

const map = new Map();
map.set('IN', 'India',)
map.set('USA', 'United State of America')
map.set('UK', 'United Kingdom')

for (const key in map) {
   console.log(key);
}

// not iteratable on map