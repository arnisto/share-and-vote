import Image from "next/image";

import styles from "./index.module.css";

const TopIdea = (props: any) => {
  const { title = "Title", author = {} } = props;
  const description: String =
    "We are living in a technological golden age, yet live busier, more difficult lives than our recent ancestors. Loneliness, depression and other related mental health conditions are compromising our general health and wellbeing. People in some first world countries are forced to compete on a day to day basis just to be able to survive, without falling into poverty or homelessness. Inequality is increasing and the gap between the rich and the poor is ever widening. While towns and cities are becoming smarter, the people who live in them are often forg ";
  return (
    <div className={styles.container}>
      <div className={styles.author}>
        <div className={styles.avatar}>
          <Image
            src={author?.avatar || "/unkownMember.jpg"}
            layout="fill"
            objectFit="contain"
            alt="author s avatar"
          />
        </div>
        <div>
          <span>L.Gaidi</span>
          <br />
          <span>100k</span>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <b>{title}</b>
        </div>
        <div>
          {description.substring(0, 100) +
            (description?.length > 100 ? "..." : null)}
        </div>
      </div>
    </div>
  );
};
export default TopIdea;
