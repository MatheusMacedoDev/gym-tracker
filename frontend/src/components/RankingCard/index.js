import { colors } from "../../colors.config";
import { ContainerRankingCard } from "./Style/ContainerRankingCard"
import { ImagePersonRanking } from "./Style/ImagePersonRanking"
import { NamePersonRanking } from "./Style/NamePersonRanking"
import { AntDesign } from '@expo/vector-icons';
import { ViewLikes } from "./Style/ViewLikes";
import { TextNumbersRanking } from "./Style/TextNumbersRanking";

export const RankingCard = ({ name, likes, sequentialNumber }) => {
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