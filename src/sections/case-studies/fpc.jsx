import React from 'react';
import styles from './fpcstyles.module.css';

function FPC() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>FPC Case Study</h1>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Overview</h2>
        <p>
          Our project aimed to design and develop a user-centered web platform, initially called 
          <strong> “BC Healthcare Resources,”</strong> to help family and professional caregivers efficiently access community and healthcare resources across British Columbia. 
          Caregivers often face burnout, isolation, and a lack of support, making it essential to create an intuitive, supportive, and easily navigable resource hub.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Goals</h2>
        <ul className={styles.list}>
          <li>Provide a comprehensive platform for finding caregiver-specific resources, such as healthcare, educational, and social support tools.</li>
          <li>Highlight resources and tools for caregivers to prioritize their well-being.</li>
          <li>Streamline access to relevant content, accommodating caregivers' stressors and time constraints.</li>
          <li>Drive retention through newsletters, personalized content, and an approachable design.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Challenges</h2>
        <ul className={styles.list}>
          <li><strong>Naming & Branding:</strong> The title “BC Healthcare Resources” caused confusion, as it implied government-provided services rather than community-based support.</li>
          <li><strong>Complex User Needs:</strong> Balancing caregivers’ self-care needs with resources for loved ones required careful prioritization.</li>
          <li><strong>Broad Audience:</strong> Addressing the needs of both family caregivers and healthcare professionals necessitated versatile solutions.</li>
          <li><strong>Limited Data:</strong> Collecting user-specific data for continuous improvement presented challenges.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>My Role</h2>
        <p>As the Lead UX/UI Designer, I contributed to every stage of the project, including:</p>
        <ul className={styles.list}>
          <li>Research Synthesis: Translating user research findings into actionable design solutions.</li>
          <li>Wireframing & Prototyping: Creating low- and high-fidelity prototypes to guide development.</li>
          <li>Visual Design: Establishing branding elements and an inviting visual identity.</li>
          <li>Usability Testing: Conducting tests and iterating on feedback to ensure accessibility and intuitive design.</li>
          <li>Collaboration: Working closely with developers to implement features and refine functionality.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Discover</h2>
        <h3 className={styles.smallTitle}>Understanding Caregiver Needs</h3>
        <p>Through user interviews, we identified several key insights:</p>
        <ul className={styles.list}>
          <li><strong>Confusing Title:</strong> Users found the title misleading, suggesting it was exclusively for healthcare-provided services.</li>
          <li><strong>Cost Sensitivity:</strong> A filter for cost was critical for users seeking affordable resources.</li>
          <li><strong>Self-Care Needs:</strong> Caregivers desired resources for both self-care and caregiving.</li>
          <li><strong>Ease of Navigation:</strong> Users valued clean designs but sought a more engaging homepage.</li>
          <li><strong>Local Chapters:</strong> Users wanted clearer visibility of regional chapters for organizations like the Alzheimer Society of BC.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Define</h2>
        <h3 className={styles.smallTitle}>User Personas</h3>
        <ul className={styles.list}>
          <li><strong>Primary Users:</strong> Family caregivers seeking emotional and practical support.</li>
          <li><strong>Secondary Users:</strong> Healthcare professionals and community organizations connecting caregivers to resources.</li>
        </ul>
        <h3 className={styles.smallTitle}>Key Features</h3>
        <ul className={styles.list}>
          <li>Filters by cost, type, and location for quick access.</li>
          <li>Tools and tips for caregivers to support their mental health.</li>
          <li>Clear listings for local support groups.</li>
          <li>Welcoming colors and themes to enhance user experience.</li>
          <li>Testimonials and success stories for trust-building.</li>
          <li>Regular updates through newsletters.</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Results & Reflections</h2>
        <p>
          The platform received positive feedback for its clean design and thoughtful resource categorization. 
          Caregivers particularly appreciated the focus on self-care and local support options. 
          Moving forward, the team aims to:
        </p>
        <ul className={styles.list}>
          <li>Implement a newsletter feature.</li>
          <li>Gather user feedback for continuous improvements.</li>
          <li>Expand and update resource listings to maintain relevance.</li>
        </ul>
      </section>
    </section>
  );
}

export default FPC;
