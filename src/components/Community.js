import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import axios from "axios";

const Community = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPosts(null);
        const response = await axios.get(
          "https://ec34-2401-c080-1c02-d18-5400-3ff-fef1-6ea4.jp.ngrok.io/posts"
        );
        setPosts(response.data.reverse());
      } catch (e) {
        console.log("error");
      }
    };
    fetchPosts();

    // //  return(
    // //    <Profile>{rand_1_10}</Profile>
    // //  )
  }, []);

  if (!posts) return "글이 없습니다. 첫글을 등록해주세요.";

  return (
    <ComunityBlockWrapper>
      <Coments>Comments {posts.length}</Coments>
      <ComunityBlock>
        {posts.map((post) => (
          <CommentBlock key={post.id}>
            <Profile />
            <PostContent>{post.content}</PostContent>
          </CommentBlock>
        ))}
      </ComunityBlock>
    </ComunityBlockWrapper>
  );
};

const ComunityBlockWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 630px) {
    font-size: 10px;
  }
`;

const Coments = styled.div`
  margin: 15px 20px;
  font-weight: 700;
`;

const ComunityBlock = styled.div`
  width: calc(100% - 40px);
  height: 30vh;
  max-height: 400px;
  padding: 10px 20px 20px 20px;
  background-color: #313235;
  border-radius: 12px;
  overflow: scroll;
`;

const CommentBlock = styled.div`
  height: 50px;
  background-color: #3e4044;
  border-radius: 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 630px) {
    padding: 10px;
  }
`;

const PostContent = styled.div`
  margin-left: 24px;
  height: 50px;
  overflow: scroll;
  display: flex;
  align-items: center;
  @media screen and (max-width: 630px) {
    margin-left: 14px;
    height: 48px;
  }
`;

export default Community;
