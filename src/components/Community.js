import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Community = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPosts(null);
        const response = await axios.get("http://141.164.51.211:8080/posts");
        setPosts(response.data.reverse());
      } catch (e) {
        console.log("error");
      }
    };
    fetchPosts();
  }, []);

  console.log(posts);

  if (!posts) return null;

  return (
    <ComunityBlockWrapper>
      <Coments>Comments {posts.length}</Coments>
      <ComunityBlock>
        {posts.map((post) => (
          <CommentBlock>
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
`;

const Profile = styled.div`
  width: 50px;
  height: 50px;
  background-color: #313235;
  border-radius: 100%;
`;

const PostContent = styled.div`
  margin-left: 24px;
`;

export default Community;
