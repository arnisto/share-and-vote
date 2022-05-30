import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addIdea } from "../../../redux/main/actions";

import styles from "./index.module.css";

const AddIdea = (props: any) => {
  const {} = props;
  const dispatch = useDispatch();
  const { authors, lamjed } = useSelector((state: any) => state.main);
  const author = lamjed ? authors[0] : authors[1];
  const [newIdea, setNewIdea] = useState({
    title: "",
    description: "",
    author,
  });
  return (
    <div className={styles.container}>
      <input
        className={styles["ipt-title"]}
        type="text "
        placeholder="Title Of the idea"
        onChange={(event) =>
          setNewIdea({ ...newIdea, title: event.target.value })
        }
      />
      <textarea
        className={styles["ipt-desc"]}
        placeholder="more details please (description)"
        name=""
        id=""
        onChange={(event) =>
          setNewIdea({ ...newIdea, description: event.target.value })
        }
      />
      <div className={styles["ipt-file"]}>
        <button
          className={styles["add-btn"]}
          onClick={() => dispatch(addIdea(newIdea))}
        >
          add new idea
        </button>
      </div>
    </div>
  );
};
export default AddIdea;
