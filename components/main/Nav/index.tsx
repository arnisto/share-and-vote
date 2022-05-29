import styles from "./index.module.css";

import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MoreIcon from "@mui/icons-material/More";

const Nav = (props: any) => {
  const {} = props;
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <WidgetsIcon />
      </div>
      <div className={styles.icon}>
        <ChatIcon />
      </div>
      <div className={styles.icon}>
        <NotificationsIcon />
      </div>
      <div className={styles.icon}>
        <MoreIcon />
      </div>
    </div>
  );
};
export default Nav;
