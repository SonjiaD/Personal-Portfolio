import React, { useState } from 'react';
import styles from './fpcstyles.module.css'; // Assuming your CSS module is correctly linked
import Lightbox from 'react-image-lightbox'; // Install this: npm install react-image-lightbox
import 'react-image-lightbox/style.css'; // Import Lightbox styles

import case1 from '../../assets/case1.svg';
import case2 from '../../assets/case2.svg';
import case3 from '../../assets/case3.svg';
import case4 from '../../assets/case4.svg';


function FPC() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Array of image URLs for the gallery
  const images = [case1, case2, case3, case4];


  return (
    <section className={styles.container}>
      <h1 className={styles.title}>FPC Case Study</h1>

      {/* Overview Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Overview</h2>
        <p>
          Our project aimed to design and develop a user-centered web platform, initially called
          <strong> “BC Healthcare Resources,”</strong> to help family and professional caregivers efficiently access community and healthcare resources across British Columbia.
          Caregivers often face burnout, isolation, and a lack of support, making it essential to create an intuitive, supportive, and easily navigable resource hub.
        </p>
      </section>

      {/* Goals Section */}
      <section className={styles.section}>
        <h2 className={styles.subTitle}>Goals</h2>
        <div className={styles.bulletPoints}>
          <p>• Provide a comprehensive platform for finding caregiver-specific resources, such as healthcare, educational, and social support tools.</p>
          <p>• Highlight resources and tools for caregivers to prioritize their well-being.</p>
          <p>• Streamline access to relevant content, accommodating caregivers' stressors and time constraints.</p>
          <p>• Drive retention through newsletters, personalized content, and an approachable design.</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className={styles.section}>
        <h2 className={styles.h2}>Case Studies Gallery</h2>
        <div className={styles.gallery}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Case Study ${index + 1}`}
              className={styles.galleryImage}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
          ))}
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % images.length)
            }
          />
        )}
      </section>
      

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Challenges</h2>
        <div className={styles.bulletPoints}>
          <p><strong>• Naming & Branding:</strong> The title “BC Healthcare Resources” caused confusion, as it implied government-provided services rather than community-based support.</p>
          <p><strong>• Complex User Needs:</strong> Balancing caregivers’ self-care needs with resources for loved ones required careful prioritization.</p>
          <p><strong>• Broad Audience:</strong> Addressing the needs of both family caregivers and healthcare professionals necessitated versatile solutions.</p>
          <p><strong>• Limited Data:</strong> Collecting user-specific data for continuous improvement presented challenges.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>My Role</h2>
        <p>As the Lead UX/UI Designer, I contributed to every stage of the project, including:</p>
        <div className={styles.bulletPoints}>
          <p>• Research Synthesis: Translating user research findings into actionable design solutions.</p>
          <p>• Wireframing & Prototyping: Creating low- and high-fidelity prototypes to guide development.</p>
          <p>• Visual Design: Establishing branding elements and an inviting visual identity.</p>
          <p>• Usability Testing: Conducting tests and iterating on feedback to ensure accessibility and intuitive design.</p>
          <p>• Collaboration: Working closely with developers to implement features and refine functionality.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Discover</h2>
        <h3 className={styles.smallTitle}>Understanding Caregiver Needs</h3>
        <p>Through user interviews, we identified several key insights:</p>
        <div className={styles.bulletPoints}>
          <p><strong>• Confusing Title:</strong> Users found the title misleading, suggesting it was exclusively for healthcare-provided services.</p>
          <p><strong>• Cost Sensitivity:</strong> A filter for cost was critical for users seeking affordable resources.</p>
          <p><strong>• Self-Care Needs:</strong> Caregivers desired resources for both self-care and caregiving.</p>
          <p><strong>• Ease of Navigation:</strong> Users valued clean designs but sought a more engaging homepage.</p>
          <p><strong>• Local Chapters:</strong> Users wanted clearer visibility of regional chapters for organizations like the Alzheimer Society of BC.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Define</h2>
        <h3 className={styles.smallTitle}>User Personas</h3>
        <div className={styles.bulletPoints}>
          <p><strong>• Primary Users:</strong> Family caregivers seeking emotional and practical support.</p>
          <p><strong>• Secondary Users:</strong> Healthcare professionals and community organizations connecting caregivers to resources.</p>
        </div>
        <h3 className={styles.smallTitle}>Key Features</h3>
        <div className={styles.bulletPoints}>
          <p>• Filters by cost, type, and location for quick access.</p>
          <p>• Tools and tips for caregivers to support their mental health.</p>
          <p>• Clear listings for local support groups.</p>
          <p>• Welcoming colors and themes to enhance user experience.</p>
          <p>• Testimonials and success stories for trust-building.</p>
          <p>• Regular updates through newsletters.</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subTitle}>Results & Reflections</h2>
        <p>
          The platform received positive feedback for its clean design and thoughtful resource categorization. 
          Caregivers particularly appreciated the focus on self-care and local support options. 
          Moving forward, the team aims to:
        </p>
        <div className={styles.bulletPoints}>
          <p>• Implement a newsletter feature.</p>
          <p>• Gather user feedback for continuous improvements.</p>
          <p>• Expand and update resource listings to maintain relevance.</p>
        </div>
      </section>
    </section>
  );
}
export default FPC;
