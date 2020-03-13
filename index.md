---
layout: page
title: "Home"
ignore_title: true
tags: ["foss responders", "floss responders", "oss", "floss", "foss", "open source", "aid", "coronavirus", "covid-19", "opensource"]
excerpt: "Helping the Open Source ecosystem respond to Coronavirus"
search_omit: true
---

<h2 class="site-description center" itemprop="description">Helping the Open Source ecosystem respond to Coronavirus</h2>

<p class="center"><a href="https://slack.opencollective.com/#crisis-working-group"><img src="https://img.shields.io/badge/slack-open%20collective-blue" alt="Slack link to Open Collective Slack"/></a></p>

<!-- TODO write out -->
...


<h2 class="center">Announcements and Updates</h2>
<ul class="post-list">
{% for post in site.posts limit:10 %}
  <li><article><a href="{{ site.url }}{{ post.url }}"><div class="post-entry-title">{{ post.title }}</div> <span class="entry-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time></span>{% if post.excerpt %} <span class="excerpt">{{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}</span>{% endif %}</a></article></li>
{% endfor %}
</ul>

