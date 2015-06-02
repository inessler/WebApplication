
/*
*   FFX Web Application
*
*   This project provides a GUI for persons to generate a JNLP dynamically based
*   on forms provided on various HTML pages.
*
*   Author: Ian Nessler
*   Year:   2014
*/

var WebApp = angular.module('WebApp', []).config(['$compileProvider', function ($compileProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|blob):/);
    }]);
;
/*
 * Controller that is used for the minimzation webpage and all angular variables
 * on that web page.
 * @param {type} param1
 * @param {type} param2
 */
WebApp.controller('EnergyController', ['$scope', '$window', function ($scope) {
        $scope.NumberPattern = /^[0-9]+$/;
        $scope.flag0 = false;
        $scope.flag1 = false;
        $scope.flag2 = false;
        $scope.flag3 = false;
        $scope.flag4 = false;
        $scope.flag5 = false;
        $scope.time = 0;
        $scope.finalnumber = true;
        $scope.confirmed = false;
        $scope.uriFlags = "";
        $scope.Number0 = "";
        $scope.Number1 = "";
        $scope.Number2 = "";
        $scope.Number3 = "";
        $scope.Number4 = "";
        $scope.Number5 = "";

        /*
         * Function to test browser compatibility with download attribute
         * @returns {undefined}
         */
        var DownloadCheck = function () {

            /*****************************************************************************
             * create temporary hyperlink element
             * @type @exp;document@call;createElement
             *****************************************************************************/
            var hyperlink = document.createElement('a');

            /*****************************************************************************
             *      if download property is undefined
             *      browser doesn't support the feature
             *****************************************************************************/
            if (hyperlink.download === undefined) {
                alert('Bummer... \nIt would appear your browser does not support download attributes.\n\nPlease switch to a compatible browser such as:\nGoogle Chrome\nOpera\nFirefox');
            }
        };

        /*****************************************************************************
         * Run DownloadCheck function to see if browser allows download attributes
         * @returns {undefined}
         *****************************************************************************/
        DownloadCheck();

        /*
         * Logic to estimate time based on number of atoms
         */
        $scope.$watch('finalnumber', function (finalnumber) {
            $scope.time = ((finalnumber * Math.log(finalnumber)) / 10).toFixed(0);
            $scope.minutes = $scope.time;
            $scope.hours = ($scope.minutes / 60).toFixed(0);
            $scope.minutes %= 60;
            $scope.days = ($scope.hours / 24).toFixed(0);
            $scope.hours %= 24;
            console.log($scope.days + " days, " + $scope.hours + " hours, " + $scope.minutes + " minutes");
            if ($scope.days == 1) {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hour, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day " + $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hour, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day";
                    }
                    else {
                        $scope.time = $scope.days + " day and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hours, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day " + $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hours, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            else if ($scope.days == 0) {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.hours + " hour and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.hours + " hour and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = false;
                    }
                    else {
                        $scope.time = $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.hours + " hours and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.hours + " hours and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            else {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hour, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days and " + $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hour, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days";
                    }
                    else {
                        $scope.time = $scope.days + " days and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hours, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days " + $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hours, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            ;
        });
        /*****************************************************************************
         * Function to collect flags input then download JNLP file and input file
         * @param {type} Number1
         * @param {type} Number2
         * @param {type} Number3
         * @param {type} Number4
         * @param {type} Number5
         * @returns {undefined}
         *****************************************************************************/
        $scope.CollectFlags = function (Number1, Number2, Number3, Number4, Number5) {
            /*****************************************************************************
             * Check for the various File API support. 
             *****************************************************************************/
            if (window.File && window.FileReader && window.FileList && window.Blob) {

                /*****************************************************************************
                 * Great success! All the File APIs are supported.
                 *****************************************************************************/
            } else {
                alert('The File APIs are not fully supported in this browser.');
                return;
            }

            /*****************************************************************************
             * Build JNLP as Textstring to download
             *****************************************************************************/
            var InitialTextString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE jnlp PUBLIC '-//Sun Microsystems, Inc//DTD JNLP Descriptor 6.0//EN' 'http://java.sun.com/dtd/JNLP-6.0.dtd'>\n<jnlp spec=\"6.0+\">\n    <information>\n        <title>Force Field X</title>\n        <vendor>Michael J. Schnieders</vendor>\n        <homepage href=\"http://ffx.biochem.uiowa.edu\"/>\n        <description>Software for Molecular Biophysics</description>\n        <icon href=\"images/icon128.png\"/>\n        <offline-allowed/>\n    </information>\n    <security>\n        <all-permissions/>\n    </security>\n    <update check=\"always\" policy=\"always\"/>\n    <resources>\n        <java version=\"1.8\" initial-heap-size=\"1G\" max-heap-size=\"1G\"/>\n        <property name=\"j3d.rend\" value=\"jogl\"/>\n        <extension name=\"ffx-all\" href=\"http://ffx.biochem.uiowa.edu/ffx-commons/ffx-all-1.0.0-beta.jnlp\" />\n        <extension name=\"ffx-dependency\" href=\"http://ffx.biochem.uiowa.edu/dependency-repo/ffx-dependency-1.0.0-beta.jnlp\" />\n        <extension name=\"jogl-all-awt\" href=\"http://jogamp.org/deployment/v2.3.1/jogl-all-awt.jnlp\" />\n    </resources>\n    <application-desc main-class=\"ffx.Main\">\n       <argument>";
            var FFX_Function = "minimize";
            var TextString = InitialTextString + FFX_Function;

            /*******************************************************************************
             *      Next 5 if statements check to see if user input has been provided
             *      in input box if so it assigns the appropriate flag and appends it to
             *      the JNLP file string called TextString. 
             *******************************************************************************/
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

            /*****************************************************************************
             * 
             *           Check if user inputed a file if not then deliver a warning to user
             *           and exit function.
             *           
             *****************************************************************************/
            if (document.getElementById("PDB_File").files.length !== 0) {
                var FileName = document.getElementById("PDB_File").files[0].name;
            }
            else {
                alert('You have not entered a file for analysis. Please select a file to continue.');
                return;
            }
            TextString = TextString + "Downloads/" + FileName + " </argument>\n    </application-desc>\n</jnlp>";

            /*****************************************************************************
             *            Textstring compile is completed create download element.
             *****************************************************************************/
            var data = new Blob([TextString], {type: 'text/plain'});
            saveAs(data, "ffx.jnlp");

            /*****************************************************************************           
             * The code below this block can be used if saveAs()
             * does not work in the future, I think the save as is a better 
             * implementation as of this moment
             *                      
             *            var a = window.document.createElement('a');
             *            a.download = 'ffx.jnlp';
             *            a.href = $scope.JNLP_Directory;
             *            a.href = window.URL.createObjectURL(data);
             *            document.body.appendChild(a);
             *            a.click();
             *            document.body.removeChild(a);
             *****************************************************************************/

            /***************************************************************************** 
             *               Start of dealing with input pdb file   
             *****************************************************************************/
            var fr = new FileReader();
            fr.onload = receivedText;
            fr.readAsText(document.getElementById("PDB_File").files[0]);

            /*****************************************************************************
             *      The following function reads the input file and then saves it in the
             *      users Downloads folder
             *****************************************************************************/
            function receivedText() {

                /*****************************************************************************
                 *  Set input file to a variable
                 * @returns {Element}
                 *****************************************************************************/
                var fileInputContents = fr.result;

                /*****************************************************************************
                 *  Create blob of input file contents
                 * @type @new;Blob
                 *****************************************************************************/
                var blobFileInput = new Blob([fileInputContents], {type: 'text/plain'});

                /*****************************************************************************
                 *       Get file input name and set that as the name for the pdb file download.
                 *       In future may want to make a random process to avoid duplicates.
                 * @type @exp;document@call;getElementById@arr;files@pro;name
                 *****************************************************************************/
                var FileName = document.getElementById("PDB_File").files[0].name;
                saveAs(blobFileInput, FileName);

                /*****************************************************************************
                 *The function below will take the user to FileDownloaded.html after completion. 
                 * @returns {Element}
                 *****************************************************************************/
                migrateHtml();
                /*****************************************************************************
                 *      The code below this block can be used if saveAs()
                 *      does not work in the future, I think the save as is a better 
                 *      implementation at this moment
                 *                 
                 * var a = window.document.createElement('a');                  
                 * a.download = FileName;
                 *                   a.href = window.URL.createObjectURL(document.getElementById("PDB_File").files[0]);
                 *                   document.body.appendChild(a);
                 *                    console.log("hello");
                 *                   a.click();
                 *                  document.body.removeChild(a);
                 /*****************************************************************************/
            }
        };
    }]);
//WebApp.service('fileUpload', ['$http', function ($http) {
//    this.uploadFileToUrl = function(file, uploadUrl){
//        var fd = new FormData();
//        fd.append('file', file);
//        $http.post(uploadUrl, fd, {
//            transformRequest: angular.identity,
//            headers: {'Content-Type': undefined}
//        })
//        .success(function(){
//        })
//        .error(function(){
//        });
//    };
//}]);
/*
 * Directive used to initiate function to read file and determine number of atoms and time consumption.
 * @param {type} param1
 * @param {type} param2
 */
WebApp.directive("fileread", [function () {
        return {
            scope: {
                fileread: "=",
                finalnumber: "="
            },
            link: function (scope, element, attrs) {
                element.bind("change", function (changeEvent) {
                    var reader = new FileReader();
                    reader.onload = function (loadEvent) {
                        scope.$apply(function () {
                            scope.fileread = true;
                            var textString = reader.result;
                            var arrayOfTextString = textString.split("\n");
                            scope.atomNumber = 0;
                            scope.atomNumber2 = 0;
                            var i = 0;
                            for (i = 0; i < arrayOfTextString.length; i++) {
                                var tempString = arrayOfTextString[i].slice(0, 6);
                                var tempString2 = arrayOfTextString[i].slice(0, 4);
                                var UpperCaseTempString = tempString.toUpperCase();
                                var UpperCaseTempString2 = tempString2.toUpperCase();
                                if (UpperCaseTempString === "HETATM") {
                                    scope.atomNumber += 1;
                                }
                                if (UpperCaseTempString2 === "ATOM") {
                                    scope.atomNumber2 += 1;
                                }
                            }
                            if (scope.atomNumber > scope.atomNumber2) {
                                scope.finalnumber = scope.atomNumber;
                            }
                            else if (scope.atomNumber < scope.atomNumber2) {
                                scope.finalnumber = scope.atomNumber2;
                            }
                            else {
                                scope.finalnumber = false;
                            }
                        });
                    };
                    reader.readAsText(changeEvent.target.files[0]);
                });
            }
        };
    }]);
/************************************************************************************
 *      The following code provides a way to go from the minimize html page to the fileDownloaded html page
 *      so that the end user will know how to run the file that was previously downloaded.
 * @type @exp;window@pro;document@call;createElement
 ************************************************************************************/
//var migrateHtml = function () {
//    var a = window.document.createElement('a');
//    a.href = "FileDownloaded.html";
//    document.body.appendChild(a);
//    a.click();
//    document.body.removeChild(a);
//};
/****************************************************************************************************************
 * 
 * Future FFX functions could be conducted using seperate controllers with similar code on the inside.
 * What would need to change is the the flags associated with each Number from the input and the FFX_Function
 * 
 ****************************************************************************************************************/

WebApp.controller('Molecular_Dynamics_Controller', ['$scope', '$window', function ($scope) {
        $scope.NumberPattern = /^[0-9]+$/;
        $scope.TextPattern = /^[a-zA-Z]+$/;
        $scope.PFlag = /^None+$/ || /^Direct+$/ || /^Mutual'+$/;
        $scope.flag0 = false;
        $scope.flag1 = false;
        $scope.flag2 = false;
        $scope.flag3 = false;
        $scope.flag4 = false;
        $scope.flag5 = false;
        $scope.flag6 = false;
        $scope.finalnumber = true;
        $scope.confirmed = false;
        $scope.uriFlags = "";
        $scope.Number0 = "";
        $scope.Number1 = "";
        $scope.Number2 = "";
        $scope.Number3 = "";
        $scope.Number4 = "";
        $scope.Number5 = "";
        $scope.Number6 = "";
        var CheckFlag = function (word1) {
            console.log(word1);
        };
        CheckFlag($scope.Number4);

        var DownloadCheck = function () {

            /*****************************************************************************
             * create temporary hyperlink element
             * @type @exp;document@call;createElement
             *****************************************************************************/
            var hyperlink = document.createElement('a');

            /*****************************************************************************
             *      if download property is undefined
             *      browser doesn't support the feature
             *****************************************************************************/
            if (hyperlink.download === undefined) {
                alert('Bummer... \nIt would appear your browser does not support download attributes.\n\nPlease switch to a compatible browser such as:\nGoogle Chrome\nOpera\nFirefox');
            }
        };

        /*****************************************************************************
         * Run DownloadCheck function to see if browser allows download attributes
         * @returns {undefined}
         *****************************************************************************/
        DownloadCheck();

        /*
         * Logic to estimate time based on number of atoms
         */
        $scope.$watch('finalnumber', function (finalnumber) {
            $scope.time = ((finalnumber * Math.log(finalnumber)) / 10).toFixed(0);
            $scope.minutes = $scope.time;
            $scope.hours = ($scope.minutes / 60).toFixed(0);
            $scope.minutes %= 60;
            $scope.days = ($scope.hours / 24).toFixed(0);
            $scope.hours %= 24;
            console.log($scope.days + " days, " + $scope.hours + " hours, " + $scope.minutes + " minutes");
            if ($scope.days == 1) {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hour, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day " + $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hour, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day";
                    }
                    else {
                        $scope.time = $scope.days + " day and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hours, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day " + $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hours, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            else if ($scope.days == 0) {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.hours + " hour and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.hours + " hour and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = false;
                    }
                    else {
                        $scope.time = $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.hours + " hours and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.hours + " hours and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            else {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hour, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days and " + $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hour, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days";
                    }
                    else {
                        $scope.time = $scope.days + " days and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hours, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days " + $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hours, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            ;
        });


        /*****************************************************************************
         * Function to collect flags input then download JNLP file and input file
         * @param {type} Number1
         * @param {type} Number2
         * @param {type} Number3
         * @param {type} Number4
         * @param {type} Number5
         * @returns {undefined}
         *****************************************************************************/
        $scope.CollectFlags = function (Number1, Number2, Number3, Number4, Number5, Number6) {

            /*****************************************************************************
             * Check for the various File API support. 
             *****************************************************************************/
            if (window.File && window.FileReader && window.FileList && window.Blob) {

                /*****************************************************************************
                 * Great success! All the File APIs are supported.
                 *****************************************************************************/
            } else {
                alert('The File APIs are not fully supported in this browser.');
                return;
            }

            /*****************************************************************************
             * Build JNLP as Textstring to download
             *****************************************************************************/
            var InitialTextString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE jnlp PUBLIC '-//Sun Microsystems, Inc//DTD JNLP Descriptor 6.0//EN' 'http://java.sun.com/dtd/JNLP-6.0.dtd'>\n<jnlp spec=\"6.0+\">\n    <information>\n        <title>Force Field X</title>\n        <vendor>Michael J. Schnieders</vendor>\n        <homepage href=\"http://ffx.biochem.uiowa.edu\"/>\n        <description>Software for Molecular Biophysics</description>\n        <icon href=\"images/icon128.png\"/>\n        <offline-allowed/>\n    </information>\n    <security>\n        <all-permissions/>\n    </security>\n    <update check=\"always\" policy=\"always\"/>\n    <resources>\n        <java version=\"1.8\" initial-heap-size=\"1G\" max-heap-size=\"1G\"/>\n        <property name=\"j3d.rend\" value=\"jogl\"/>\n        <extension name=\"ffx-all\" href=\"http://ffx.biochem.uiowa.edu/ffx-commons/ffx-all-1.0.0-beta.jnlp\" />\n        <extension name=\"ffx-dependency\" href=\"http://ffx.biochem.uiowa.edu/dependency-repo/ffx-dependency-1.0.0-beta.jnlp\" />\n        <extension name=\"jogl-all-awt\" href=\"http://jogamp.org/deployment/v2.3.1/jogl-all-awt.jnlp\" />\n    </resources>\n    <application-desc main-class=\"ffx.Main\">\n       <argument>";
            var FFX_Function = "md";
            var TextString = InitialTextString + FFX_Function;

            /*******************************************************************************
             *      Next 5 if statements check to see if user input has been provided
             *      in input box if so it assigns the appropriate flag and appends it to
             *      the JNLP file string called TextString. 
             *******************************************************************************/
            if (Number1 !== undefined) {
                var TextString = TextString + ' ' + '-n ' + Number1;
            }
            ;
            if (Number2 !== undefined) {
                TextString = TextString + ' ' + '-d ' + Number2;
            }
            ;
            if (Number3 !== undefined) {
                TextString = TextString + ' ' + '-t ' + Number3;
            }
            ;
            if (Number4 !== "") {
                TextString = TextString + ' ' + '-p ' + Number4;
            }
            ;
            if (Number5 !== undefined) {
                TextString = TextString + ' ' + '-l ' + Number5;
            }
            ;
            if (Number6 !== undefined) {
                TextString = TextString + ' ' + '-w ' + Number6;
            }
            ;

            TextString = TextString + " </argument>\n       <argument> ";

            /*****************************************************************************
             * 
             *           Check if user inputed a file if not then deliver a warning to user
             *           and exit function.
             *           
             *****************************************************************************/
            if (document.getElementById("PDB_File").files.length !== 0) {
                var FileName = document.getElementById("PDB_File").files[0].name;
            }
            else {
                alert('You have not entered a file for analysis. Please select a file to continue.');
                return;
            }
            TextString = TextString + "Downloads/" + FileName + " </argument>\n    </application-desc>\n</jnlp>";
            $scope.textString = TextString;

            /*****************************************************************************
             *            Textstring compile is completed create download element.
             *****************************************************************************/
            var dataBlob = new Blob([TextString], {type: 'text/plain'});
            $scope.JnlpBlob = dataBlob;
            var reader = new window.FileReader();
            reader.readAsDataURL(dataBlob);
            reader.onloadend = function () {
                $scope.base64data = reader.result;
                console.log($scope.base64data);
            };
            saveAs(dataBlob, "ffx.jnlp");

            /*****************************************************************************           
             * The code below this block can be used if saveAs()
             * does not work in the future, I think the save as is a better 
             * implementation as of this moment
             *                      
             *            var a = window.document.createElement('a');
             *            a.download = 'ffx.jnlp';
             *            a.href = $scope.JNLP_Directory;
             *            a.href = window.URL.createObjectURL(data);
             *            document.body.appendChild(a);
             *            a.click();
             *            document.body.removeChild(a);
             *****************************************************************************/

            /***************************************************************************** 
             *               Start of dealing with input pdb file   
             *****************************************************************************/
            var fr = new FileReader();
            fr.onload = receivedText;
            fr.readAsText(document.getElementById("PDB_File").files[0]);

            /*****************************************************************************
             *      The following function reads the input file and then saves it in the
             *      users Downloads folder
             *****************************************************************************/
            function receivedText() {

                /*****************************************************************************
                 *  Set input file to a variable
                 * @returns {Element}
                 *****************************************************************************/
                var fileInputContents = fr.result;

                /*****************************************************************************
                 *  Create blob of input file contents
                 * @type @new;Blob
                 *****************************************************************************/
                var blobFileInput = new Blob([fileInputContents], {type: 'text/plain'});

                /*****************************************************************************
                 *       Get file input name and set that as the name for the pdb file download.
                 *       In future may want to make a random process to avoid duplicates.
                 * @type @exp;document@call;getElementById@arr;files@pro;name
                 *****************************************************************************/
                var FileName = document.getElementById("PDB_File").files[0].name;
                saveAs(blobFileInput, FileName);

                /*****************************************************************************
                 *The function below will take the user to FileDownloaded.html after completion. 
                 * @returns {Element}
                 *****************************************************************************/
//                migrateHtml();

                /*****************************************************************************
                 *      The code below this block can be used if saveAs()
                 *      does not work in the future, I think the save as is a better 
                 *      implementation at this moment
                 *                 
                 *                 a.download = FileName;
                 *                 a.href = window.URL.createObjectURL(fileInputContents);
                 *                 document.body.appendChild(a);
                 *                 a.click();
                 *                 document.body.removeChild(a);
                 *****************************************************************************/

            }

        };
        $scope.GenerateEmbeddedJNLP = function (text) {
            console.log(text);
            var attributes = {};
            var parameters = {
                jnlp_embedded: text
            };
            deployJava.runApplet(attributes, parameters, '1.8');

        };
    }]);

WebApp.controller('Rotamer_Controller', ['$scope', '$window', function ($scope) {
        $scope.NumberPattern = /^[0-9]+$/;
        $scope.TextPattern = /^[a-zA-Z]+$/;
        $scope.PFlag = /^None+$/ || /^Direct+$/ || /^Mutual'+$/;
        $scope.flag0 = false;
        $scope.flag0a = false;
        $scope.flag0b0 = false;
        $scope.flag0b1 = false;
        $scope.flag1 = false;
        $scope.flag2 = false;
        $scope.flag3 = false;
        $scope.flag4 = false;
        $scope.flag5 = false;
        $scope.flag6 = false;
        $scope.flag7 = false;
        $scope.finalnumber = true;
        $scope.confirmed = false;
        $scope.uriFlags = "";
        $scope.Number0 = "";
        $scope.Number0a = "";
        $scope.Number0b = "";
        $scope.Number0b0 = "";
        $scope.Number0b1 = "";
        $scope.Number1 = "";
        $scope.Number2 = "";
        $scope.Number3 = "";
        $scope.Number4 = "";
        $scope.Number5 = "";
        $scope.Number6 = "";
        $scope.Number7 = "";
        var CheckFlag = function (word1) {
            console.log(word1);
        };

        var DownloadCheck = function () {

            /*****************************************************************************
             * create temporary hyperlink element
             * @type @exp;document@call;createElement
             *****************************************************************************/
            var hyperlink = document.createElement('a');

            /*****************************************************************************
             *      if download property is undefined
             *      browser doesn't support the feature
             *****************************************************************************/
            if (hyperlink.download === undefined) {
                alert('Bummer... \nIt would appear your browser does not support download attributes.\n\nPlease switch to a compatible browser such as:\nGoogle Chrome\nOpera\nFirefox');
            }
        };

        /*****************************************************************************
         * Run DownloadCheck function to see if browser allows download attributes
         * @returns {undefined}
         *****************************************************************************/
        DownloadCheck();

        /*
         * Logic to estimate time based on number of atoms
         */
        $scope.$watch('finalnumber', function (finalnumber) {
            $scope.time = ((finalnumber * Math.log(finalnumber)) / 10).toFixed(0);
            $scope.minutes = $scope.time;
            $scope.hours = ($scope.minutes / 60).toFixed(0);
            $scope.minutes %= 60;
            $scope.days = ($scope.hours / 24).toFixed(0);
            $scope.hours %= 24;
            console.log($scope.days + " days, " + $scope.hours + " hours, " + $scope.minutes + " minutes");
            if ($scope.days == 1) {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hour, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day " + $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hour, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day";
                    }
                    else {
                        $scope.time = $scope.days + " day and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hours, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " day " + $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.days + " day, " + $scope.hours + " hours, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            else if ($scope.days == 0) {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.hours + " hour and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.hours + " hour and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = false;
                    }
                    else {
                        $scope.time = $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.hours + " hours and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.hours + " hours and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            else {
                if ($scope.hours === 1) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hour, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days and " + $scope.hours + " hour";
                    }
                    else {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hour, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else if ($scope.hours == 0) {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days";
                    }
                    else {
                        $scope.time = $scope.days + " days and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                else {
                    if ($scope.minutes === 1) {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hours, and " + $scope.minutes + " minute";
                    }
                    else if ($scope.minutes == 0) {
                        $scope.time = $scope.days + " days " + $scope.hours + " hours";
                    }
                    else {
                        $scope.time = $scope.days + " days, " + $scope.hours + " hours, and " + $scope.minutes + " minutes";
                    }
                    ;
                }
                ;
            }
            ;
        });


        /*****************************************************************************
         * Function to collect flags input then download JNLP file and input file
         * @param {type} Number1
         * @param {type} Number2
         * @param {type} Number3
         * @param {type} Number4
         * @param {type} Number5
         * @returns {undefined}
         *****************************************************************************/
        $scope.CollectFlags = function (Number1, Number2, Number3, Number4, Number5, Number6, Number7, Number8, Number9, Number10, Number11) {

            /*****************************************************************************
             * Check for the various File API support. 
             *****************************************************************************/
            if (window.File && window.FileReader && window.FileList && window.Blob) {

                /*****************************************************************************
                 * Great success! All the File APIs are supported.
                 *****************************************************************************/
            } else {
                alert('The File APIs are not fully supported in this browser.');
                return;
            }

            /*****************************************************************************
             * Build JNLP as Textstring to download
             *****************************************************************************/
            var InitialTextString = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE jnlp PUBLIC '-//Sun Microsystems, Inc//DTD JNLP Descriptor 6.0//EN' 'http://java.sun.com/dtd/JNLP-6.0.dtd'>\n<jnlp spec=\"6.0+\">\n    <information>\n        <title>Force Field X</title>\n        <vendor>Michael J. Schnieders</vendor>\n        <homepage href=\"http://ffx.biochem.uiowa.edu\"/>\n        <description>Software for Molecular Biophysics</description>\n        <icon href=\"images/icon128.png\"/>\n        <offline-allowed/>\n    </information>\n    <security>\n        <all-permissions/>\n    </security>\n    <update check=\"always\" policy=\"always\"/>\n    <resources>\n        <java version=\"1.8\" initial-heap-size=\"1G\" max-heap-size=\"1G\"/>\n        <property name=\"j3d.rend\" value=\"jogl\"/>\n        <extension name=\"ffx-all\" href=\"http://ffx.biochem.uiowa.edu/ffx-commons/ffx-all-1.0.0-beta.jnlp\" />\n        <extension name=\"ffx-dependency\" href=\"http://ffx.biochem.uiowa.edu/dependency-repo/ffx-dependency-1.0.0-beta.jnlp\" />\n        <extension name=\"jogl-all-awt\" href=\"http://jogamp.org/deployment/v2.3.1/jogl-all-awt.jnlp\" />\n    </resources>\n    <application-desc main-class=\"ffx.Main\">\n       <argument>";
            var FFX_Function = "rotamer";
            var TextString = InitialTextString + FFX_Function;

            /*******************************************************************************
             *      Next 5 if statements check to see if user input has been provided
             *      in input box if so it assigns the appropriate flag and appends it to
             *      the JNLP file string called TextString. 
             *******************************************************************************/
            if (Number1 !== "" && Number1 !== undefined) {
                var TextString = TextString + ' ' + '-a ' + Number1;
            }
            ;
            if (Number2 !== "" && Number2 !== undefined) {
                TextString = TextString + ' ' + '-w ' + Number2;
            }
            ;
            if (Number3 !== "" && Number3 !== undefined) {
                TextString = TextString + ' ' + '-bB ' + Number3;
            }
            else {
                TextString = TextString + ' ' + '-bB ' + 1.5;
            }
            ;
            if (Number4 !== "" && Number4 !== undefined) {
                TextString = TextString + ' ' + '-bL ' + Number4;
            }
            else {
                TextString = TextString + ' ' + '-bL ' + 5.0;
            }
            ;
            if (Number5 !== "" && Number5 !== undefined) {
                TextString = TextString + ' ' + '-o ' + Number5;
            }
            ;
            if (Number6 !== "" && Number6 !== undefined) {
                TextString = TextString + ' ' + '-t ' + Number6;
            }
            ;
            if (Number7 !== "" && Number7 !== undefined) {
                TextString = TextString + ' ' + '-x ' + Number7;
            }
            ;
            if (Number8 !== "" && Number8 !== undefined) {
                TextString = TextString + ' ' + '-s ' + Number8;
            }
            ;
            if (Number9 !== "" && Number9 !== undefined) {
                TextString = TextString + ' ' + '-f ' + Number8;
            }
            ;
            if (Number10 !== "" && Number10 !== undefined) {
                TextString = TextString + ' ' + '-lR ' + Number8;
            }
            ;
            if (Number11 !== "" && Number11 !== undefined) {
                TextString = TextString + ' ' + '-r ' + Number11;
            }
            ;

            TextString = TextString + " </argument>\n       <argument> ";

            /*****************************************************************************
             * 
             *           Check if user inputed a file if not then deliver a warning to user
             *           and exit function.
             *           
             *****************************************************************************/
            if (document.getElementById("PDB_File").files.length !== 0) {
                var FileName = document.getElementById("PDB_File").files[0].name;
            }
            else {
                alert('You have not entered a file for analysis. Please select a file to continue.');
                return;
            }
            TextString = TextString + "Downloads/" + FileName + " </argument>\n    </application-desc>\n</jnlp>";
            $scope.textString = TextString;

            /*****************************************************************************
             *            Textstring compile is completed create download element.
             *****************************************************************************/
            var dataBlob = new Blob([TextString], {type: 'text/plain'});
            $scope.JnlpBlob = dataBlob;
            var reader = new window.FileReader();
            reader.readAsDataURL(dataBlob);
            reader.onloadend = function () {
                $scope.base64data = reader.result;
                console.log($scope.base64data);
            };
            saveAs(dataBlob, "ffx.jnlp");

            /*****************************************************************************           
             * The code below this block can be used if saveAs()
             * does not work in the future, I think the save as is a better 
             * implementation as of this moment
             *                      
             *            var a = window.document.createElement('a');
             *            a.download = 'ffx.jnlp';
             *            a.href = $scope.JNLP_Directory;
             *            a.href = window.URL.createObjectURL(data);
             *            document.body.appendChild(a);
             *            a.click();
             *            document.body.removeChild(a);
             *****************************************************************************/

            /***************************************************************************** 
             *               Start of dealing with input pdb file   
             *****************************************************************************/
            var fr = new FileReader();
            fr.onload = receivedText;
            fr.readAsText(document.getElementById("PDB_File").files[0]);

            /*****************************************************************************
             *      The following function reads the input file and then saves it in the
             *      users Downloads folder
             *****************************************************************************/
            function receivedText() {

                /*****************************************************************************
                 *  Set input file to a variable
                 * @returns {Element}
                 *****************************************************************************/
                var fileInputContents = fr.result;

                /*****************************************************************************
                 *  Create blob of input file contents
                 * @type @new;Blob
                 *****************************************************************************/
                var blobFileInput = new Blob([fileInputContents], {type: 'text/plain'});

                /*****************************************************************************
                 *       Get file input name and set that as the name for the pdb file download.
                 *       In future may want to make a random process to avoid duplicates.
                 * @type @exp;document@call;getElementById@arr;files@pro;name
                 *****************************************************************************/
                var FileName = document.getElementById("PDB_File").files[0].name;
                saveAs(blobFileInput, FileName);

                /*****************************************************************************
                 *The function below will take the user to FileDownloaded.html after completion. 
                 * @returns {Element}
                 *****************************************************************************/
//                migrateHtml();

                /*****************************************************************************
                 *      The code below this block can be used if saveAs()
                 *      does not work in the future, I think the save as is a better 
                 *      implementation at this moment
                 *                 
                 *                 a.download = FileName;
                 *                 a.href = window.URL.createObjectURL(fileInputContents);
                 *                 document.body.appendChild(a);
                 *                 a.click();
                 *                 document.body.removeChild(a);
                 *****************************************************************************/
            }
        };
    }]);


/************************************************************************************
 *      The following code provides a way to go from the minimize html page to the fileDownloaded html page
 *      So that the end user will know how to run the file that was previously downloaded.
 * @type @exp;window@pro;document@call;createElement
 ************************************************************************************/
var migrateHtml = function () {
    var a = window.document.createElement('a');
    a.href = "Applet.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
};
