---
title: Testimonials
description: "Anonymous feedback from Apurva Misra's AI courses, conference talks, hands-on workshops, and consulting work."
hide:
  - toc
---

<style>
.testimonials {
  --testimonial-accent: #a54747;
  --testimonial-tint: rgba(218, 131, 131, 0.08);
  --testimonial-border: rgba(218, 131, 131, 0.25);
  max-width: 1040px;
  margin: 0 auto;
}
[data-md-color-scheme="slate"] .testimonials {
  --testimonial-accent: #eda9a9;
  --testimonial-tint: rgba(218, 131, 131, 0.08);
}
.testimonials .testimonial-eyebrow {
  margin: 0 0 0.7rem;
  color: var(--testimonial-accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.testimonials h1 {
  margin: 0 0 1rem;
  color: var(--md-default-fg-color);
  font-size: clamp(2.25rem, 6vw, 3.5rem);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.035em;
}
.testimonial-intro {
  max-width: 650px;
  font-size: 1.08rem;
  line-height: 1.7;
}
.testimonial-note {
  max-width: 680px;
  color: var(--md-default-fg-color--light);
  font-size: 0.75rem;
  line-height: 1.7;
}
.testimonial-brands {
  margin: 1.7rem 0;
  padding: 1rem 0;
  border-top: 1px solid var(--testimonial-border);
  border-bottom: 1px solid var(--testimonial-border);
}
.testimonial-brands > p {
  margin: 0;
  color: var(--md-default-fg-color--light);
  font-size: 0.7rem;
}
.testimonials ul.testimonial-brand-list {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.6rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.testimonials .testimonial-brand-list li {
  margin: 0;
}
.testimonials .testimonial-brand-list a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  min-height: 108px;
  color: var(--md-default-fg-color);
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
}
.testimonial-brand-list img {
  display: block;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
.testimonial-brand-list .brand-oreilly { width: 128px; }
.testimonial-brand-list .brand-mlcon { width: 148px; }
.testimonial-brand-list .brand-mark { width: 48px; height: 48px; }
.testimonial-brand-list .brand-dark { display: none; }
[data-md-color-scheme="slate"] .testimonial-brand-list .brand-light { display: none; }
[data-md-color-scheme="slate"] .testimonial-brand-list .brand-dark { display: block; }
.testimonial-jump {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 1.25rem;
  margin: 1.5rem 0 2rem;
  font-size: 0.8rem;
}
.testimonials a {
  color: var(--testimonial-accent);
  text-decoration: underline;
  text-underline-offset: 0.2em;
}
.testimonials a:focus-visible {
  outline: 2px solid var(--testimonial-accent);
  outline-offset: 4px;
}
.testimonials .testimonial-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0;
  padding: 1.4rem;
  min-width: 0;
  width: auto;
  max-width: none;
  border: 1px solid var(--testimonial-border);
  border-radius: 12px;
  background: var(--md-default-bg-color);
  text-align: left;
}
.testimonials .testimonial-featured {
  padding: clamp(1.4rem, 4vw, 2.4rem);
  background: var(--testimonial-tint);
  border-left: 4px solid var(--testimonial-accent);
}
.testimonials .testimonial-card blockquote {
  margin: 0;
  padding: 0;
  border: 0;
  color: var(--md-default-fg-color);
  font-size: 0.92rem;
  line-height: 1.8;
}
.testimonials .testimonial-featured blockquote {
  font-size: clamp(1.12rem, 2.6vw, 1.45rem);
  line-height: 1.6;
}
.testimonials .testimonial-card blockquote p {
  margin: 0;
}
.testimonials .testimonial-card figcaption {
  margin: auto 0 0;
  padding-top: 0.8rem;
  max-width: none;
  border-top: 1px solid var(--testimonial-border);
  font-size: 0.7rem;
  font-style: normal;
  line-height: 1.7;
}
.testimonial-attribution {
  display: block;
  font-weight: 700;
  color: var(--md-default-fg-color);
}
.testimonial-context {
  display: block;
  color: var(--md-default-fg-color--light);
}
.testimonial-source {
  display: inline-block;
  margin-top: 0.45rem;
  color: var(--testimonial-accent);
  font-size: 0.64rem;
  font-weight: 600;
}
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.testimonial-section {
  margin-top: 3rem;
  scroll-margin-top: 5rem;
}
.testimonials h2 {
  margin: 0 0 1.15rem;
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.testimonial-ratings {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
.testimonial-rating {
  padding: 1.2rem;
  border: 1px solid var(--testimonial-border);
  border-radius: 12px;
  background: var(--testimonial-tint);
}
.testimonial-score {
  color: var(--testimonial-accent);
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.04em;
}
.testimonial-score span {
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0;
}
.testimonial-rating p {
  margin: 0.5rem 0 0;
  font-size: 0.72rem;
  line-height: 1.6;
}
.testimonial-rating small {
  display: block;
  margin-top: 0.55rem;
  color: var(--md-default-fg-color--light);
  font-size: 0.65rem;
  line-height: 1.6;
}
.testimonial-footer {
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid var(--testimonial-border);
  font-size: 0.8rem;
}
@media screen and (max-width: 700px) {
  .testimonials ul.testimonial-brand-list {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .testimonial-brand-list .brand-oreilly { width: 96px; }
  .testimonial-brand-list .brand-mlcon { width: 116px; }
  .testimonial-grid,
  .testimonial-ratings {
    grid-template-columns: 1fr;
  }
  .testimonials .testimonial-card {
    padding: 1.2rem;
  }
}
</style>

<div class="testimonials">
<header>
  <p class="testimonial-eyebrow">Testimonials</p>
  <h1>In their words.</h1>
  <p class="testimonial-intro">Feedback from people who have joined my AI courses, conference talks, and hands-on workshops, or worked with me on their AI systems.</p>
  <p class="testimonial-note">Selected excerpts from participant surveys, LinkedIn messages, and emails. Names and identifying details are omitted for privacy. Excerpts are lightly edited for spelling and readability, with the original meaning preserved.</p>
</header>

<aside class="testimonial-brands" aria-label="Course and conference sources">
  <p>Feedback from courses and conferences at</p>
  <ul class="testimonial-brand-list">
    <li><a href="https://www.oreilly.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit O'Reilly">
      <img class="brand-oreilly brand-light" src="logos/oreilly-red.svg" alt="O'Reilly" width="128" height="24">
      <img class="brand-oreilly brand-dark" src="logos/oreilly-white.svg" alt="O'Reilly" width="128" height="24">
    </a></li>
    <li><a href="https://mlconference.ai/" target="_blank" rel="noopener noreferrer" aria-label="Visit MLCon">
      <img class="brand-mlcon brand-light" src="logos/mlcon-color.svg" alt="MLCon" width="148" height="59">
      <img class="brand-mlcon brand-dark" src="logos/mlcon-white.svg" alt="MLCon" width="148" height="44">
    </a></li>
    <li><a href="https://www.widsworldwide.org/" target="_blank" rel="noopener noreferrer">
      <img class="brand-mark" src="logos/wids.png" alt="" width="48" height="48">
      <span>WiDS</span>
    </a></li>
    <li><a href="https://www.renderatl.com/" target="_blank" rel="noopener noreferrer">
      <img class="brand-mark" src="logos/renderatl.png" alt="" width="48" height="48">
      <span>RenderATL</span>
    </a></li>
  </ul>
</aside>

<nav class="testimonial-jump" aria-label="Testimonial sections">
  <a href="#courses">O'Reilly courses</a>
  <a href="#conferences">Conference workshops</a>
  <a href="#messages">LinkedIn messages</a>
  <a href="#organisers-clients">Organisers &amp; clients</a>
</nav>

<figure class="testimonial-card testimonial-featured">
  <blockquote><p>“One of the best presentations and workshops of the entire week, with a very good example repo and very good knowledge of the topic and of the tools from the presenter, thank you, Apurva!”</p></blockquote>
  <figcaption>
    <span class="testimonial-attribution">Workshop participant · MLCon Munich 2026</span>
    <span class="testimonial-context">Tooling &amp; Patterns for Reliable AI-Powered Applications</span>
    <span class="testimonial-source">Post-event survey</span>
  </figcaption>
</figure>

<section class="testimonial-section" aria-labelledby="ratings-title">
  <h2 id="ratings-title">Selected session ratings</h2>
  <div class="testimonial-ratings">
    <div class="testimonial-rating">
      <div class="testimonial-score">4.75 <span>/ 5</span></div>
      <p><strong>Overall course rating</strong><br>Building with Jev and System One Models</p>
      <small>O'Reilly · October 2026<br>8 survey responses</small>
    </div>
    <div class="testimonial-rating">
      <div class="testimonial-score">4.71 <span>/ 5</span></div>
      <p><strong>Workshop quality</strong><br>Tooling &amp; Patterns for Reliable AI-Powered Applications</p>
      <small>MLCon Munich · 2026<br>14 participant ratings</small>
    </div>
    <div class="testimonial-rating">
      <div class="testimonial-score">5.0 <span>/ 5</span></div>
      <p><strong>Workshop quality</strong><br>Tooling &amp; Patterns for Reliable AI-Powered Applications</p>
      <small>MLCon London · 2026<br>6 participant ratings</small>
    </div>
  </div>
  <p class="testimonial-note">Each score reflects the session shown, based on participant surveys collected by the course or conference organiser.</p>
</section>

<section id="courses" class="testimonial-section" aria-labelledby="courses-title">
  <h2 id="courses-title">From O'Reilly courses</h2>
  <div class="testimonial-grid">
    <figure class="testimonial-card">
      <blockquote><p>“It made concrete the notion I had of using AI as a type of personal assistant to delegate tasks. I thought it might be possible, and in this event I was pointed in the right direction of how to make this a reality.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Course participant · O'Reilly</span>
        <span class="testimonial-context">Creating a Personalized Assistant with Claude Code · September 2026</span>
        <span class="testimonial-source">Post-course survey</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“The instructor (Apurva) is knowledgeable, presented the information clearly, and did a great job of handling both the time constraints and the student questions.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Course participant · O'Reilly</span>
        <span class="testimonial-context">Building with Jev and System One Models · October 2026</span>
        <span class="testimonial-source">Post-course survey · excerpt</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“It was a good introduction and demonstration to Jev and I have a much better knowledge about what it is and what kind of problems that it can help me with.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Course participant · O'Reilly</span>
        <span class="testimonial-context">Building with Jev and System One Models · October 2026</span>
        <span class="testimonial-source">Post-course survey</span>
      </figcaption>
    </figure>
  </div>
</section>

<section id="conferences" class="testimonial-section" aria-labelledby="conferences-title">
  <h2 id="conferences-title">From conference workshops</h2>
  <div class="testimonial-grid">
    <figure class="testimonial-card">
      <blockquote><p>“Apurva was amazing, incredibly knowledgeable, and helped put into perspective not just the power, but limitations of these systems, and how best to manage them.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Workshop participant · MLCon London 2026</span>
        <span class="testimonial-context">Tooling &amp; Patterns for Reliable AI-Powered Applications</span>
        <span class="testimonial-source">Post-event survey</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“Really good session, very knowledgeable speaker, good motivation, content and spirit.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Workshop participant · MLCon Munich 2026</span>
        <span class="testimonial-context">Tooling &amp; Patterns for Reliable AI-Powered Applications</span>
        <span class="testimonial-source">Post-event survey · excerpt</span>
      </figcaption>
    </figure>
  </div>
</section>

<section id="messages" class="testimonial-section" aria-labelledby="messages-title">
  <h2 id="messages-title">Messages after the session</h2>
  <div class="testimonial-grid">
    <figure class="testimonial-card">
      <blockquote><p>“I loved your presentation and your tutorial. I feel like you touched the right topics for the current scenario of AI. Autogen seems super cool. I was hooked throughout your presentation.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Conference participant · WiDS 2024</span>
        <span class="testimonial-source">LinkedIn message · excerpt</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“As a non-tech person, it was interesting to learn about APIs and the different tools you introduced.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Conference attendee · WiDS 2024</span>
        <span class="testimonial-source">LinkedIn message · excerpt</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“I attended your session about Agentic RAG today at Render ATL and found it incredibly insightful. I'd love to connect and continue learning from your work. Thanks for sharing your knowledge!”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Conference attendee · RenderATL 2025</span>
        <span class="testimonial-source">LinkedIn message · excerpt</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“It was a valuable learning experience, and I genuinely appreciate the way you explained things — it was super helpful.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Conference participant · MLCon 2025</span>
        <span class="testimonial-source">LinkedIn message · excerpt</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“The information shared in the presentation was very intuitive and helpful. I will be using the ChatGPT for the first time now.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Workshop participant · Vancouver 2024</span>
        <span class="testimonial-context">Applications with ChatGPT</span>
        <span class="testimonial-source">LinkedIn message · excerpt</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“Practical actionable advice. Nicely done.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">LLM session viewer · 2023</span>
        <span class="testimonial-source">LinkedIn message · excerpt</span>
      </figcaption>
    </figure>
  </div>
</section>

<section id="organisers-clients" class="testimonial-section" aria-labelledby="organisers-clients-title">
  <h2 id="organisers-clients-title">From organisers and clients</h2>
  <div class="testimonial-grid">
    <figure class="testimonial-card">
      <blockquote><p>“The depth, clarity, and practical framing came through clearly in the feedback we received.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">Conference organiser · GIDS 2026</span>
        <span class="testimonial-source">Email · excerpt</span>
      </figcaption>
    </figure>
    <figure class="testimonial-card">
      <blockquote><p>“We have a lot of gratitude for you to step in on such short notice and providing such clear, actionable guidance.”</p></blockquote>
      <figcaption>
        <span class="testimonial-attribution">AI consulting client · 2025</span>
        <span class="testimonial-source">Email · excerpt</span>
      </figcaption>
    </figure>
  </div>
</section>

<footer class="testimonial-footer">
  <p>Explore my <a href="../speaking/">talks and speaking experience</a> or <a href="../ai-workshops/">AI workshops for teams</a>.</p>
</footer>
</div>
