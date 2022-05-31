import styles from "./index.module.css";

import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import WidgetsIcon from "@mui/icons-material/Widgets";
import MoreIcon from "@mui/icons-material/More";

const Nav = (props: any) => {
  const {} = props;
  const _listOfIcons: any = [
    <WidgetsIcon />,
    <WidgetsIcon />,
    <NotificationsIcon />,
    <MoreIcon />,
  ];
  return (
    <div className={styles.container}>
      {_listOfIcons?.map((icon: any, index: any) => (
        <div key={index} className={styles.icon}>
          {icon}
        </div>
      ))}
    </div>
  );
};
export default Nav;
