<div class="alert alert-<% if $Type %>$Type<% else %>warning<% end_if %>" role="alert">
  <i class="fa fa-fw fa-<% if $Icon %>$Icon<% else %>warning<% end_if %>"></i>
  <span class="text">{$Text}</span>
</div>
