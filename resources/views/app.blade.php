<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel</title>
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
</head>

<body>
    <style>
        body {
            min-height: 100vh;
            min-width: 100vw;
        }

        .full-page {
            align-items: center;
            display: flex;
            flex-direction: column;
            height: 100vh;
            justify-content: center;
        }
    </style>
    <div id="app"></div>
    @vite
</body>

</html>