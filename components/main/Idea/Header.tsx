import Image from "next/image";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import styles from "./Header.module.css";

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
        <div className={styles.infos}>
          <span className={styles.name}>
            <b>
              <i>{`${lastName} ${firstName}`}</i>
            </b>
          </span>
          <br />
          <span className={styles.alt}>{`@${lastName}${firstName}`}</span>
        </div>
      </div>
      <div>
        <MoreHorizIcon />
      </div>
    </div>
  );
};
export default Header;
