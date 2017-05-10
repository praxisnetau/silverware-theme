<% if $Message %>
  <div id="{$FormName}_error" class="message $MessageType<% if $AlertMessageType %> $AlertMessageType<% end_if %>">
    $Message
  </div>
<% else %>
  <div id="{$FormName}_error" class="message $MessageType<% if $AlertMessageType %> $AlertMessageType<% end_if %>" style="display: none"></div>
<% end_if %>
