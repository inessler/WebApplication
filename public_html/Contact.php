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
    <?php
	if ($_POST["submit"]) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = 'Demo Contact Form'; 
		$to = 'example@domain.com'; 
		$subject = 'Message from Contact Demo ';
		
		$body ="From: $name\n E-Mail: $email\n Message:\n $message";
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
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later.</div>';
	}
}
	}
?>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Bootstrap contact form with PHP example by BootstrapBay.com.">
    <meta name="author" content="BootstrapBay.com">
    <title>Contact Us</title>
  </head>
  <body>
      <div class="wrapper">
            
            <!--  Id menubar as shown in Main.css provides coloring  -->
            <div  id="menubar" class="navbar  navbar-inverse navbar-fixed-top" role="navigation">
            
                <!--  Allows the navbar to fit any width of page  -->
                <div class="container-fluid">
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle " data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="sr-only"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="index-JNLP.html">FFX Web Application</a>
                    </div>
                    <div class="navbar-collapse collapse navbar-right">
                        <ul class="nav navbar-nav">
                            <li>
                                <a class="navbar-brand" href="index-JNLP.html" role="button">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a class="navbar-brand" href="LearnMore.html" role="button">
                                    About
                                </a>
                            </li>
                            <!--  This is the dropdown featured in the navbar. More information on the class "dropdown" can be found in Main.css  -->
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle navbar-brand" data-toggle="dropdown" role="button">Functions<span class="caret"></span></a>
                                <ul class="dropdown-menu" id="Dropdown" role="menu">
                                    <li class="divider" style="margin-top: -5px"></li>
                                    <li><a href="Minimize.html" style="padding-top: -5px">Minimize</a></li>
                                    <li class="divider" ></li>
                                    <li><a href="Molecular_Dynamics.html">Molecular Dynamics</a></li>
                                    <li class="divider"></li>
                                    <li><a href="Rotamer.html">Rotamer Optimization</a></li>
                                    <li class="divider"></li>
                                    <li><a href="Xray.html">X-Ray</a></li>
                                    <li class="divider"></li>
                                    <li><a href="RealSpace.html">Real Space</a></li>
                                <li class="divider"></li>
                                </ul>
                            </li>
                            <li>
                                <a id="link" class="navbar-brand" href="Contact.php" role="button">
                                    <font style="color:yellow;">Contact</font>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr id="firstLine">
  	<div class="container">
  		<div class="row">
  			<div class="col-md-6 col-md-offset-3">
  				<h1 class="page-header text-center">Contact Form Example</h1>
				<form class="form-horizontal" role="form" method="post" action="Contact.php">
					<div class="form-group">
						<label for="name" class="col-sm-3 control-label">Name</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" id="name" name="name" placeholder="First & Last Name" value="<?php echo htmlspecialchars($_POST['name']); ?>">
							<?php echo "<p class='text-danger'>$errName</p>";?>
						</div>
					</div>
					<div class="form-group">
						<label for="email" class="col-sm-3 control-label">Email</label>
						<div class="col-sm-9">
							<input type="email" class="form-control" id="email" name="email" placeholder="example@domain.com" value="<?php echo htmlspecialchars($_POST['email']); ?>">
							<?php echo "<p class='text-danger'>$errEmail</p>";?>
						</div>
					</div>
					<div class="form-group">
						<label for="message" class="col-sm-3 control-label">Message</label>
						<div class="col-sm-9">
							<textarea class="form-control" rows="4" name="message"><?php echo htmlspecialchars($_POST['message']);?></textarea>
							<?php echo "<p class='text-danger'>$errMessage</p>";?>
						</div>
					</div>
					<div class="form-group">
						<label for="human" class="col-sm-3 control-label">2 + 3 = ?</label>
						<div class="col-sm-9">
							<input type="text" class="form-control" id="human" name="human" placeholder="Your Answer">
							<?php echo "<p class='text-danger'>$errHuman</p>";?>
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-9 col-sm-offset-2">
							<input id="submit" name="submit" type="submit" value="Send" class="btn btn-primary">
						</div>
					</div>
					<div class="form-group">
						<div class="col-sm-9 col-sm-offset-2">
							<?php echo $result; ?>	
						</div>
					</div>
				</form> 
			</div>
		</div>
	</div>   
    <div class="push" ></div>
        </div>
        <!--  This div contains the footer which is attached to the bottom  -->
        <div class="push" >
            <hr style="border-width: 2px;  bottom: 0px;">
            <div class='row container-fluid' style="background-color:#1b1b1b; margin-bottom: auto">
            <div class="col-md-4" style="margin-top: 40px; background-color:#1b1b1b;">
                <font style="color:white;">
                    &copy; University of Iowa Biochemistry Department 2014
                </font>
            </div>
                <div class='col-md-6'></div>
            <div class="col-md-2" style="margin-right:-100px; background-color:#1b1b1b;">
                <img src="img2/Logo2.png" alt="Smiley face" height="100" width="100" style="background-color: ">
            </div>
            </div>
        </div>    
        <script>window.jQuery || document.write('<script src="js2/vendor/jquery-1.11.1.min.js"><\/script>');</script>
        <script src="js2/vendor/bootstrap.min.js"></script>
        <script src="js2/main.js"></script>
    </body>
</html>