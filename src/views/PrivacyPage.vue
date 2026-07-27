<template>
  <div class="privacy-page">
    <div class="container container--narrow">
      <header class="page-header text-center">
        <h1>{{ t('privacy.title') }}</h1>
        <p class="page-lead">{{ t('privacy.lastUpdated') }}</p>
      </header>

      <p class="lang-note">This page is available in English only.</p>

      <section class="legal-section">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Elden Ring Guide ("we," "our," or "us"). We are committed to protecting your privacy
          and ensuring that your personal information is handled responsibly. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>
        <p>
          Please read this policy carefully. By accessing or using our website, you consent to the data
          practices described in this policy.
        </p>
      </section>

      <section class="legal-section">
        <h2>2. Information We Collect</h2>
        <h3>2.1 Personal Information</h3>
        <p>
          We may collect personal information that you voluntarily provide to us when you:
        </p>
        <ul>
          <li>Fill out our contact form</li>
          <li>Subscribe to our newsletter (if applicable)</li>
          <li>Send us an email</li>
        </ul>
        <p>
          This information may include your name, email address, and any other information you choose to provide.
        </p>

        <h3>2.2 Automatically Collected Information</h3>
        <p>
          When you visit our website, we may automatically collect certain information about your device
          and your usage of our website, including:
        </p>
        <ul>
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring website</li>
          <li>Pages visited and time spent on each page</li>
          <li>Device information (screen resolution, etc.)</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2>3. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to enhance your experience on our website.
          Cookies are small text files that are stored on your device when you visit a website.
        </p>

        <h3>3.1 Types of Cookies We Use</h3>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly. These cannot be disabled.</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
          <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements and track ad performance. These are set by our advertising partners, including Google AdSense.</li>
        </ul>

        <h3>3.2 Google AdSense and Advertising</h3>
        <p>
          We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to
          serve ads based on your prior visits to our website and other websites. You can opt out of
          personalized advertising by visiting
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener">Google Ads Settings</a>.
        </p>
        <p>
          Google's use of advertising cookies enables it and its partners to serve ads based on your visit
          to our site and/or other sites on the Internet. You may opt out of personalized advertising by
          visiting <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener">About Ads</a>.
        </p>

        <h3>3.3 Managing Cookies</h3>
        <p>
          You can control and/or delete cookies as you wish. You can delete all cookies that are already
          on your device, and you can set most browsers to prevent them from being placed. However, if you
          do this, you may have to manually adjust some preferences every time you visit our site, and some
          services may not function properly.
        </p>
      </section>

      <section class="legal-section">
        <h2>4. How We Use Your Information</h2>
        <p>We use the information we collect for the following purposes:</p>
        <ul>
          <li>To provide and maintain our website</li>
          <li>To improve user experience</li>
          <li>To analyze usage patterns and trends</li>
          <li>To serve relevant advertisements through Google AdSense</li>
          <li>To respond to your inquiries and provide customer support</li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section class="legal-section">
        <h2>5. Third-Party Services</h2>
        <p>
          Our website may use third-party services that collect information used to identify you.
          These include:
        </p>
        <ul>
          <li><strong>Google AdSense:</strong> For serving advertisements</li>
          <li><strong>Google Analytics:</strong> For analyzing website traffic (if applicable)</li>
          <li><strong>Cloudflare:</strong> For content delivery and security</li>
        </ul>
        <p>
          Each third-party service has its own privacy policy. We encourage you to review their policies.
        </p>
      </section>

      <section class="legal-section">
        <h2>6. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction. However, no method of
          transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee
          absolute security.
        </p>
      </section>

      <section class="legal-section">
        <h2>7. Your Rights</h2>
        <p>Depending on your location, you may have the following rights regarding your personal data:</p>
        <ul>
          <li>The right to access the personal information we hold about you</li>
          <li>The right to correct inaccurate or incomplete information</li>
          <li>The right to request deletion of your personal information</li>
          <li>The right to object to or restrict processing of your data</li>
          <li>The right to data portability</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us using the information provided below.
        </p>
      </section>

      <section class="legal-section">
        <h2>8. Children's Privacy</h2>
        <p>
          Our website is not directed to children under the age of 13. We do not knowingly collect personal
          information from children under 13. If we become aware that we have collected personal information
          from a child under 13, we will take steps to delete that information promptly.
        </p>
      </section>

      <section class="legal-section">
        <h2>9. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting
          the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review
          this Privacy Policy periodically for any changes.
        </p>
      </section>

      <section class="legal-section">
        <h2>10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p>
          Email: <a href="mailto:privacy@eldenringguide.com">privacy@eldenringguide.com</a>
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
.privacy-page {
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
