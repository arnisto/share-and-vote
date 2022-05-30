import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { toggleAuthor } from "../../../redux/main/actions";

import styles from "./index.module.css";
const Author = (props: any) => {
  const {} = props;
  const dispatch = useDispatch();
  const { authors, lamjed } = useSelector((state: any) => state.main);
  const author = lamjed ? authors[0] : authors["1"];
  const { id, firstName, lastName, avatar } = author;
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Image
          src={avatar}
          layout="fill"
          objectFit="contain"
          alt="author is avatar"
        />
      </div>
      <div>
        <span>
          <b>
            <i>{`${lastName} ${firstName}`}</i>
          </b>
        </span>
      </div>
      <div className={styles["stats"]}>
        <div className={styles["num-ideas"]}>
          <span>
            <b>6,705</b>
          </span>
          <br />
          <span>Idea</span>
        </div>
        <div className={styles["rank"]}>
          <span>
            <b>1</b>
          </span>
          <br />
          <span>rank</span>
        </div>
      </div>
      <div>
        My Profile
        <label className="switch">
          <input onChange={() => dispatch(toggleAuthor())} type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
};
export default Author;
