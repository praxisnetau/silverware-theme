<div $AttributesHTML>
  <% if $Options %>
    <% loop $Options %>
      <div class="form-check<% if $Class %> $Class<% end_if %>">
        <input class="form-check-input radio" id="$ID" name="$Name" type="radio" value="$Value.ATT"<% if $isChecked %> checked="checked"<% end_if %><% if $isDisabled %> disabled="disabled"<% end_if %> />
        <label class="form-check-label" for="$ID">$Title</label>
      </div>
    <% end_loop %>
  <% else %>
    <div class="form-text text-muted"><%t OptionsetField_ss.NOOPTIONSAVAILABLE 'No options available.' %></div>
  <% end_if %>
</div>
