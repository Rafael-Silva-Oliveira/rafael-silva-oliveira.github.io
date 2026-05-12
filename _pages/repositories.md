---
layout: page
permalink: /repositories/
title: Repositories
description: A selection of my key repositories.
nav: true
nav_order: 4
---

<style>
  .repo-grid .repo-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 1.25rem 1.25rem 1rem;
    border-radius: 0.5rem;
    background-color: var(--global-card-bg-color);
    border: 1px solid var(--global-divider-color);
    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out, border-color 0.15s ease-in-out;
  }
  .repo-grid a.repo-link {
    text-decoration: none;
    color: inherit;
    display: block;
    height: 100%;
  }
  .repo-grid a.repo-link:hover .repo-card {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    border-color: var(--global-theme-color);
  }
  .repo-grid .repo-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.15rem;
    font-weight: 600;
    margin: 0 0 0.5rem 0;
    color: var(--global-theme-color);
    word-break: break-word;
  }
  .repo-grid .repo-title .fa-github {
    color: var(--global-text-color);
    flex-shrink: 0;
  }
  .repo-grid .repo-title .fa-star {
    color: #f1c40f;
    font-size: 0.85rem;
  }
  .repo-grid .repo-desc {
    color: var(--global-text-color);
    font-size: 0.9rem;
    line-height: 1.45;
    margin: 0 0 1rem 0;
    flex-grow: 1;
  }
  .repo-grid .repo-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.8rem;
    color: var(--global-text-color-light);
    padding-top: 0.75rem;
    border-top: 1px solid var(--global-divider-color);
    margin: 0;
  }
  .repo-grid .repo-meta .lang-dot {
    display: inline-block;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    margin-right: 0.35rem;
    vertical-align: middle;
  }
  .repo-grid .repo-meta .meta-item {
    display: inline-flex;
    align-items: center;
  }
  .repo-grid .repo-meta .fa-star {
    color: #f1c40f;
    margin-right: 0.25rem;
  }
</style>

{% assign lang_colors = "JavaScript:#f1e05a,TypeScript:#3178c6,Python:#3572A5,Jupyter Notebook:#DA5B0B,HTML:#e34c26,CSS:#563d7c,Go:#00ADD8,Rust:#dea584,Java:#b07219,C++:#f34b7d,C:#555555,Ruby:#701516,Shell:#89e051,R:#198CE7" | split: "," %}

<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 repo-grid">
  {% for repo in site.data.repositories.featured %}
    {% assign lang_color = "#8e8e8e" %}
    {% if repo.language %}
      {% for entry in lang_colors %}
        {% assign pair = entry | split: ":" %}
        {% if pair[0] == repo.language %}
          {% assign lang_color = pair[1] %}
        {% endif %}
      {% endfor %}
    {% endif %}
    <div class="col">
      <a href="https://github.com/{{ repo.owner }}/{{ repo.name }}" target="_blank" rel="noopener" class="repo-link">
        <div class="repo-card">
          <h3 class="repo-title">
            <i class="fa-brands fa-github"></i>
            <span>{{ repo.name }}</span>
            {% if repo.highlight %}<i class="fa-solid fa-star" title="Featured"></i>{% endif %}
          </h3>
          <p class="repo-desc">{{ repo.description }}</p>
          <p class="repo-meta">
            {% if repo.language %}
              <span class="meta-item"><span class="lang-dot" style="background-color: {{ lang_color }};"></span>{{ repo.language }}</span>
            {% endif %}
            {% if repo.stars %}
              <span class="meta-item"><i class="fa-solid fa-star"></i>{{ repo.stars }}</span>
            {% endif %}
          </p>
        </div>
      </a>
    </div>
  {% endfor %}
</div>

<p class="mt-5 text-center">
  <a href="https://github.com/Rafael-Silva-Oliveira" target="_blank" rel="noopener">
    <i class="fa-brands fa-github"></i>&nbsp;See all repositories on GitHub&nbsp;→
  </a>
</p>
