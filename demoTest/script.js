var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var pVal = document.querySelector('div');

// fruits.forEach(function(element) {
// //console.log(element)
// var div = document.createElement("div");                      
// var t = document.createTextNode(element);      
// div.appendChild(t);                                       
// document.getElementById("myDIV").appendChild(div);           
// });


let arr = [
    {
        id: 1,
        name: 'ankur',
        detail: 'bad boy'
    },
    {
        id: 2,
        name: 'ankur tiwari',
        detail: 'good boy'
    }
];


// var table = document.createElement("table");
// for (var i = 0; i < arr.length; i++) {
//   var row = table.insertRow(-1);

//   var idCell = row.insertCell(-1);
//   idCell.appendChild(document.createTextNode(arr[i].id));

//   var nameCell = row.insertCell(-1);
//   nameCell.appendChild(document.createTextNode(arr[i].name));

//   var detailsCell = row.insertCell(-1);
//   detailsCell.appendChild(document.createTextNode(arr[i].detail));

// }
// document.body.appendChild(table);


function displayArrayObjects(arrayObjects) {
    var len = arrayObjects.length, 
    text = "";

    for (var i = 0; i < len; i++) {
        var myObject = arrayObjects[i];
        
        for (var x in myObject) {
            text += ( x + ": " + myObject[x] + " ");
            text += "<br/>";

        }
        text += "<br/>";
    }

    document.getElementById("myDIV").innerHTML = text;
}

displayArrayObjects(arr)