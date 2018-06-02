<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>E-Paris</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
        <link href="{{asset('css/style.css')}}" rel="stylesheet" type="text/css">

        <meta charset="utf-8">
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8LChWCHB6RCuxn7kqKrx0GhFTGxXgBd8"></script>
        <!-- Warming Up -->
        <link href='http://fonts.googleapis.com/css?family=Buenard:700' rel='stylesheet' type='text/css'>
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <!-- Google Font -->
        <link rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    </head>
    <body >
            <div class="conatiner">
                <div id="root"></div>
            </div>
                <script src="{{asset('js/scripts.js')}}"></script>
                <script src="{{asset('js/bundle.js')}}" ></script>

                <!-- REQUIRED JS SCRIPTS -->

                <!-- Optionally, you can add Slimscroll and FastClick plugins.
                     Both of these plugins are recommended to enhance the
                     user experience. -->
    </body>
</html>
