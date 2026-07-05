---
layout: page
permalink: /incoming-students/
title: Incoming Students
description: notes for prospective and incoming students.
nav: true
nav_order: 3.5
---

{% assign incoming = site.data.incoming_students %}

<style>
  .incoming-wiki {
    display: grid;
    gap: 1rem;
    grid-template-columns: 12rem minmax(0, 1fr);
  }

  .incoming-sidebar {
    border-right: 1px solid var(--global-divider-color);
    color: var(--global-text-color-light);
    font-size: 0.75rem;
    line-height: 1.35;
    padding-right: 0.85rem;
  }

  .incoming-sidebar-inner {
    position: sticky;
    top: 5rem;
  }

  .incoming-space {
    color: var(--global-text-color);
    font-weight: 700;
    margin-bottom: 0.2rem;
  }

  .incoming-visibility {
    border: 1px solid var(--global-divider-color);
    border-radius: 999px;
    display: inline-flex;
    font-size: 0.68rem;
    margin-bottom: 0.85rem;
    padding: 0.08rem 0.45rem;
  }

  .incoming-outline-title {
    color: var(--global-text-color);
    font-size: 0.72rem;
    font-weight: 700;
    margin-bottom: 0.35rem;
  }

  .incoming-outline {
    display: grid;
    gap: 0.28rem;
  }

  .incoming-outline a {
    color: var(--global-text-color-light);
    text-decoration: none;
  }

  .incoming-outline a:hover {
    color: var(--global-hover-color);
  }

  .incoming-doc {
    min-width: 0;
  }

  .incoming-title-row {
    align-items: flex-start;
    border-bottom: 1px solid var(--global-divider-color);
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.85rem;
    padding-bottom: 0.8rem;
  }

  .incoming-icon {
    align-items: center;
    background: var(--global-code-bg-color);
    border: 1px solid rgba(0, 118, 223, 0.18);
    border-radius: 8px;
    display: inline-flex;
    flex: 0 0 auto;
    font-size: 1.35rem;
    height: 2.4rem;
    justify-content: center;
    width: 2.4rem;
  }

  .post article .incoming-title-row h2 {
    font-size: 1.45rem;
    line-height: 1.2;
    margin: 0 0 0.25rem;
  }

  .incoming-meta {
    color: var(--global-text-color-light);
    display: flex;
    flex-wrap: wrap;
    font-size: 0.74rem;
    gap: 0.45rem 0.8rem;
  }

  .incoming-callout {
    align-items: flex-start;
    background: var(--global-code-bg-color);
    border: 1px solid rgba(0, 118, 223, 0.18);
    border-radius: 8px;
    display: flex;
    gap: 0.65rem;
    margin: 0.75rem 0 1rem;
    padding: 0.75rem 0.85rem;
  }

  .incoming-callout-icon {
    flex: 0 0 auto;
    font-size: 1.05rem;
    line-height: 1;
    margin-top: 0.05rem;
  }

  .incoming-callout h3 {
    font-size: 0.9rem;
    line-height: 1.25;
    margin: 0 0 0.2rem;
  }

  .post article .incoming-callout p,
  .post article .incoming-intro p,
  .post article .incoming-answer p,
  .post article .incoming-contact p {
    font-size: 0.82rem;
    line-height: 1.55;
    margin-bottom: 0.45rem;
  }

  .incoming-doc h2 {
    border-bottom: 1px solid var(--global-divider-color);
    font-size: 1.08rem;
    margin-top: 1.25rem;
    padding-bottom: 0.28rem;
  }

  .incoming-intro {
    margin-bottom: 0.95rem;
  }

  .incoming-section {
    margin-top: 1.1rem;
  }

  .incoming-question {
    border-bottom: 1px solid var(--global-divider-color);
    padding: 0.45rem 0;
  }

  .incoming-question summary {
    align-items: center;
    cursor: pointer;
    display: flex;
    font-size: 0.86rem;
    font-weight: 700;
    gap: 0.45rem;
    line-height: 1.3;
    list-style: none;
  }

  .incoming-question summary::-webkit-details-marker {
    display: none;
  }

  .incoming-question summary::before {
    border-bottom: 0.28rem solid transparent;
    border-left: 0.36rem solid var(--global-text-color-light);
    border-top: 0.28rem solid transparent;
    content: "";
    display: inline-block;
    flex: 0 0 auto;
    transition: transform 0.15s ease;
  }

  .incoming-question[open] summary::before {
    transform: rotate(90deg);
  }

  .incoming-answer {
    color: var(--global-text-color);
    padding: 0.4rem 0 0 1rem;
  }

  .incoming-contact {
    border-top: 1px solid var(--global-divider-color);
    margin-top: 1.25rem;
    padding-top: 0.8rem;
  }

  .incoming-contact h2 {
    margin-top: 0;
  }

  @media (max-width: 767px) {
    .incoming-wiki {
      grid-template-columns: 1fr;
    }

    .incoming-sidebar {
      border-bottom: 1px solid var(--global-divider-color);
      border-right: 0;
      padding: 0 0 0.75rem;
    }

    .incoming-sidebar-inner {
      position: static;
    }

    .incoming-outline {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
</style>

<div class="incoming-wiki">
  <aside class="incoming-sidebar" aria-label="Incoming students page outline">
    <div class="incoming-sidebar-inner">
      <div class="incoming-space">{{ incoming.space_name }}</div>
      <div class="incoming-visibility">{{ incoming.visibility }}</div>
      <div class="incoming-outline-title">目录</div>
      <nav class="incoming-outline">
        <a href="#intro">{{ incoming.intro.title }}</a>
        {% for section in incoming.sections %}
          <a href="#section-{{ forloop.index }}">{{ section.number }}. {{ section.title }}</a>
        {% endfor %}
        <a href="#contact">{{ incoming.contact.title }}</a>
      </nav>
    </div>
  </aside>

  <article class="incoming-doc">
    <header class="incoming-title-row">
      <span class="incoming-icon" aria-hidden="true">{{ incoming.page_icon }}</span>
      <div>
        <h2>{{ incoming.title }}</h2>
        <div class="incoming-meta">
          <span>{{ incoming.subtitle }}</span>
          <span>创建：{{ incoming.created }}</span>
          <span>最近更新：{{ incoming.updated }}</span>
        </div>
      </div>
    </header>

    <section class="incoming-callout" aria-label="{{ incoming.welcome.title }}">
      <span class="incoming-callout-icon" aria-hidden="true">{{ incoming.welcome.icon }}</span>
      <div>
        <h3>{{ incoming.welcome.title }}</h3>
        <p>{{ incoming.welcome.text }}</p>
      </div>
    </section>

    <section id="intro" class="incoming-intro">
      <h2>{{ incoming.intro.title }}</h2>
      {% for paragraph in incoming.intro.paragraphs %}
        <p>{{ paragraph }}</p>
      {% endfor %}
    </section>

    {% for section in incoming.sections %}
      <section id="section-{{ forloop.index }}" class="incoming-section">
        <h2>{{ section.number }}. {{ section.title }}</h2>
        {% for item in section.questions %}
          <details class="incoming-question" open>
            <summary>{{ item.question }}</summary>
            <div class="incoming-answer">
              {{ item.answer | markdownify }}
            </div>
          </details>
        {% endfor %}
      </section>
    {% endfor %}

    <section id="contact" class="incoming-contact">
      <h2>{{ incoming.contact.title }}</h2>
      <p>{{ incoming.contact.text }}</p>
      <p>
        <a href="mailto:{{ incoming.contact.email }}">{{ incoming.contact.email }}</a><br />
        {{ incoming.contact.location }}
      </p>
      {% if incoming.contact.reference %}
        <p>
          参考阅读：
          <a href="{{ incoming.contact.reference.url }}">{{ incoming.contact.reference.label }}</a>
        </p>
      {% endif %}
    </section>

  </article>
</div>
