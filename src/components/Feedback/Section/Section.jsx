import styles from '../Section/section.module.css';

const Section = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h4 className={styles.title}>{title}</h4>
      {children}
    </div>
  );
};

export default Section;
