---
layout: default
pagination:
  enabled: true
---

<body class="blog">
  <header>
    <img src="/images/src/logos/logo-270x790.png" alt="FOSS responders' logo">
  </header>
  
  <section class="blog-description">
    <p>
      This is the FOSS Responder Blog. <a href="">Subscribe to our newsletter</a> for regular
      notifications on our blog posts .............
    </p>
  </section>

  <main>
    <div class="posts-head">
      <section class="posts">
        <h2>Latest</h2>
        {% for post in paginator.posts %}
          {% if post.author %}
            {% assign author = site.data.authors[post.author] %}{% else %}{% assign author = site.owner %}
          {% endif %}
          <div class="post-thumbnail">
            {% if post.image %}
              <img class="post-thumbnail-img" src="{{ post.image }}" />
            {% endif %}
            <div class="post-thumbnail-info">
              <h2>{{ post.title }}</h2>
              <small>
                Posted on <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: '%B %d, %Y' }}</time> by {{ author.name }}
              </small>
              {% if post.excerpt %}
                <p class="excerpt">
                  {{ post.excerpt | remove: '\[ ... \]' | remove: '\( ... \)' | markdownify | strip_html | strip_newlines | escape_once }}
                </p>
              {% endif %}
            </div>
          </div>
        {% endfor %}
      </section>
      <section class="categories">
        <h2>Categories</h2>
        {% for category in site.categories %}
          {% assign category_name = site.data.categories[category.first].name %}
          <a href="/category/{{ category.first }}">{{ category_name }}</a>
        {% endfor %}
      </section>
    </div>
  </main>
</body>





