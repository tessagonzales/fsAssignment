let fs = require('fs');

// //challenge1

fs.readFile("challenge1/info.txt", "utf8", (err, data) => {
  if (err) {
    throw err
  } console.log(data)
})


// //challenge2

fs.appendFile('challenge2/info.txt', ' added more shit', (err, data)=> {
  if (err) {
    throw err
  } console.log(data)
})

fs.readFile("challenge2/info.txt", "utf8", (err, data) => {
  if (err) {
    throw err
  } console.log(data)
})


// //challenge3

fs.rename('challenge3/binfo.txt', 'challenge3/info.text', (err, data) => {
  if (err) { throw err }
  console.log(data);
});


// //challenge4

 //created directory
fs.mkdir('challenge4/copyfolder', err =>{
   if (err) {
       return console.error(err);
   }
   console.log("Directory created successfully!");
})

//created file in directory
fs.writeFile('challenge4/copyfolder/copy.txt', 'wwat',  err =>{
    if (err) {
        return console.error(err);
    }
    console.log("file created successfully!");
 })

// copied info.txt to copy.txt
fs.copyFile('challenge4/info.txt', 'challenge4/copyfolder/copy.txt', err =>{
   if (err) {
       console.error(err);
   }
   console.log("file copied");
})

// //challenge5

fs.readFile('challenge5/info.txt', 'utf8', (err,data) => {
  if (err) {
     console.log(err);
  } console.log(data);

  var result = data.replace(/-/g, ' ');

  fs.writeFile('challenge5/info.txt', result, 'utf8', (err, data) => {
     if (err) {console.log(err) }
     console.log(data)
  });
});

// //challenge6

fs.readdir('challenge6/', (err, data) => {
  if (err) {
    throw err
  }
  for (let i = 0; i < data.length; i++) {
    if (data[i].includes('.txt')) {
      console.log(data[i]);
      // read contents of file
      fs.readFile(`challenge6/${data[i]}`, "utf8", (err, data) => {
        if (err) {
          throw err
        }
        console.log(data)
      })
    }
  }
})
