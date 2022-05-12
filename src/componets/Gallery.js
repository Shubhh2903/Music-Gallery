/** @format */

import React from "react";
import Music1 from "../assets/Music-1.png";
import Music2 from "../assets/Music-2.png";
import Music3 from "../assets/Music-3.png";
import styled from "styled-components/macro";
function Gallery() {
  return (
    <Wrapper>
      <GalleryTitle>Explore New Tracks</GalleryTitle>
      <GallerySubTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
      </GallerySubTitle>
      <Music>
        <AlbumMark>
          <AlbumbPhoto />
          <AlbumbName>All The Right Moves</AlbumbName>
          <SingerName>Marck Edvin</SingerName>
          <LikeCounter>
          🤍64.8k
          </LikeCounter>
        </AlbumMark>
        <AlbumMark>
          <AlbumbPhoto />
          <AlbumbName>All The Right Moves</AlbumbName>
          <SingerName>Marck Edvin</SingerName>
          <LikeCounter>
          🤍64.8k
          </LikeCounter>
        </AlbumMark>
        <AlbumMark>
          <AlbumbPhoto />
          <AlbumbName>All The Right Moves</AlbumbName>
          <SingerName>Marck Edvin</SingerName>
          <LikeCounter>
          🤍64.8k
          </LikeCounter>
        </AlbumMark>
      </Music>
    </Wrapper>
  );
}

export default Gallery;
const LikeCounter = styled.div`
  display:flex;
  font-size:22px;
  font-family:Cabin-Bold;
  line-height:1.4;
  text-align:center;
  color:#fff;
`
const SingerName = styled.div`
  font-family: Cabin-Regular;
  font-size: 14px;
  color: #fff;
  padding-bottom:10px;
  width: 100%;
  text-align: center;
  border-bottom: 2px solid;
`;
const AlbumbName = styled.div`
  padding-top: 20px;
  line-height: 1.4;
  font-size: 16px;
  font-family: Cabin-Bold;
  color: #fff;
  text-align: center;
  padding-bottom:20px;  
`;
const AlbumbPhoto = styled.div`
  background-image: url(${Music1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 200px;
  width: 200px;
`;
const AlbumMark = styled.div`
  display: flex;
  margin: 25px 150px 0 150px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Music = styled.div`
  display: flex;
  gap:50px;
`;
const GallerySubTitle = styled.div`
  font-family: Cabin-Light;
  font-size: 19px;
  text-align: center;
  color: #fff;
  padding-top: 15px;
  line-height: 1.4;
`;
const GalleryTitle = styled.div`
  font-family: Cabin-Bold;
  font-size: 30px;
  line-height: 1;
  text-align: center;
  color: #fff;
  padding-top: 100px;
`;
const Wrapper = styled.div`
  display: flex;
  background-color: #d48586;
  flex-direction: column;
`;
