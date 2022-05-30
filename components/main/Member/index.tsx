import styles from "./index.module.css";
import Image from "next/image";
const Member = (props: any) => {
  const {
    firstName = "Unkown",
    lastName = "Unkown",
    avatar = "/unkownMember.jpg",
    followers,
    following,
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
      <button className={styles.follow} onClick={() => following()}>
        {followers?.includes(1) ? "Following" : "Follow"}
      </button>
    </div>
  );
};
export default Member;
