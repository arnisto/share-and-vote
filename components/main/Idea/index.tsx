import styles from "./index.module.css";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Idea = (props: any) => {
  const { up, down, author = {} } = props;
  const _footerProps: object = {
    up,
    down,
  };
  return (
    <div className={styles.container}>
      <Header {...author} />
      <Body />
      <Footer {..._footerProps} />
    </div>
  );
};
export default Idea;
