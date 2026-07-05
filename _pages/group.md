---
layout: page
permalink: /group/
title: Group
description: research group members and active collaborators.
nav: true
nav_order: 3
---

{% assign group = site.data.group %}
{% assign banner = group.banner %}
{% assign pi = group.principal_investigator %}

{% if banner or group.logos %}

  <section
    class="group-hero"
    {% if banner.image %}
      style="background-image: linear-gradient(90deg, rgba(3, 18, 33, 0.82), rgba(3, 18, 33, 0.42)), url('{{ banner.image | relative_url }}');"
    {% endif %}
  >
    <div class="group-hero-content">
      <div>
        <h2>{{ group.name }}</h2>
        {% if group.tagline %}
          <p>{{ group.tagline }}</p>
        {% endif %}
      </div>
      {% if group.logos and group.logos.size > 0 %}
        <div class="group-logo-strip" aria-label="Group affiliations">
          {% for logo in group.logos %}
            <div class="group-logo-slot{% if logo.variant %} group-logo-slot-{{ logo.variant }}{% endif %}">
              {% if logo.image %}
                <img src="{{ logo.image | relative_url }}" alt="{{ logo.alt | default: logo.name }}" loading="lazy" />
              {% else %}
                <span>{{ logo.label | default: logo.name }}</span>
              {% endif %}
            </div>
          {% endfor %}
        </div>
      {% endif %}
    </div>
  </section>
{% else %}
  ## {{ group.name }}
{% endif %}

{{ group.description }}

<style>
  .group-hero {
    background-color: #203344;
    background-position: center;
    background-size: cover;
    border-radius: 8px;
    display: flex;
    margin-bottom: 0.85rem;
    min-height: 190px;
    overflow: hidden;
  }

  .group-hero-content {
    align-items: end;
    display: grid;
    gap: 1rem;
    grid-template-columns: minmax(0, 1fr) auto;
    padding: 1rem;
    width: 100%;
  }

  .post article .group-hero h2 {
    color: #ffffff;
    font-size: 1.6rem;
    line-height: 1.15;
    margin: 0 0 0.35rem;
  }

  .post article .group-hero p {
    color: rgba(255, 255, 255, 0.86);
    font-size: 0.9rem;
    line-height: 1.35;
    margin: 0;
    max-width: 36rem;
  }

  .group-logo-strip {
    align-self: start;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: flex-end;
    max-width: 22rem;
  }

  .group-logo-slot {
    align-items: center;
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(255, 255, 255, 0.58);
    border-radius: 6px;
    display: flex;
    height: 52px;
    justify-content: center;
    padding: 0.35rem 0.5rem;
    width: 86px;
  }

  .group-logo-slot-wide {
    height: 86px;
    width: 220px;
  }

  .group-logo-slot-seal {
    height: 86px;
    width: 86px;
  }

  .group-logo-slot img {
    display: block;
    max-height: 40px;
    max-width: 74px;
    object-fit: contain;
  }

  .group-logo-slot-wide img {
    max-height: 76px;
    max-width: 208px;
  }

  .group-logo-slot-seal img {
    max-height: 72px;
    max-width: 72px;
  }

  .group-logo-slot span {
    color: #203344;
    font-size: 0.65rem;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
  }

  .group-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.55rem;
    margin-bottom: 0.35rem;
  }

  .group-card {
    height: 100%;
    min-width: 0;
    padding: 0.6rem;
    text-align: center;
  }

  .group-lead {
    align-items: center;
    display: flex;
    flex-direction: row;
    gap: 0.75rem;
    grid-column: 1 / -1;
    min-height: auto;
    text-align: left;
  }

  .group-lead .group-photo {
    flex: 0 0 auto;
    margin: 0;
  }

  .group-lead > div {
    min-width: 0;
  }

  .group-card.group-lead h4 {
    text-align: left;
  }

  .post article h2 {
    font-size: 1.25rem;
    margin-bottom: 0.3rem;
  }

  .post article > p {
    font-size: 0.88rem;
    line-height: 1.35;
    margin-bottom: 0.75rem;
  }

  .post article h3 {
    font-size: 1rem;
    margin-bottom: 0.45rem;
    margin-top: 1rem;
  }

  .group-photo {
    border-radius: 50%;
    display: block;
    height: 72px;
    margin: 0 auto 0.4rem;
    object-fit: cover;
    width: 72px;
  }

  .group-card h4 {
    font-size: 0.86rem;
    line-height: 1.15;
    margin: 0 0 0.2rem;
    text-align: center;
  }

  .group-card h4 a {
    color: inherit;
  }

  .group-card h4 a:hover {
    color: var(--global-theme-color);
  }

  .group-card p,
  .group-card li {
    font-size: 0.73rem;
    line-height: 1.25;
  }

  .group-card p {
    margin-bottom: 0.25rem;
  }

  .group-card:not(.group-lead) p:not(.group-meta) {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }

  .group-meta {
    color: var(--global-text-color-light);
    text-align: center;
  }

  .group-lead .group-meta {
    text-align: left;
  }

  .group-empty {
    color: var(--global-text-color-light);
    font-size: 0.8rem;
    margin: -0.15rem 0 0.55rem;
  }

  @media (max-width: 575px) {
    .group-hero {
      min-height: 220px;
    }

    .group-hero-content {
      align-items: end;
      grid-template-columns: 1fr;
    }

    .group-logo-strip {
      justify-content: flex-start;
      max-width: none;
    }

    .group-logo-slot-wide {
      width: min(220px, 100%);
    }

    .post article .group-hero h2 {
      font-size: 1.35rem;
    }

    .group-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .group-photo {
      height: 64px;
      width: 64px;
    }

    .group-lead {
      display: block;
    }

    .group-lead .group-photo {
      margin: 0 auto 0.55rem;
    }

    .group-lead h4,
    .group-lead .group-meta {
      text-align: center;
    }
  }
</style>

### Principal Investigator

<div class="group-grid">
  <div class="card group-card group-lead">
    {% if pi.image %}
      <img class="group-photo" src="{{ pi.image | relative_url }}" alt="{{ pi.name }}" loading="lazy" />
    {% endif %}
    <div>
      <h4 class="card-title">{{ pi.name }}</h4>
      <p class="group-meta"><strong>{{ pi.role }}</strong></p>
      <p>{{ pi.affiliation }}</p>
      <p>
        <a href="mailto:{{ pi.email }}">{{ pi.email }}</a>
        {% if pi.website %} · <a href="{{ pi.website }}">profile</a>{% endif %}
      </p>
      <p><strong>Interests:</strong> {{ pi.interests | join: ", " }}</p>
    </div>
  </div>
</div>

### Active Collaborators

<div class="group-grid">
  {% for collaborator in group.active_collaborators %}
    <div class="card group-card">
      {% if collaborator.image %}
        <img class="group-photo" src="{{ collaborator.image | relative_url }}" alt="{{ collaborator.name }}" loading="lazy" />
      {% endif %}
      <h4 class="card-title">
        {% if collaborator.website %}
          <a href="{{ collaborator.website }}" target="_blank" rel="noopener">{{ collaborator.name }}</a>
        {% else %}
          {{ collaborator.name }}
        {% endif %}
      </h4>
      {% if collaborator.position %}
        <p class="group-meta"><strong>{{ collaborator.position }}</strong></p>
      {% endif %}
      {% if collaborator.affiliation %}
        <p>{{ collaborator.affiliation }}</p>
      {% elsif collaborator.focus %}
        <p>{{ collaborator.focus }}</p>
      {% endif %}
    </div>
  {% endfor %}
</div>

{% for section in group.student_groups %}

### {{ section.title }}

{% if section.members and section.members.size > 0 %}

  <div class="group-grid">
    {% for member in section.members %}
      <div class="card group-card">
        {% if member.image %}
          <img class="group-photo" src="{{ member.image | relative_url }}" alt="{{ member.name }}" loading="lazy" />
        {% endif %}
        <h4 class="card-title">{{ member.name }}</h4>
        {% if member.role %}
          <p class="group-meta"><strong>{{ member.role }}</strong></p>
        {% endif %}
        {% if member.affiliation %}
          <p>{{ member.affiliation }}</p>
        {% elsif member.focus %}
          <p>{{ member.focus }}</p>
        {% endif %}
        {% if member.note %}
          <p class="group-meta">{{ member.note }}</p>
        {% endif %}
      </div>
    {% endfor %}
  </div>
{% else %}
  <p class="group-empty">{{ section.empty_text }}</p>
{% endif %}

{% endfor %}
