import styles from "./index.module.css";
const Search = (props: any) => {
  const {} = props;
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search now for ..."
      />
    </div>
  );
};
export default Search;
