<% if $List.MoreThanOnePage %>
  <nav aria-label="<% if $Label %>$Label<% else %>Pagination<% end_if %>">
    <ul class="pagination<% if $Size %> pagination-$Size<% end_if %>">
      <% if $List.NotFirstPage %>
        <li class="page-item">
          <a class="page-link" href="$List.PrevLink" title="<%t Pagination_ss.PREVIOUS 'Previous' %>" aria-label="<%t Pagination_ss.PREVIOUS 'Previous' %>">
            <% include Icon Name='arrow-left' %>
            <span class="text"><%t Pagination_ss.PREVIOUS 'Previous' %></span>
          </a>
        </li>
      <% end_if %>
      <% loop $List.PageSummary %>
        <li class="page-item<% if $CurrentBool %> active<% end_if %>">
          <% if $Link %>
            <a class="page-link" href="$Link">
              <span class="page">$PageNum</span>
            </a>
          <% else %>
            <span class="page-more">...</span>
          <% end_if %>
        </li>
      <% end_loop %>
      <% if $List.NotLastPage %>
        <li class="page-item">
          <a class="page-link" href="$List.NextLink" title="<%t Pagination_ss.NEXT 'Next' %>" aria-label="<%t Pagination_ss.NEXT 'Next' %>">
            <span class="text"><%t Pagination_ss.NEXT 'Next' %></span>
            <% include Icon Name='arrow-right' %>
          </a>
        </li>
      <% end_if %>
    </ul>
  </nav>
<% end_if %>
