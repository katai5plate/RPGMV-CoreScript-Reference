---
---
{% for post in site.pages %}
<p><li><a href="{{post.url}}">{{post.title}}</a></li></p>
{% endfor %}