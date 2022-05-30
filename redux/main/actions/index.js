import * as t from "../types";
export const setIdeas = (newList) => ({
  type: t.SET_IDEAS,
  payload: newList,
});
export const addIdea = (idea) => ({
  type: t.ADD_IDEA,
  payload: idea,
});
export const setMembers = (members) => ({
  type: t.SET_MEMBERS,
  payload: members,
});
export const toggleAuthor = () => ({
  type: t.TOGGLE_AUTHOR,
});
