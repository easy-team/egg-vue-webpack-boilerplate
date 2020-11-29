<!DOCTYPE html>
<html lang='en'>
<head>
  <title>{{title}}</title>
  <meta name='keywords'>
  <meta name='description'>
  <meta http-equiv='content-type' content='text/html;charset=utf-8'>
  <meta name='viewport' content='initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui'>
  <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
</head>
<body>
  <div id="app"></div>
  <script type="text/javascript">
    window.__INITIAL_STATE__ = {{ state | dump | safe }};
  </script>
<script type="text/javascript" src="/public/js/runtime.js"></script><script type="text/javascript" src="/public/js/chunk/common.js"></script><script type="text/javascript" src="/public/js/chunk/html/spa.js"></script></body>
</html>