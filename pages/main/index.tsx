import styles from "./index.module.css";

import Author from "../../components/main/Author";
import Idea from "../../components/main/Idea";
import Member from "../../components/main/Member";
import Nav from "../../components/main/Nav";
import Search from "../../components/main/Search";
import TopIdea from "../../components/main/TopIdea";
import AddIdea from "../../components/main/AddIdea";

const Main = (props: any) => {
  const {} = props;

  const _topIdeas = [
    {
      title: "#idea_num_1",
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
      },
    },
    {
      title: "#idea_num_2",
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_960_720.png",
      },
    },
    {
      title: "#idea_num_3",
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
      },
    },
    {
      title: "#idea_num_4",
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
      },
    },
    {
      title: "#idea_num_5",
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770_960_720.jpg",
      },
    },
  ];
  const _ideas = [
    {
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
      },
    },
    {
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_960_720.png",
      },
    },
    {
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
      },
    },
    {
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
      },
    },
    {
      up: 10,
      down: 1,
      author: {
        firstName: "lamjed",
        lastName: "gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770_960_720.jpg",
      },
    },
  ];
  const _members = [
    {
      firstName: "lamjed",
      lastName: "gaidi",
      avatar:
        "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
    },
    {
      firstName: "lamjed",
      lastName: "gaidi",
      avatar:
        "https://cdn.pixabay.com/photo/2012/04/18/23/36/boy-38262_960_720.png",
    },
    {
      firstName: "lamjed",
      lastName: "gaidi",
      avatar:
        "https://cdn.pixabay.com/photo/2017/06/26/02/47/man-2442565_960_720.jpg",
    },
    {
      firstName: "lamjed",
      lastName: "gaidi",
      avatar:
        "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_960_720.jpg",
    },
    {
      firstName: "lamjed",
      lastName: "gaidi",
      avatar:
        "https://cdn.pixabay.com/photo/2015/07/20/13/01/man-852770_960_720.jpg",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles["left-bar"]}>
        <Search />
        <Author />
        <p>Other members</p>
        {_members?.map((member, index) => (
          <Member {...member} key={index} />
        ))}
      </div>
      <div className={styles["ideas-container"]}>
        <AddIdea />
        {_ideas?.map((idea, index) => (
          <Idea {...idea} key={index} />
        ))}
      </div>
      <div className={styles["top-ideas"]}>
        <Nav />
        top ideas :
        {_topIdeas?.map((idea, index) => (
          <TopIdea {...idea} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
