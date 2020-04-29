---
layout: blog
pagination:
  enabled: true
---

{% if paginator.page == 1 %}
<section>
  <div class="row">
    <div class="col-md-8">
      <p>
        This is the FOSS Responder Blog. <a href="">Subscribe to our newsletter</a> for regular
        notifications on our blog posts and articles. The future of the FOSS community is 
        unknown. The only way to substain our community is together, and FOSS Responders are
        here to help. Read our blog posts to understand our goals and progress better.
      </p>
    </div>
  </div>
</section>
{% endif %}

  <main class="mt-5">
    <div class="row">
      <div class="col-md-8">
        <section class="posts">
          <h2>Latest</h2>
          {% for post in paginator.posts %}
            {% if forloop.index > 2 %}
              {% break %}
            {% endif %}
            {% if post.author %}
              {% assign author = site.data.authors[post.author] %}{% else %}{% assign author = site.owner %}
            {% endif %}
            <div class="post-thumbnail mt-4 mb-5">
              {% if post.image %}
                <img class="post-thumbnail-img" src="{{ post.image }}" />
              {% endif %}
              <div class="post-thumbnail-info mx-5">
                <h3>{{ post.title }}</h3>
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
      </div>
      <div class="col-md-4">
        <section class="side-section mb-5">
          <h2>Categories</h2>
          {% for category in site.categories %}
            {% assign category_name = site.data.categories[category.first].name %}
            <a href="/category/{{ category.first }}">{{ category_name }}</a>
          {% endfor %}
        </section>
        <section class="side-section">
          <h2>Authors</h2>
          {% for author in site.data.authors %}
            {% assign author_name = site.data.authors[author.first].name %}
            <a href="/author/{{ author.first }}">{{ author_name }}</a>
          {% endfor %}
        </section>
      </div>
    </div>
    <hr />
    <div class="row">
      {% for post in paginator.posts %}
        <div class="col-md-4">
          <div class="post-thumbnail flex-column my-4">
            {% if post.image %}
              <img class="post-thumbnail-img" src="{{ post.image }}" />
            {% endif %}
            <div class="post-thumbnail-info">
              <h3>{{ post.title }}</h3>
              <small>
                Posted on <time datetime="{{ post.date | date_to_xmlschema }}">
                {{ post.date | date: '%B %d, %Y' }}</time> by {{ author.name }}
              </small>
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </main>
</body>





