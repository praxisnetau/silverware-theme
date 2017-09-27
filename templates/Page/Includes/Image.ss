<% if $MetaImageShown %>
  <div class="$MetaImageWrapperClass">
    <% if $MetaImageLinked %><a $MetaImageLinkAttributesHTML><% end_if %>
    <% with $MetaImageResized %>
      <img src="$URL" class="$Up.MetaImageClass" alt="$Title">
    <% end_with %>
    <% if $MetaImageLinked %></a><% end_if %>
    <% if $MetaImageCaptionShown %>
      <div class="$MetaImageCaptionClass">
        $MetaImageCaption
      </div>
    <% end_if %>
  </div>
<% end_if %>
