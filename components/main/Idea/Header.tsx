import styles from "./Header.module.css";
import Image from "next/image";
const Header = (props: any) => {
  const {
    firstName = "Unkown",
    lastName = "Unkown",
    avatar = "/unkownMember.jpg",
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles["author-infos"]}>
        <div className={styles.avatar}>
          <Image
            src={avatar || "/unkownMember.jpg"}
            layout="fill"
            objectFit="contain"
            alt="author is avatar"
          />
        </div>
        <div>
          lamjed gaidi
          <br />
          @lamjed
        </div>
      </div>
      <div>more</div>
    </div>
  );
};
export default Header;
