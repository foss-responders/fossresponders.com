---
layout: blog
pagination:
  enabled: true
---

{% if paginator.page == 1 %}
<section>
  <p>
    This is the FOSS Responder Blog. <a href="">Subscribe to our newsletter</a> for regular
    notifications on our blog posts and articles. The future of the FOSS community is 
    unknown. The only way to substain our community is together, and FOSS Responders are
    here to help. Read our blog posts to understand our goals and progress better.
  </p>
</section>
{% endif %}

  <main>
    <div class="posts-head">
      <section class="posts">
        <h1>Latest</h1>
        {% for post in paginator.posts %}
          {% if post.author %}
            {% assign author = site.data.authors[post.author] %}{% else %}{% assign author = site.owner %}
          {% endif %}
          {% if forloop.index <= 2 %}
            <div class="post-thumbnail my-4">
              {% if post.image %}
                <img class="post-thumbnail-img" src="{{ post.image }}" />
              {% endif %}
              <div class="post-thumbnail-info mx-5">
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
            {% if forloop.index == 2 %}
              <hr />
            </section>
            <section class="categories">
              <h1>Categories</h1>
              {% for category in site.categories %}
                {% assign category_name = site.data.categories[category.first].name %}
                <a href="/category/{{ category.first }}">{{ category_name }}</a>
              {% endfor %}
            </section>
          </div>
          <section>
            {% endif %}
          {% elsif forloop.index <= 5 %}
            {% if forloop.index == 3 %}
              <div class="row">
            {% endif %}
                <div class="col-12 col-md-4">
                  <div class="card border-0">
                    <img class="card-img-top" src="{{ post.image }}" />
                    <div class="card-body">
                      <h2>{{ post.title }}</h2>
                      <small>
                        Posted on <time datetime="{{ post.date | date_to_xmlschema }}">
                        {{ post.date | date: '%B %d, %Y' }}</time> by {{ author.name }}
                      </small>
                    </div>
                  </div>
                </div>
            {% if forloop.index == 5 %}
              </div>
            {% endif %}
          {% elsif forloop.index == 6 %}
            <div class="row">
              <div class="col-lg-12 col-md-6"> src="{{ post.image }}" />
              <div class="col-lg-12 col-md-6">
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
            <p>{{ post.title }}</p>
          {% else %}
            roroekpork
            <p>{{ post.title }} rere</p>
          {% endif %}
        {% endfor %}
      </section>
    </div>
  </main>
</body>





