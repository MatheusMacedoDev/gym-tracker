import { colors } from "../../colors.config";
import { AntDesign } from '@expo/vector-icons';
import ContainerRankingCard from "./Style/ContainerRankingCard";
import ImagePersonRanking from "./Style/ImagePersonRanking";
import NamePersonRanking from "./Style/NamePersonRanking";
import TextNumbersRanking from "./Style/TextNumbersRanking";
import ViewLikes from "./Style/ViewLikes";


export default RankingCard = ({ name, likes, sequentialNumber }) => {
    return (
        <ContainerRankingCard>
            <TextNumbersRanking>{sequentialNumber}°</TextNumbersRanking>
            <ImagePersonRanking resizeMode="cover" source={require("../../assets/joao.jpeg")} />
            <NamePersonRanking>{name}</NamePersonRanking>
            <ViewLikes>
                <AntDesign name="heart" size={20} color={colors.orange} />
                <TextNumbersRanking colorText={colors.orange}>{likes}k</TextNumbersRanking>
            </ViewLikes>

        </ContainerRankingCard>
    )
}