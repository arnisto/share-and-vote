import styles from "./index.module.css";
import Image from "next/image";
const Author = (props: any) => {
  const {} = props;
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src={
            "https://cdn.pixabay.com/photo/2012/11/28/01/29/man-67467_960_720.jpg"
          }
          layout="fill"
          objectFit="contain"
          alt="author is avatar"
        />
      </div>
      <div>
        <span>
          <b>
            <i>Lamjed Gaidi</i>
          </b>
        </span>
      </div>
      <div className={styles["stats"]}>
        <div className={styles["num-ideas"]}>
          <span>
            <b>6,705</b>
          </span>
          <br />
          <span>Idea</span>
        </div>
        <div className={styles["rank"]}>
          <span>
            <b>1</b>
          </span>
          <br />
          <span>rank</span>
        </div>
      </div>
      <div>My Profile</div>
    </div>
  );
};
export default Author;
