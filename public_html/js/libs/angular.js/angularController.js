/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var WebApp = angular.module('WebApp', []).config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):/);
    }]);
;

WebApp.controller('EnergyController', ['$scope', '$window', function ($scope) {
        $scope.NumberPattern = /^[0-9]+$/;
        $scope.flag0 = false;
        $scope.flag1 = false;
        $scope.flag2 = false;
        $scope.flag3 = false;
        $scope.flag4 = false;
        $scope.flag5 = false;
        $scope.uriFlags = "";
        $scope.Number0 = "";
        $scope.Number1 = "";
        $scope.Number2 = "";
        $scope.Number3 = "";
        $scope.Number4 = "";
        $scope.Number5 = "";
        $scope.URL = "";
        var DownloadCheck = function () {
            // create temporary hyperlink element
            var hyperlink = document.createElement('a');
              // if download property is undefined
// browser doesn't support the feature
if (hyperlink.download === undefined) {
  alert('Bummer... \nIt would appear your browser does not support download attributes.\n\nPlease switch to a compatible browser such as:\nGoogle Chrome\nOpera\nFirefox');
}
        };
        DownloadCheck();
        //         Function to collect flags input then download JNLP file and input file
        $scope.CollectFlags = function (Number1, Number2, Number3, Number4, Number5) {

            // Check for the various File API support. 
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                // Great success! All the File APIs are supported.
            } else {
                alert('The File APIs are not fully supported in this browser.');
                return;
            }
//          Build JNLP as Textstring to download
            var TextString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE jnlp PUBLIC '-//Sun Microsystems, Inc//DTD JNLP Descriptor 6.0//EN' 'http://java.sun.com/dtd/JNLP-6.0.dtd'>\n<jnlp spec=\"6.0+\">\n    <information>\n        <title>Force Field X</title>\n        <vendor>Michael J. Schnieders</vendor>\n        <homepage href=\"http://ffx.eng.uiowa.edu\"/>\n        <description>Software for Molecular Biophysics</description>\n        <icon href=\"images/icon128.png\"/>\n        <offline-allowed/>\n    </information>\n    <security>\n        <all-permissions/>\n    </security>\n    <update check=\"always\" policy=\"always\"/>\n    <resources>\n        <java version=\"1.8\" initial-heap-size=\"1G\" max-heap-size=\"1G\"/>\n        <property name=\"j3d.rend\" value=\"jogl\"/>\n        <extension name=\"ffx-all\" href=\"http://ffx.eng.uiowa.edu/ffx-commons/ffx-all-1.0.0-beta.jnlp\" />\n        <extension name=\"ffx-dependency\" href=\"http://ffx.eng.uiowa.edu/dependency-repo/ffx-dependency-1.0.0-beta.jnlp\" />\n        <extension name=\"jogl-all-awt\" href=\"http://jogamp.org/deployment/v2.1.5/jogl-all-awt.jnlp\" />\n    </resources>\n    <application-desc main-class=\"ffx.Main\">\n       <argument>md"

//            Next 5 if statements check to see if user input has been provided
//            in input box if so it assigns the appropriate flag and appends it to
//            the JNLP file string called TextString.
            if (Number1 !== undefined) {
                var TextString = TextString + ' ' + '-s ' + Number1;
            }
            ;
            if (Number2 !== undefined) {
                TextString = TextString + ' ' + '-s2 ' + Number2;
            }
            ;
            if (Number3 !== undefined) {
                TextString = TextString + ' ' + '-l ' + Number3;
            }
            ;
            if (Number4 !== undefined) {
                TextString = TextString + ' ' + '-f ' + Number4;
            }
            ;
            if (Number5 !== undefined) {
                TextString = TextString + ' ' + '-f2 ' + Number5;
            }
            ;
            TextString = TextString + " </argument>\n       <argument> ";

            // Check if user inputed a file if not then deliver a warning to user
            // and exit function.
            if (document.getElementById("PDB_File").files.length !== 0) {
                var FileName = document.getElementById("PDB_File").files[0].name;
            }
            else {
                alert('You have not entered a file for analysis. Please select a file to continue.');
                return;
            }
            TextString = TextString + "Downloads/" + FileName + " </argument>\n    </application-desc>\n</jnlp>";

            //Textstring compile is completed create download element.
            var data = new Blob([TextString], {type: 'text/plain'});
            saveAs(data, "ffx.jnlp");


//                  The code below this block can be used if saveAs()
//                  Does not work in the future, I think the save as is a better implementation as of this moment
//                      
//                      
//            var a = window.document.createElement('a');
//            a.download = 'ffx.jnlp';
//            a.href = $scope.JNLP_Directory;
////            a.href = window.URL.createObjectURL(data);
//            document.body.appendChild(a);
////            a.click();
//            document.body.removeChild(a);

            //Start of dealing with input pdb file    
            var fr = new FileReader();
            fr.onload = receivedText;
            fr.readAsText(document.getElementById("PDB_File").files[0]);

            // Function to collect input file information
            function receivedText() {

                // Set input file to a variable
                var fileInputContents = fr.result;

                // Create blob of input file contents
                var blobFileInput = new Blob([fileInputContents], {type: 'text/plain'});

                // Get file input name and set that as the name for the pdb file download.
                // In future may want to make a random process to avoid duplicates.
                var FileName = document.getElementById("PDB_File").files[0].name;
                saveAs(blobFileInput, FileName);
//                
//The code below this block can be used if saveAs()
//Does not work in the future, I think the save as is a better implementation as of this moment
//                a.download = FileName;
//                a.href = window.URL.createObjectURL(data2);
//                document.body.appendChild(a);
//                a.click();
//                document.body.removeChild(a);
            }
        };
    }]);

WebApp.controller('Molecular_Dynamics_Controller', ['$scope', '$window', function ($scope) {

        $scope.NumberPattern = /^[0-9]+$/;
        $scope.flag1 = false;
        $scope.flag2 = false;
        $scope.flag3 = false;
        $scope.flag4 = false;
        $scope.flag5 = false;
        $scope.Number1 = "";
        $scope.Number2 = "";
        $scope.Number3 = "";
        $scope.Number4 = "";
        $scope.Number5 = "";
        
        //         Function to collect flags input then download JNLP file and input file
        $scope.CollectFlags = function (Number1, Number2, Number3, Number4, Number5) {

            // Check for the various File API support. 
            if (window.File && window.FileReader && window.FileList && window.Blob) {
                // Great success! All the File APIs are supported.
            } else {
                alert('The File APIs are not fully supported in this browser.');
                return;
            }
//          Build JNLP as Textstring to download
            var TextString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE jnlp PUBLIC '-//Sun Microsystems, Inc//DTD JNLP Descriptor 6.0//EN' 'http://java.sun.com/dtd/JNLP-6.0.dtd'>\n<jnlp spec=\"6.0+\">\n    <information>\n        <title>Force Field X</title>\n        <vendor>Michael J. Schnieders</vendor>\n        <homepage href=\"http://ffx.eng.uiowa.edu\"/>\n        <description>Software for Molecular Biophysics</description>\n        <icon href=\"images/icon128.png\"/>\n        <offline-allowed/>\n    </information>\n    <security>\n        <all-permissions/>\n    </security>\n    <update check=\"always\" policy=\"always\"/>\n    <resources>\n        <java version=\"1.8\" initial-heap-size=\"1G\" max-heap-size=\"1G\"/>\n        <property name=\"j3d.rend\" value=\"jogl\"/>\n        <extension name=\"ffx-all\" href=\"http://ffx.eng.uiowa.edu/ffx-commons/ffx-all-1.0.0-beta.jnlp\" />\n        <extension name=\"ffx-dependency\" href=\"http://ffx.eng.uiowa.edu/dependency-repo/ffx-dependency-1.0.0-beta.jnlp\" />\n        <extension name=\"jogl-all-awt\" href=\"http://jogamp.org/deployment/v2.1.5/jogl-all-awt.jnlp\" />\n    </resources>\n    <application-desc main-class=\"ffx.Main\">\n       <argument>md"

//            Next 5 if statements check to see if user input has been provided
//            in input box if so it assigns the appropriate flag and appends it to
//            the JNLP file string called TextString.
            if (Number1 !== undefined) {
                var TextString = TextString + ' ' + '-s ' + Number1;
            }
            ;
            if (Number2 !== undefined) {
                TextString = TextString + ' ' + '-s2 ' + Number2;
            }
            ;
            if (Number3 !== undefined) {
                TextString = TextString + ' ' + '-l ' + Number3;
            }
            ;
            if (Number4 !== undefined) {
                TextString = TextString + ' ' + '-f ' + Number4;
            }
            ;
            if (Number5 !== undefined) {
                TextString = TextString + ' ' + '-f2 ' + Number5;
            }
            ;
            TextString = TextString + " </argument>\n       <argument> ";

            // Check if user inputed a file if not then deliver a warning to user
            // and exit function.
            if (document.getElementById("PDB_File").files.length !== 0) {
                var FileName = document.getElementById("PDB_File").files[0].name;
            }
            else {
                alert('You have not entered a file for analysis. Please select a file to continue.');
                return;
            }
            TextString = TextString + "Downloads/" + FileName + " </argument>\n    </application-desc>\n</jnlp>";

            //Textstring compile is completed create download element.
            var data = new Blob([TextString], {type: 'text/plain'});
            saveAs(data, "ffx.jnlp");


//                  The code below this block can be used if saveAs()
//                  Does not work in the future, I think the save as is a better implementation as of this moment
//                      
//                      
//            var a = window.document.createElement('a');
//            a.download = 'ffx.jnlp';
//            a.href = $scope.JNLP_Directory;
////            a.href = window.URL.createObjectURL(data);
//            document.body.appendChild(a);
////            a.click();
//            document.body.removeChild(a);

            //Start of dealing with input pdb file    
            var fr = new FileReader();
            fr.onload = receivedText;
            fr.readAsText(document.getElementById("PDB_File").files[0]);
            function receivedText() {

                // Set input file to a variable
                var fileInputContents = fr.result;

                // Create blob of input file contents
                var blobFileInput = new Blob([fileInputContents], {type: 'text/plain'});

                // Get file input name and set that as the name for the pdb file download.
                // In future may want to make a random process to avoid duplicates.
                var FileName = document.getElementById("PDB_File").files[0].name;
                saveAs(blobFileInput, FileName);
//                
//The code below this block can be used if saveAs()
//Does not work in the future, I think the save as is a better implementation as of this moment
//                a.download = FileName;
//                a.href = window.URL.createObjectURL(data2);
//                document.body.appendChild(a);
//                a.click();
//                document.body.removeChild(a);
            }
        };
    }]);