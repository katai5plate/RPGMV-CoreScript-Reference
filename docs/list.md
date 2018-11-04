{% for post in site.posts %}
<p><li><a href="{{post.url}}">{{post.title}}</a></li></p>
{% endfor %}