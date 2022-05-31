import styles from "./Body.module.css";

const Body = (props: any) => {
  const { title, description } = props;
  return (
    <div className={styles.container}>
      <div>
        <h3>{title || "As children, we were promised a better future."}</h3>
      </div>
      <div>
        {`${
          description ||
          `We are living in a technological golden age, yet live busier, more
        difficult lives than our recent ancestors. Loneliness, depression and
        other related mental health conditions are compromising our general
        health and wellbeing. People in some first world countries are forced to
        compete on a day to day basis just to be able to survive, without
        falling into poverty or homelessness. Inequality is increasing and the
        gap between the rich and the poor is ever widening. While towns and
        cities are becoming smarter, the people who live in them are often
        forgotten`
        }`}
      </div>
    </div>
  );
};
export default Body;
