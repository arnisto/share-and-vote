import * as t from "../types";
const main = (
  state = {
    lamjed: true,
    authors: [
      {
        id: 1,
        firstName: "Lamjed",
        lastName: "Gaidi",
        avatar:
          "https://cdn.pixabay.com/photo/2012/11/28/01/29/man-67467_960_720.jpg",
      },
      {
        id: 2,
        firstName: "Aaron",
        lastName: "Sarginson",
        avatar: "/Sarginson.jpg",
      },
    ],
    members: [
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
    ],
    topIdeas: [
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
    ],
    ideas: [
      {
        author: {
          id: 1,
          firstName: "Lamjed",
          lastName: "Gaidi",
          avatar:
            "https://cdn.pixabay.com/photo/2012/11/28/01/29/man-67467_960_720.jpg",
        },
      },
      {
        author: {
          id: 2,
          firstName: "Aaron",
          lastName: "Sarginson",
          avatar: "/Sarginson.jpg",
        },
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case t.SET_IDEAS:
      return {
        ...state,
        ideas: action.payload,
      };
    case t.SET_MEMBERS:
      return {
        ...state,
        members: action.payload,
      };
    case t.ADD_IDEA:
      return {
        ...state,
        ideas: [action.payload, ...(state?.ideas || [])],
      };
    case t.TOGGLE_AUTHOR:
      return {
        ...state,
        lamjed: !state?.lamjed,
      };
    default:
      return { ...state };
  }
};
export default main;
