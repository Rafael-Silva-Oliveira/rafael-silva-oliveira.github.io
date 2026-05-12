---
layout: page
permalink: /repositories/
title: Repositories
description: A selection of my key repositories. 
nav: true
nav_order: 4
---

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
  {% for repo in site.data.repositories.featured %}
    <div class="col">
      <a href="https://github.com/{{ repo.owner }}/{{ repo.name }}" target="_blank" rel="noopener" class="text-decoration-none">
        <div class="card hoverable h-100">
          <div class="card-body">
            <h3 class="card-title">
              <i class="fa-brands fa-github fa-sm me-1"></i>{{ repo.name }}{% if repo.highlight %} <i class="fa-solid fa-star fa-xs text-warning" title="Featured"></i>{% endif %}
            </h3>
            <p class="card-text">{{ repo.description }}</p>
            <p class="post-meta mb-0">
              {% if repo.language %}<i class="fa-solid fa-code fa-sm"></i> {{ repo.language }}{% endif %}
              {% if repo.stars %}&nbsp;&middot;&nbsp;<i class="fa-solid fa-star fa-sm"></i> {{ repo.stars }}{% endif %}
              &nbsp;&middot;&nbsp;<i class="fa-solid fa-user fa-sm"></i> {{ repo.owner }}
            </p>
          </div>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<p class="mt-4 text-center">
  <a href="https://github.com/Rafael-Silva-Oliveira" target="_blank" rel="noopener">
    <i class="fa-brands fa-github"></i> See all repositories on GitHub →
  </a>
</p>
