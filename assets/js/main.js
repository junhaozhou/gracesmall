---
---
var poemCount = 0;
var currentPos = 0;
var images = [
    {% for post in site.posts %}
    "./assets/images/{% if post.cover %}{{ post.cover }}{% else %}coffee.jpg{% endif %}",
    {% endfor %}
]

$(document).ready(function() {
    $('#fullpage').fullpage({
        onLeave: function(index, nexIndex, direction) {
            $.backstretch(images[nexIndex - 1]);
        }
    });
    poemCount = images.length;
    $.backstretch(images[currentPos], { speed: 500 });
});
