import styled from 'styled-components/native';
import { percentage } from '../../../utils/percentageFactory';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Container = styled.View`
    margin-bottom: ${percentage(0.05, 'h')};
    align-items: center;
    width: 100%;
`;

const AvatarContainer = styled.View`
    margin-top: ${percentage(0.08, 'h')};
    align-items: center;
    position: relative;
`;
const AvatarImage = styled.Image`
    width: ${percentage(0.35, 'w')};
    height: ${percentage(0.35, 'w')};
    border-radius: 100px;
`;

const EditContainer = styled.TouchableOpacity`
    position: absolute;
    right: 4%;
    bottom: 28%;
    z-index: 100;
    width: ${percentage(0.08, 'w')};
    height: ${percentage(0.08, 'w')};
    background-color: #fb6614;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
`;

const UserName = styled.Text`
    margin-top: ${percentage(0.025, 'h')};
    color: #fff;
    font-size: 24px;
    font-family: 'Montserrat_700Bold';
`;

const LikesContainer = styled.View`
    margin-top: ${percentage(0.015, 'h')};
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

const LikesAmount = styled.Text`
    font-size: 16px;
    font-family: 'Montserrat_600SemiBold';
    color: #ff8434;
`;

export default function ProfileView({
    avatarUri,
    userName,
    likesAmount,
    handleEditClick
}) {
    return (
        <Container>
            <AvatarContainer>
                <AvatarImage source={{ uri: avatarUri }} />
                <EditContainer onPress={handleEditClick}>
                    <Entypo name='pencil' size={20} color='#fff' />
                </EditContainer>
                <UserName>{userName}</UserName>
            </AvatarContainer>
            <LikesContainer>
                <AntDesign name='heart' size={24} color='#FB6614' />
                <LikesAmount>{likesAmount}</LikesAmount>
            </LikesContainer>
        </Container>
    );
}
