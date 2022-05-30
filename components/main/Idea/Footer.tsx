import ForumIcon from "@mui/icons-material/Forum";
import ShareIcon from "@mui/icons-material/Share";

import styles from "./Footer.module.css";

const Footer = (props: any) => {
  const { up, down, like, disLike } = props;
  return (
    <div className={styles.container}>
      <button className={styles.icon} onClick={() => like()}>
        Up
        {up?.length > 0 ? up?.length : null}
      </button>
      <button className={styles.icon} onClick={() => disLike()}>
        Down {down?.length > 0 ? down?.length : null}
      </button>
      <div className={styles.icon}>
        <ForumIcon />
      </div>
      <div className={styles.icon}>
        <ShareIcon />
      </div>
    </div>
  );
};
export default Footer;
