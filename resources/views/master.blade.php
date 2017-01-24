<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/app.css">

    <title>Lumen VueJs BoilerPlate</title>
  </head>
  <body>
    <div id="app">
      <nav-bar></nav-bar>
      <div class="container">
        <section class="section">
          <router-view></router-view>
        </section>
      </div>
    </div>
    <script src="/js/app.js"></script>
  </body>
</html>
