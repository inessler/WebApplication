<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
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
                                <li class="divider"></li>
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
<h3 style="text-align: center">Fill out the form below and we will be in touch with you as soon
            as possible:</h3>
        <div class='row'>
        <div class="container-fluid body">
            <form class="form-horizontal" role="form" method="post" action="index.php">
    <div class="form-group">
        <label for="name" class="col-sm-2 control-label">Name</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
            <?php echo "<p class='text-danger'>$errName</p>";?>
        </div>
    </div>
    <div class="form-group">
        <label for="email" class="col-sm-2 control-label">Email</label>
        <div class="col-sm-10">
            <input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
            <?php echo "<p class='text-danger'>$errEmail</p>";?>
        </div>
    </div>
    <div class="form-group">
        <label for="message" class="col-sm-2 control-label">Message</label>
        <div class="col-sm-10">
            <textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
            <?php echo "<p class='text-danger'>$errMessage</p>";?>
        </div>
    </div>
    <div class="form-group">
        <label for="human" class="col-sm-2 control-label">2+3=?</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
            <?php echo "<p class='text-danger'>$errHuman</p>";?>
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
        </div>
    </div>
    <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <?php echo $result; ?>    
        </div>
    </div>
</form>
            </div>
        </div>
</html>
