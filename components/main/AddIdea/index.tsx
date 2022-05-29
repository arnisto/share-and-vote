import styles from "./index.module.css";
const AddIdea = (props: any) => {
  const {} = props;
  return (
    <div className={styles.container}>
      <input
        className={styles["ipt-title"]}
        type="text "
        placeholder="Title Of the idea"
      />
      <textarea
        className={styles["ipt-desc"]}
        placeholder="more details please (description)"
        name=""
        id=""
      />
      <div className={styles["ipt-file"]}>
        <span>
          <b>
            <i>you can join a file here</i>
          </b>
        </span>
        <input type="file" name="" id="" />
      </div>
    </div>
  );
};
export default AddIdea;
