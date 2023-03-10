//JAIS CODE!!!!!!!!!
//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGift(gift) {
//  console.log(`Wrapped ${gift} and added a bow!`);
//}

//wrapGift(gifts[0]);
//wrapGift(gifts[1]);
//wrapGift(gifts[2]);

//for ([initialization]; [condition]; [iteration]){
//    [loop, body]
//}

//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy Birthday to me!`);
//    debugger;
//}

//const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
//  for (let i = 0; i < gifts.length; i++) {
//    console.log(`Wrapped ${gifts[i]} and added a bow!`);
//    debugger;
//  }

//  return gifts;
//}

//wrapGifts(gifts);

//JAIS ASSIGNMENT

//function writeCards(names, event){
//    const messageNames = [];
//no idea if I should be putting the const on the inside of the function or above
//    for (let i = 0; i < names.length; i++){
//        messageNames.push(`Thank you, ${names}, for the nice ${event} gift!`)
//    }
//    return messageNames;
//}
//const messageNames = writeCards(["Jai", "Josh", "Jules"], "Christmas")
//console.log(messageNames)
//not sure why it is putting all 3 names from my array
////////////////////////////////////OTHER ASSIGNMENT
//function countDown(number) {
//    while (number >= 0) {
//        console.log(number);
//      number--;
//    }
//  }
  
//  countDown(5)
//function countDown(number) {
//   while (number <= 11) {
//        console.log(number--);
//    }
//    return number;
//}

function writeCards(names, event) {
    let message = []; // empty array to hold the messages
     for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}
writeCards(["Charlie", "Jai", "Ali"], "birthday");

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
countDown(10);