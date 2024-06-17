import { colors } from '../../colors.config';
import { CommandText } from '../CommandText/style';
import { ContainerList } from './Style/container';
import { TitleList } from './Style/title';

export const ListEmptyComponent = ({ title, commandText }) => {
    return (
        <ContainerList>
            <TitleList>{title}</TitleList>
            <CommandText
                textAlign={'center'}
                marginTop={20}
                fontSize={14}
                colorText={colors.white}
            >
                {commandText}
            </CommandText>
        </ContainerList>
    );
};
