<div class="container error error-not-found">
  <div class="typography">
    <div class="alert alert-danger" role="alert">
      <% include Icon Name='warning', FixedWidth=1 %>
      <span class="type">$Type</span>
      <span class="text"><%t Error\Includes\NotFound_ss.NOTFOUND 'not found' %></span>
    </div>
    <div class="layout">
      $Layout.RAW
    </div>
  </div>
</div>
