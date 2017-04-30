<!DOCTYPE html>

<html class="no-js" lang="$ContentLocale">
  <head{$OGPrefix}>
    <% base_tag %>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    $MetaTags(false)<title>$Title &ndash; $SiteConfig.Title</title>
    <% include App\Icons %>
  </head>
  <body<% if $BodyAttributesHTML %> $BodyAttributesHTML<% end_if %>>
    <% if $PageTemplate %>
      <% with $PageTemplate %>
        $render($Up.Layout, $Up.Title)
      <% end_with %>
    <% else %>
      <% include Error\NotFound Type=Template, Layout=$Layout %>
    <% end_if %>
  </body>
</html>
