import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import{Container,
    Card,UserInfo,userImg,
     UserImg,UserName,
    UserInfoText,PostTime,PostText,PostImg,
    InteractionWrapper,Interaction,
    InteractionText,Divider} from '../styles/FeedStyle';
const PostCard=({item})=>{

    likeIcon = item.liked ? 'heart': 'user-o';
    linkeIconColor = item.liked ? '#3D6641':'#333';

    if(item.likes ==1){
        likeText = '1 like';
    }else if(item.likes>1){
        likeText = item.likes +'likes';
     }else{
        likeText = 'like';
     }


    if(item.comments ==1){
        commentText = '1 Comments';
    }else if(item.comments>1){
        commentText = item.comments +'comments';
     }else{
        commentText = 'Comment';
     }
    return(
         <Card>
            <UserInfo>
                <UserImg  source = {item.userImg}/>
                <UserInfoText>
                <UserName>{item.userName}</UserName>
                 <PostTime>{item.postTime}</PostTime>
                </UserInfoText>
               
               
            </UserInfo>
            <PostText>{item.post} </PostText>
            {item.postImg != 'none'?<PostImg source={item.postImg}/>:<Divider/>}
           
            <InteractionWrapper>
            <Interaction active= {item.liked}>
                <FontAwesome name={likeIcon}size={20} color="#3D6641"  />
              <InteractionText active={item.liked}>{likeText}</InteractionText>
                </Interaction>
                <Interaction>
                <FontAwesome name="comment" size={20} />
                <InteractionText>{commentText}</InteractionText>
                </Interaction>
            </InteractionWrapper>
           </Card>



    );
};

export default PostCard;