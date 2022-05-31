import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import Author from "../../components/main/Author";
import Idea from "../../components/main/Idea";
import Member from "../../components/main/Member";
import Nav from "../../components/main/Nav";
import Search from "../../components/main/Search";
import TopIdea from "../../components/main/TopIdea";
import AddIdea from "../../components/main/AddIdea";

import { setIdeas, setMembers } from "../../redux/main/actions";

import styles from "./index.module.css";

const Main = (props: any) => {
  const {} = props;
  const dispatch = useDispatch();
  const { ideas, topIdeas, members, authors, lamjed } = useSelector(
    (state: any) => state.main
  );
  const author = lamjed ? authors[0] : authors["1"];
  const like: Function = (idx: any) => {
    // this function will be eliminated if we use an api

    let _ideas = ideas;
    let _ideaToBeUpdated = ideas?.[idx];

    _ideaToBeUpdated["up"] = _ideaToBeUpdated?.up?.includes(idx)
      ? _ideaToBeUpdated?.up
      : [...(_ideaToBeUpdated?.up || []), idx];

    _ideaToBeUpdated["down"] = (_ideaToBeUpdated?.down || []).filter(
      (e: any) => e !== idx
    );

    _ideas[idx] = _ideaToBeUpdated;

    const canHeVote: Boolean = author?.id !== _ideaToBeUpdated?.author?.id;

    canHeVote && dispatch(setIdeas(_ideas));
  };

  const disLike: Function = (idx: any) => {
    // this function will be eliminated if we use an api
    let _ideas = ideas;
    let _ideaToBeUpdated = ideas?.[idx];

    _ideaToBeUpdated["down"] = _ideaToBeUpdated?.down?.includes(idx)
      ? _ideaToBeUpdated?.down
      : [...(_ideaToBeUpdated?.down || []), idx];

    _ideaToBeUpdated["up"] = (_ideaToBeUpdated?.up || []).filter(
      (e: any) => e !== idx
    );
    _ideas[idx] = _ideaToBeUpdated;

    const canHeVote: Boolean = author?.id !== _ideaToBeUpdated?.author?.id;

    canHeVote && dispatch(setIdeas(_ideas));
  };
  const following: Function = (idx: any, authorID: any) => {
    // this function will be eliminated if we use an api
    let _members = members;
    let _memberToBeUpdated = members?.[idx];

    _memberToBeUpdated["followers"] = _memberToBeUpdated?.followers?.includes(
      authorID
    )
      ? (_memberToBeUpdated?.followers || []).filter((e: any) => e !== authorID)
      : [...(_memberToBeUpdated?.followers || []), authorID];
    _members[idx] = _memberToBeUpdated;

    dispatch(setMembers(_members));
  };
  return (
    <div className={styles.container}>
      <div className={styles["left-bar"]}>
        <Search />
        <Author />
        <p>Other members</p>
        {members?.map((member: any, index: Number) => (
          <Member
            {...member}
            following={() => following(index, author?.id || 1)}
            key={index}
          />
        ))}
      </div>
      <div className={styles["ideas-container"]}>
        <AddIdea />
        {ideas?.map((idea: any, index: number) => (
          <Idea
            {...idea}
            like={() => like(index)}
            disLike={() => disLike(index)}
            key={index}
          />
        ))}
      </div>
      <div className={styles["top-ideas"]}>
        <Nav />
        top ideas :
        {topIdeas?.map((idea: any, index: Number) => (
          <TopIdea {...idea} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Main;
