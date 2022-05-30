import styles from "./index.module.css";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Idea = (props: any) => {
  const { like, disLike, title, description, up, down, author = {} } = props;
  const _footerProps: object = {
    up,
    down,
    like,
    disLike,
  };
  const _bodyProps: object = {
    title,
    description,
  };
  return (
    <div className={styles.container}>
      <Header {...author} />
      <Body {..._bodyProps} />
      <Footer {..._footerProps} />
    </div>
  );
};
export default Idea;
