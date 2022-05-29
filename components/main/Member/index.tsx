import styles from "./index.module.css";
import Image from "next/image";
const Member = (props: any) => {
  const {
    firstName = "Unkown",
    lastName = "Unkown",
    avatar = "/unkownMember.jpg",
  } = props;
  return (
    <div className={styles.container}>
      <div className={styles.member}>
        <div className={styles.avatar}>
          <Image
            src={avatar || "/unkownMember.jpg"}
            layout="fill"
            objectFit="contain"
            alt="Picture of a member"
          />
        </div>
        <div>
          <span>Lamjed Gaidi</span>
          <br />
          <span>@LamjedGaidi</span>
        </div>
      </div>
      <button
        className={styles.follow}
        onClick={() => alert("you gonna follow him in an updated version")}
      >
        Follow
      </button>
    </div>
  );
};
export default Member;
