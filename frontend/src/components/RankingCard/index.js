import { colors } from '../../colors.config';
import { AntDesign } from '@expo/vector-icons';
import ContainerRankingCard from './Style/ContainerRankingCard';
import ImagePersonRanking from './Style/ImagePersonRanking';
import NamePersonRanking from './Style/NamePersonRanking';
import TextNumbersRanking from './Style/TextNumbersRanking';
import ViewLikes from './Style/ViewLikes';
import { percentage } from '../../utils/percentageFactory';

export default RankingCard = ({ name, likes, sequentialNumber, profilePhoto }) => {
    return (
        <ContainerRankingCard verticalPadding={percentage(0.03, 'h')}>
            <TextNumbersRanking>{sequentialNumber}°</TextNumbersRanking>
            <ImagePersonRanking
                marginLeft={percentage(0.01, 'h')}
                resizeMode='cover'
                source={{uri: profilePhoto}}
            />
            <NamePersonRanking marginLeft={percentage(0.02, 'h')}>
                {name}
            </NamePersonRanking>
            <ViewLikes>
                <AntDesign name='heart' size={20} color={colors.orange} />
                <TextNumbersRanking colorText={colors.orange}>
                    {likes}
                </TextNumbersRanking>
            </ViewLikes>
        </ContainerRankingCard>
    );
};
