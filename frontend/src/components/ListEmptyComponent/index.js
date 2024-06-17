import { CommandText } from "../CommandText/style"
import { ContainerList } from "./Style/container"
import { TitleList } from "./Style/title";

export const ListEmptyComponent = ({title, commandText}) => {
    return(
        <ContainerList>
            <TitleList>{title}</TitleList>
            <CommandText textAlign={'center'} marginTop={20} ofntSize={20}>{commandText}</CommandText>
        </ContainerList>
    );
};