<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css2/bootstrap.min.css">
        <link rel="stylesheet" href="css2/bootstrap-theme.min.css">
        <link rel="stylesheet" href="css2/main.css">
        <script src="js2/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
        <script src="js2/libs/angular.js/angular.js"></script>
        <title>Contact</title>
        <style>
            body {
                color:#3a3a3a;
                background-color: white;
                text-align: center;
            }
            .body {
                text-align: center;
            }
            form {
                width: 462px;
                margin-left: auto;
                margin-right: auto;
                text-align: left;
            }

            label {
                display:block;
                margin-top:20px;
                letter-spacing:2px;

            }

            input, textarea {
                width:439px;
                height:27px;
                background:#efefef;
                border-radius:5px;
                -moz-border-radius:5px;
                -webkit-border-radius:5px;
                border:1px solid #dedede;
                padding:10px;
                margin-top:3px;
                /*	font-size:0.9em;*/
                color:#3a3a3a;
            }

            input:focus, textarea:focus {
                border:1px solid #97d6eb;
            }

            textarea {
                height:213px;
                background:url(images/textarea-bg.jpg) right no-repeat #efefef;
            }

            #submit {
                width:127px;
                height:38px;
                border:none;
                margin-top:20px;
                cursor:pointer;
            }

            #submit:hover {
                opacity:0.9;
            }
        </style>
    </head>
    <body ng-app="WebApp">
        <div  id="menubar" class="navbar  navbar-inverse navbar-fixed-top" role="navigation">
            <div class="container-fluid" >
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle " data-toggle="collapse" data-target=".navbar-collapse">
                        <span class="sr-only"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand " href="index-JNLP.html">FFX Web Application</a>
                </div>
                <div class="navbar-collapse collapse navbar-right">
                    <ul class="nav navbar-nav">
                        <li>
                            <a class="navbar-brand" href="index-JNLP.html" role="button">
                                <font>Home</font>
                            </a>
                        </li>
                        <li>
                            <a class="navbar-brand" href="LearnMore.html" role="button" style="color:yellow">
                                About
                            </a>
                        </li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle navbar-brand" data-toggle="dropdown" role="button">Functions<span class="caret"></span></a>
                            <ul class="dropdown-menu" id="Dropdown" role="menu">
                                <li class="divider" style="margin-top: -5px"></li>
                                <li><a href="Minimize.html" style="padding-top: -5px;">Minimize</a></li>
                                <li class="divider" ></li>
                                <li><a href="#Molecular_Dynamics.html">Molecular Dynamics</a></li>
                                <li class="divider"></li>
                                <li><a href="Rotamer.html">Rotamer Optimization</a></li>
                                <li class="divider"></li>
                                <li><a href="Xray.html">X-Ray.Minimize</a></li>
                                <li><a href="RealSpace.html">Real Space</a></li>
                                <li class="divider"></li>
                            </ul>
                        </li>
                        <li>
                            <a id="link" class="navbar-brand" href="Contact.php" role="button">
                                <font style="color:yellow">Contact</font>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>  
        <hr style="margin-top: 50px;">
        <div class="alert alert-success">Thank You! We will be in touch</div>
    </body>
</html>
<?php
    if ($_POST["submit"]) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $human = intval($_POST['human']);
        $from = 'FFX WebSRG';
        $to = 'iannessler@gmail.com';
        $subject = 'Message from FFX WebSRG ';
        
        $body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
        // Check if name has been entered
        if (!$_POST['name']) {
            $errName = 'Please enter your name';
        }
        
        // Check if email has been entered and is valid
        if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
            $errEmail = 'Please enter a valid email address';
        }
        
        //Check if message has been entered
        if (!$_POST['message']) {
            $errMessage = 'Please enter your message';
        }
        //Check if simple anti-bot test is correct
        if ($human !== 5) {
            $errHuman = 'Your anti-spam is incorrect';
        }
 
// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
    if (mail ($to, $subject, $body, $from)) {
        $result='<div class="alert alert-success">Thank You! I will be in touch</div>';
    } else {
        $result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
    }
}
    }
?>