---
layout: about
title: About
permalink: /
subtitle: Professor, Department of Computer Science, Northwestern Polytechnical University

profile:
  align: right
  image: group/yifei-zhang.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>No. 127 Youyi Xilu</p>
    <p>Beilin District, Xi'an, Shaanxi, China</p>
    <p><a href="mailto:yifei.zhang@nwpu.edu.cn">yifei.zhang@nwpu.edu.cn</a></p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<p
  data-i18n-en="I am a Professor in the Department of Computer Science at Northwestern Polytechnical University. My research focuses on trustworthy machine learning, federated learning, representation learning, large language models, and robust vision-language models."
  data-i18n-zh="我是西北工业大学计算机学院教授，国家级青年人才，研究方向包括可信机器学习、联邦学习、表示学习、大语言模型以及鲁棒视觉语言模型。"
>
  I am a Professor in the Department of Computer Science at Northwestern Polytechnical University. My research focuses on trustworthy machine learning, federated learning, graph representation learning, large language models, and robust vision-language models.
</p>

<p
  data-i18n-en="Before joining NWPU, I was a Research Scientist at Nanyang Technological University, received my Ph.D. from The Chinese University of Hong Kong, and worked as a data scientist and software engineer in industry. My work has appeared in venues including NeurIPS, ICML, ICLR, KDD, CVPR, ICCV, WWW, ACL, EMNLP, AAAI, SIGIR, and CIKM."
  data-i18n-zh="加入西北工业大学之前，我曾任南洋理工大学研究科学家，博士毕业于香港中文大学，并有数据科学家和软件工程师的产业经历。我的工作发表于 NeurIPS、ICML、ICLR、KDD、CVPR、ICCV、WWW、ACL、EMNLP、AAAI、SIGIR 和 CIKM 等会议。"
>
  Before joining NWPU, I was a Research Scientist at Nanyang Technological University, received my Ph.D. from The Chinese University of Hong Kong, and worked as a data scientist and software engineer in industry. My work has appeared in venues including NeurIPS, ICML, ICLR, KDD, CVPR, ICCV, WWW, ACL, EMNLP, AAAI, SIGIR, and CIKM.
</p>

<p
  data-i18n-en="I am broadly interested in building reliable learning systems for foundation models with focusing on data-centric machine intelligence, including self-supervised learning, agentic learning, spatial intelligence, representation learning, and knowledge discovery from large-scale multimodal data."
  data-i18n-zh="我的研究兴趣主要围绕面向基础模型的可靠学习系统展开，重点关注以数据为中心的机器智能，包括自监督学习、智能体学习、空间智能、表征学习，以及大规模多模态数据中的知识发现。
"
>
  I am broadly interested in building reliable learning systems for foundation models with focusing on data-centric machine intelligence, including self-supervised learning, agentic learning, spatial intelligence, representation learning, and knowledge discovery from large-scale multimodal data.
</p>

<p>
  <span
    data-i18n-en="I lead the"
    data-i18n-zh="我负责"
  >I lead the</span>
  <a
    href="{{ "/group/" | relative_url }}"
    data-i18n-en="DIKD Lab"
    data-i18n-zh="数据智能与知识发现实验室"
  >DIKD Lab</a><span
    data-i18n-en=", the Data Intelligence and Knowledge Discovery Lab (DIKD Lab) advances the frontier of data intelligence and knowledge discovery, transforming complex data into trustworthy insights, intelligent systems, and scientific breakthroughs."
    data-i18n-zh="（DIKD Lab），致力于推进数据智能与知识发现的前沿发展，将复杂数据转化为可信洞察、智能系统和突破性科学发现。"
  >, the Data Intelligence and Knowledge Discovery Lab (DIKD Lab) advances the frontier of data intelligence and knowledge discovery, transforming complex data into trustworthy insights, intelligent systems, and scientific breakthroughs.</span>
</p>

{% assign group_news = site.data.group.news %}
{% if group_news and group_news.size > 0 %}

<section class="group-news" aria-labelledby="group-news-heading">
  <h2
    id="group-news-heading"
    data-i18n-en="Group News"
    data-i18n-zh="团队动态"
  >Group News</h2>
  <ul>
    {% for item in group_news limit: 4 %}
      <li>
        <span class="group-news-date">{{ item.date }}</span>
        <span>
          <strong
            data-i18n-en="{{ item.title | escape }}"
            data-i18n-zh="{{ item.title_zh | default: item.title | escape }}"
          >{{ item.title }}</strong>
          {% if item.description %}
            <span
              class="group-news-description"
              data-i18n-en="{{ item.description | escape }}"
              data-i18n-zh="{{ item.description_zh | default: item.description | escape }}"
            >{{ item.description }}</span>
          {% endif %}
        </span>
      </li>
    {% endfor %}
  </ul>
</section>
{% endif %}

{% assign group_gallery = site.data.group.gallery %}
{% if group_gallery and group_gallery.items and group_gallery.items.size > 0 %}

<section class="group-gallery" aria-labelledby="group-gallery-heading">
  <div class="group-gallery-heading">
    <div>
      <h2
        id="group-gallery-heading"
        data-i18n-en="{{ group_gallery.title | default: 'Group Activities' | escape }}"
        data-i18n-zh="{{ group_gallery.title_zh | default: group_gallery.title | escape }}"
      >{{ group_gallery.title | default: 'Group Activities' }}</h2>
      {% if group_gallery.description %}
        <p
          data-i18n-en="{{ group_gallery.description | escape }}"
          data-i18n-zh="{{ group_gallery.description_zh | default: group_gallery.description | escape }}"
        >{{ group_gallery.description }}</p>
      {% endif %}
    </div>
  </div>

  <div class="group-gallery-strip" tabindex="0" aria-label="{{ group_gallery.title | default: 'Group Activities' }}">
    {% for item in group_gallery.items %}
      <figure class="group-gallery-card">
        <img src="{{ item.image | relative_url }}" alt="{{ item.alt | default: item.title }}" loading="lazy" />
        <figcaption>
          <strong
            data-i18n-en="{{ item.title | escape }}"
            data-i18n-zh="{{ item.title_zh | default: item.title | escape }}"
          >{{ item.title }}</strong>
          {% if item.caption %}
            <span
              data-i18n-en="{{ item.caption | escape }}"
              data-i18n-zh="{{ item.caption_zh | default: item.caption | escape }}"
            >{{ item.caption }}</span>
          {% endif %}
        </figcaption>
      </figure>
    {% endfor %}
  </div>
</section>
{% endif %}
