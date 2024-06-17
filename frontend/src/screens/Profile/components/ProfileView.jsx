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
    right: 14%;
    bottom: 31%;
    z-index: 100;
    width: 32px;
    height: 32px;
    background-color: #fb6614;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    box-shadow: -3px -3px 6px black;
    elevation: 10;
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
    handleEditClick,
    disableEditButton = false
}) {
    return (
        <Container>
            <AvatarContainer>
                <AvatarImage source={{ uri: avatarUri }} />
                {!disableEditButton && (
                    <EditContainer onPress={handleEditClick}>
                        <Entypo name='pencil' size={20} color='#fff' />
                    </EditContainer>
                )}
                <UserName>{userName}</UserName>
            </AvatarContainer>
            <LikesContainer>
                <AntDesign name='heart' size={24} color='#FB6614' />
                <LikesAmount>{likesAmount}</LikesAmount>
            </LikesContainer>
        </Container>
    );
}
