import styles from "./Footer.module.css";
import Image from "next/image";
const Footer = (props: any) => {
  const { up, down } = props;
  return (
    <div className={styles.container}>
      <button>
        Up
        {up ?? up}
      </button>
      <button>Down {down ?? down}</button>
      <button>Comment to ameliiorate</button>
      <button>Share</button>
    </div>
  );
};
export default Footer;
