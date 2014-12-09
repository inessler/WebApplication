/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function runFFX(boo1, boo2, boo3, boo4, boo5, form) {
    if (boo1 === true) {
        var file = form.exampleInputFile.value;
        var reader = new FileReader();
        reader.readAsText(file);
        console.log(file);
        print("yes");
    }
}
function isNumber($scope, $http) {
    console.log($scope);
    //  var street_name = $('[ng-controller="add"]').scope().Number1;
    //$scope.Number1;
    return isNaN(Number);
}
function FileIO() {
    i = 0;
    var formData = new FormData();
    var formElement = document.getElementById("EnergyForm");
    formData = new FormData(formElement);
    formData.append("input4", i++);
    request.send(formData);
}
function download(filename, text) {
    var pom = document.createElement('a');
    pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    pom.setAttribute('download', filename);
    pom.click();
}
//(function () {
//var textFile = null,
//  makeTextFile = function (text) {
//    var data = new Blob([text], {type: 'text/plain'});
//
//    // If we are replacing a previously generated file we need to
//    // manually revoke the object URL to avoid memory leaks.
//    if (textFile !== null) {
//      window.URL.revokeObjectURL(textFile);
//    }
//
//    textFile = window.URL.createObjectURL(data);
//
//    return textFile;
//  };
//
//
//  var create = document.getElementById('create'),
//    textbox = document.getElementById('textbox');
//
//  create.addEventListener('click', function () {
//    var link = document.getElementById('downloadlink');
//    link.href = makeTextFile(textbox.value);
//    link.style.display = 'block';
//  }, false);
//})();
//    if (f) {
//      var r = new FileReader();
//      r.onload = function(e) { 
//	      var contents = e.target.result;
//        alert( "Got the file.n" 
//              +"name: " + f.name + "n"
//              +"type: " + f.type + "n"
//              +"size: " + f.size + " bytesn"
//              + "starts with: " + contents.substr(1, contents.indexOf("n"))
//        );  
//      }
//      r.readAsText(f);
//    } else { 
//      alert("Failed to load file");
//    }


