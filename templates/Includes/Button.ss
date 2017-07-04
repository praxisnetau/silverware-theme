<% if $Tag == 'a' %>
  <a href="$HREF" class="btn btn-<% if $Type %>$Type<% else %>primary<% end_if %><% if $ExtraClass %> $ExtraClass<% end_if %>"><% if $Icon %><% include Icon Name=$Icon %><% end_if %>$Text</a>
<% else %>
  <button class="btn btn-<% if $Type %>$Type<% else %>primary<% end_if %><% if $ExtraClass %> $ExtraClass<% end_if %>"><% if $Icon %><% include Icon Name=$Icon %><% end_if %>$Text</button>
<% end_if %>
