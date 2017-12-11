<div id="$ID" class="form-control-plaintext<% if $extraClass %> $extraClass<% end_if %>">
  $Value
</div>
<% if $IncludeHiddenField %><input id="hidden-{$ID}" type="hidden" $getAttributesHTML('id', 'type') /><% end_if %>