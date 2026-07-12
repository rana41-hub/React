import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  };
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );

 const addPost = (userId, postTitle, postBody, postReactions, postHashtags) => {
  dispatchPostList({
    type: "ADD_POST",
    payload: {
      id: Date.now().toString(),
      title: postTitle,
      body: postBody,
      reactions: postReactions,
      userId: userId,
      tags: postHashtags,
    },
  });
};

const deletePost = (postId) => {
  dispatchPostList({
    type: "DELETE_POST",
    payload: {
      postId: postId,
    },
  });
};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi Friends I am going to Mumbai",
    reactions: "2",
    userId: "9",
    tags: ["vacations", "Mumbai", "Enjoying"],
  },

  {
    id: "2",
    title: "Going to Delhi",
    body: "Hi Friends I am going to Delhi",
    reactions: "15",
    userId: "9",
    tags: ["college", "Delhi", "Btech"],
  },
];

export default PostListProvider;
