import styles from "./HomeLayout.module.css";
import HeaderComponent from "../HeaderComponent";
import MainCard from "../ui/MainCard";
import VerticalCard from "../ui/VerticalCard";
import BigCard from "../ui/BigCard";
import SmallCard from "../ui/SmallCard";
import HorizontalCard from "../ui/HorizontalCard";
import ModalCard from "../ui/ModalCard";
import FooterComponent from "../FooterComponent";

export default function HomeLayout({
  showModal,
  openModal,
  setOpenModal,
  modalData,
}) {
  return (
    <div className={styles.layout}>
      <HeaderComponent />

      {/* main card component  */}
      <section className={styles.mainSection}>
        <MainCard props={{ showModal }} />
      </section>

      {/* Vertical card component */}
      <section className={`${styles.verticalSection} ${styles.space}`}>
        <div className={styles.sectionTitle}>
          <h3 className={styles.h3}>For you</h3>
        </div>
        <div className={styles.verticalContainer}>
          <VerticalCard props={{ showModal }} />
        </div>
      </section>

      {/* Big and small card component */}
      <section className={`${styles.bigSmallSection} ${styles.space}`}>
        <div className={styles.sectionTitle}>
          <h3 className={styles.h3}>Recommended News</h3>
        </div>

        <div className={styles.bigSmallContainer}>
          <BigCard props={{ showModal }} />
          <div className={styles.smallContainer}>
            <SmallCard props={{ showModal }} />
          </div>
        </div>
      </section>

      {/* Horizontal card component */}
      <section className={`${styles.horizontalSection} ${styles.space}`}>
        <div className={styles.sectionTitle}>
          <h3 className={styles.h3}>More news</h3>
        </div>
        <div className={styles.horizontalContainer}>
          <HorizontalCard props={{ showModal }} />
        </div>
      </section>

      {/* modal component  */}
      <ModalCard props={{ openModal, setOpenModal, modalData }} />

      {/* footer component */}
      <>
        <FooterComponent />
      </>
    </div>
  );
}
