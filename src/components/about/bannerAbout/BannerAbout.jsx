import React from "react";
import styles from "../../../styles/about/BannerAbout.module.scss";
import global from "../../../styles/global.module.scss";

const BannerAbout = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about__prev}>
        <div className={global.container}>
          <h2 className={styles.about__prevTitle}>About Us</h2>
        </div>
      </div>
      <div className={styles.about__content}>
        <div className={global.container}>
          <h3 className={styles.about__title}>
            Balance in the simple through an informed marriage of design,
            functional and craft
          </h3>
          <div className={styles.about__text}>
            <p>
              Vexillologist vape microdosing freegan pork belly deep v direct
              trade cray single-origin coffee street art. Viral shaman mustache
              master cleanse, pour-over affogato poutine copper mug marfa fanny
              pack normcore. Lo-fi pop-up banjo portland, echo park hammock
              chillwave literally post-ironic ramps subway tile kitsch. Shaman
              tumblr fixie echo park street art. Enamel pin vaporware wayfarers,
              organic succulents hella sustainable cardigan.
            </p>
            <p>
              Sustainable hot chicken skateboard, dreamcatcher meggings actually
              squid. Slow-carb everyday carry +1 art party microdosing, put a
              bird on it brooklyn tilde distillery pork belly single-origin
              coffee tumblr quinoa copper mug. Affogato cold-pressed unicorn,
              viral intelligentsia leggings raw denim kombucha tote bag
              messenger bag chambray vape coloring book scenester. Activated
              charcoal wayfarers church-key tote bag synth brunch. Retro
              cornhole
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerAbout;
