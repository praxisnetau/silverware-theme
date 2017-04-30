<% with $SiteConfig %>
  <% if $AppIconTouch.Exists %>
    <link rel="apple-touch-icon" sizes="57x57" href="$getAppIconTouchResized(57,57).URL">
    <link rel="apple-touch-icon" sizes="60x60" href="$getAppIconTouchResized(60,60).URL">
    <link rel="apple-touch-icon" sizes="72x72" href="$getAppIconTouchResized(72,72).URL">
    <link rel="apple-touch-icon" sizes="76x76" href="$getAppIconTouchResized(76,76).URL">
    <link rel="apple-touch-icon" sizes="114x114" href="$getAppIconTouchResized(114,114).URL">
    <link rel="apple-touch-icon" sizes="120x120" href="$getAppIconTouchResized(120,120).URL">
    <link rel="apple-touch-icon" sizes="144x144" href="$getAppIconTouchResized(144,144).URL">
    <link rel="apple-touch-icon" sizes="152x152" href="$getAppIconTouchResized(152,152).URL">
    <link rel="apple-touch-icon" sizes="167x167" href="$getAppIconTouchResized(167,167).URL">
    <link rel="apple-touch-icon" sizes="180x180" href="$getAppIconTouchResized(180,180).URL">
    <link rel="icon" type="$AppIconTouchType" href="$getAppIconTouchResized(32,32).URL" sizes="32x32">
    <link rel="icon" type="$AppIconTouchType" href="$getAppIconTouchResized(96,96).URL" sizes="96x96">
    <link rel="icon" type="$AppIconTouchType" href="$getAppIconTouchResized(192,192).URL" sizes="192x192">
    <link rel="icon" type="$AppIconTouchType" href="$getAppIconTouchResized(194,194).URL" sizes="194x194">
    <link rel="icon" type="$AppIconTouchType" href="$getAppIconTouchResized(196,196).URL" sizes="196x196">
    <link rel="icon" type="$AppIconTouchType" href="$getAppIconTouchResized(228,228).URL" sizes="228x228">
    <meta name="msapplication-TileImage" content="$getAppIconTouchResized(144,144).URL">
  <% end_if %>
  <link rel="icon" type="$FavIconType" href="$FavIconURL" sizes="16x16">
<% end_with %>
