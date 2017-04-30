<% if $MetaImageShown %>
  <div class="$MetaImageWrapperClass">
    <% with $MetaImageResized %>
      <img src="$URL" class="$Up.MetaImageClass" alt="$Title">
    <% end_with %>
    <% if $MetaImageCaptionShown %>
      <div class="$MetaImageCaptionClass">
        $MetaImageCaption
      </div>
    <% end_if %>
  </div>
<% end_if %>
