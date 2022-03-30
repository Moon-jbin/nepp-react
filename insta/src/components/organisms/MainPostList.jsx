import styled from "styled-components";
import { ReactComponent as IconOptionMore } from "../../assets/images/optionMore.svg";
import { ReactComponent as IconLike } from "../../assets/images/like.svg";
import { ReactComponent as IconComment } from "../../assets/images/comment.svg";
import { ReactComponent as IconShare } from "../../assets/images/share.svg";
import { ReactComponent as IconEmoticon } from "../../assets/images/emoticon.svg";
import PostImgSlide from "./PostImgSlide";
import React from "react";

const MainPostList = ({ data }) => {
  const postList = data.map((item) => {
    return (
      <BoardWrap key={item.id}>
        <UserInfoWrap>
          <UserInfoBox>
            <UserImg src={item.profile_image} />
            <UserId>{item.name}</UserId>
          </UserInfoBox>
          <OptionMoreWrap>
            <IconOptionMore />
          </OptionMoreWrap>
        </UserInfoWrap>
        <ContentWrap>
          <PostImgSlide data={item.imageList} />
          {/*사진 올라가는 곳*/}
          <BtnBox>
            <IconLikeWrap>
              <IconLike />
            </IconLikeWrap>
            <IconCommentWrap>
              <IconComment />
            </IconCommentWrap>
            <IconShareWrap>
              <IconShare />
            </IconShareWrap>
          </BtnBox>{" "}
          {/* 좋아요, 댓글, 등등 선택지 */}
          <CommentWrap>
            <Like>좋아요 {item.likes?.total}개</Like>
            <CommentBox>
              {item.replys?.items.map((item) => {
                return (
                  <CommUserInfo key={item.id}>
                    <CommUserId>{item.name}</CommUserId>
                    <CommUserText>{item.content}</CommUserText>
                  </CommUserInfo>
                );
              })}
            </CommentBox>
            <CommentInputBox>
              <InputWrap>
                <IconEmoticonWrap>
                  <IconEmoticon />
                </IconEmoticonWrap>
                <Input placeholder="댓글 달기..." />
              </InputWrap>
              <SendBtn>게시</SendBtn>
            </CommentInputBox>
          </CommentWrap>
        </ContentWrap>
      </BoardWrap>
    );
  });

  return <React.Fragment>{postList}</React.Fragment>;
};

const BoardWrap = styled.div`
  width: 100%;
  border: 1px solid #ccc;
  margin: 28px 0 0;
  box-sizing: border-box;
  background: #fff;
`;
const UserInfoWrap = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 12px;
`;
const UserInfoBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #000;
  margin: 0 12px 0 0;
`;
const UserId = styled.span`
  font-size: 13px;
  font-weight: 600;
  font-family: bold;
`;
const OptionMoreWrap = styled.div``;
const ContentWrap = styled.div`
  width: 100%;
`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const IconMargin = styled.div`
  margin: 0 10px 0 0;
`;

const IconLikeWrap = styled(IconMargin)``;
const IconCommentWrap = styled(IconMargin)``;
const IconShareWrap = styled(IconMargin)``;

const CommentWrap = styled.div`
  width: 100%;
`;
const Like = styled.span`
  font-size: 14px;
  font-weight: 600;
  padding: 0 10px;
`;
const CommentBox = styled.div`
  width: 100%;
  padding: 0 10px;
`;

const CommUserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
const CommUserId = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin: 0 5px 0 0;
`;
const CommUserText = styled.p`
  width: 100%;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CommentInputBox = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  border-top: 1px solid #ccc;
  padding: 0 10px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

const InputWrap = styled.div`
  display: flex;
  width: 100%;
`;

const IconEmoticonWrap = styled.div`
  padding: 0 0 0 7px;
  margin: 0 15px 0 0;
`;
const Input = styled.input`
  padding: 5px 10px;
  border: 0;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
`;
const SendBtn = styled.button`
  width: 50px;
  border: 0;
  font-size: 15px;
  color: #0095f6;
  font-weight: 600;
  background: #fff;
`;

export default MainPostList;
