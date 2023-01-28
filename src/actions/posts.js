import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

const slowCode = async () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 500);
  });
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  try {
    await slowCode();
    const { data } = await api.getPosts();
    return data;
  } catch (error) {
    console.log(error);
  }
});

// export const createPost = createAsyncThunk(
//   "posts/createPosts",
//   async (post) => {
//     try {
//       const { data } = await api.createPost(post);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

// export const updatePost = createAsyncThunk("posts/updatePost", async (post) => {
//   try {
//     const { data } = await api.updatePost(post);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const deletePost = createAsyncThunk(
//   "posts/deletePost",

//   async (id) => {
//     try {
//       await api.deletePost(id);
//       return id;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
