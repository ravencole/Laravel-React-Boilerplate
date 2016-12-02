<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Include cs/app.css if JS_ENV is not set to dev -->
        @include('partials.styles')
    </head>
    <body>
    
        <!-- Root element of react application -->
        <div id="App" class="container"></div>

        <!-- 
            Include webpack-dev-server when in dev,
            asset('js/bundle.js') otherwise 
        -->
        @include('partials.scripts')
    </body>
</html>