---
layout: page
permalink: /repositories/
title: Repositories
description: A selection of my key repositories. Edit <code>_data/repositories.yml</code> to change which repos are featured.
nav: true
nav_order: 4
---

{% if site.data.repositories.github_repos and site.data.repositories.github_repos.size > 0 %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

{% endif %}

{% if site.data.repositories.github_users %}

---

<div class="repositories d-flex flex-wrap justify-content-center align-items-center">
  {% for user in site.data.repositories.github_users %}
    <div class="repo p-2" style="max-width: 480px; width: 100%;">
      <a href="https://github.com/{{ user }}">
        <img
          class="only-light w-100"
          alt="{{ user }} — commits and issues"
          src="https://github-readme-stats.vercel.app/api/?username={{ user }}&theme={{ site.repo_theme_light }}&show_icons=true&hide=stars,prs,contribs,rank&hide_title=true&hide_border=true&card_width=480"
        >
        <img
          class="only-dark w-100"
          alt="{{ user }} — commits and issues"
          src="https://github-readme-stats.vercel.app/api/?username={{ user }}&theme={{ site.repo_theme_dark }}&show_icons=true&hide=stars,prs,contribs,rank&hide_title=true&hide_border=true&card_width=480"
        >
      </a>
    </div>
  {% endfor %}
</div>

{% endif %}
