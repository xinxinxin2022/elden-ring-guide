<template>
  <div class="terms-page">
    <div class="container container--narrow">
      <header class="page-header text-center">
        <h1>{{ t('terms.title') }}</h1>
        <p class="page-lead">{{ t('terms.lastUpdated') }}</p>
      </header>

      <p class="lang-note">This page is available in English only.</p>

      <section class="legal-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using Elden Ring Guide ("the Website"), you accept and agree to be bound by
          these Terms of Service ("Terms"). If you do not agree to these Terms, you should not use this Website.
        </p>
        <p>
          We reserve the right to modify these Terms at any time. Continued use of the Website after any
          such changes constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section class="legal-section">
        <h2>2. Description of Service</h2>
        <p>
          Elden Ring Guide is a fan-created website providing guides, walkthroughs, tips, and strategies
          for the video game Elden Ring. The content on this Website is created by fans and is not
          affiliated with or endorsed by FromSoftware Inc. or Bandai Namco Entertainment Inc.
        </p>
      </section>

      <section class="legal-section">
        <h2>3. Intellectual Property</h2>
        <h3>3.1 Our Content</h3>
        <p>
          The original content on this Website (including but not limited to articles, guides, images
          created by us, and design) is owned by Elden Ring Guide and is protected by applicable
          intellectual property laws.
        </p>

        <h3>3.2 Third-Party Content</h3>
        <p>
          Elden Ring™ and all related content, including but not limited to characters, locations, items,
          and lore, are trademarks and/or registered trademarks of FromSoftware Inc. and Bandai Namco
          Entertainment Inc. We do not claim ownership of any third-party intellectual property.
        </p>
        <p>
          Any third-party content referenced or linked on our Website remains the property of its
          respective owners. We make no claim to ownership of such content.
        </p>
      </section>

      <section class="legal-section">
        <h2>4. User Conduct</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Website for any unlawful purpose</li>
          <li>Reproduce, distribute, or exploit content from this Website without our written permission</li>
          <li>Attempt to gain unauthorized access to any part of the Website</li>
          <li>Interfere with or disrupt the Website or servers</li>
          <li>Scrape, data mine, or use automated systems to extract content without permission</li>
          <li>Impersonate any person or entity, or falsely state your affiliation with any person or entity</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2>5. Advertising</h2>
        <p>
          The Website displays advertisements provided by third-party advertising networks, including
          Google AdSense. By using the Website, you acknowledge and agree that:
        </p>
        <ul>
          <li>Advertisements may be targeted based on your interests</li>
          <li>We are not responsible for the content of any advertisements</li>
          <li>Your interactions with advertisers are governed by the advertiser's terms and privacy policy</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2>6. Disclaimer of Warranties</h2>
        <p>
          The Website is provided on an "AS IS" and "AS AVAILABLE" basis without any warranties of any
          kind, either express or implied. We do not warrant that:
        </p>
        <ul>
          <li>The Website will be uninterrupted, secure, or error-free</li>
          <li>The information on the Website is complete, accurate, or current</li>
          <li>Any defects in the Website will be corrected</li>
        </ul>
        <p>
          Game strategies and information are based on our experiences and research. We cannot guarantee
          that all strategies will work in every situation or game version.
        </p>
      </section>

      <section class="legal-section">
        <h2>7. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Elden Ring Guide shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising out of or relating to your use
          of the Website.
        </p>
      </section>

      <section class="legal-section">
        <h2>8. External Links</h2>
        <p>
          The Website may contain links to third-party websites. We are not responsible for the content
          or practices of these websites. The inclusion of any link does not imply endorsement by us.
        </p>
      </section>

      <section class="legal-section">
        <h2>9. Fair Use</h2>
        <p>
          This Website may contain copyrighted material use of which is not always specifically authorized
          by the copyright owner. We believe this constitutes a "fair use" of any such copyrighted material
          for purposes of commentary, criticism, and educational content related to video games.
        </p>
      </section>

      <section class="legal-section">
        <h2>10. Governing Law</h2>
        <p>
          These Terms shall be governed by and construed in accordance with applicable local laws, without
          regard to conflict of law provisions.
        </p>
      </section>

      <section class="legal-section">
        <h2>11. Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions
          shall continue in full force and effect.
        </p>
      </section>

      <section class="legal-section">
        <h2>12. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be posted on this page
          with an updated "Last updated" date. Your continued use of the Website after changes constitutes
          acceptance of the modified Terms.
        </p>
      </section>

      <section class="legal-section">
        <h2>13. Contact Information</h2>
        <p>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:legal@eldenringguide.com">legal@eldenringguide.com</a>
        </p>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style scoped>
.terms-page {
  padding: 60px 24px 80px;
}

.page-header {
  margin-bottom: 48px;
}

.page-header h1 {
  font-family: var(--font-heading);
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-gold-bright);
  margin-bottom: 12px;
}

.page-lead {
  font-family: var(--font-ui);
  font-size: 0.95rem;
  color: var(--color-text-muted);
}

.legal-section {
  margin-bottom: 36px;
}

.legal-section h2 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--color-gold);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--color-border);
}

.legal-section h3 {
  font-family: var(--font-heading);
  font-size: 1.15rem;
  color: var(--color-gold-bright);
  margin-top: 20px;
  margin-bottom: 12px;
}

.legal-section p {
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 12px;
}

.legal-section ul {
  padding-left: 20px;
  margin-bottom: 12px;
}

.legal-section li {
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 6px;
  color: var(--color-text);
}

.legal-section a {
  color: var(--color-gold);
  text-decoration: underline;
}

.lang-note {
  font-family: var(--font-ui);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--color-text-muted);
  text-align: center;
  margin-bottom: 32px;
  padding: 12px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  background: var(--color-bg-card);
}
</style>
