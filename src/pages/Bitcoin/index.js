import React from "react";
import { View } from "react-native";
import Chart from "./../../components/Chart";
import {
  FontAwesome,
  Feather,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  Container,
  Header,
  Name,
  SubHeader,
  SubHeaderIcon,
  SubHeaderText,
  IconBitcoin,
  SubHeaderTextContainer,
  SubHeaderTextLeft,
  SubHeaderTextRight,
  ChartContainer,
  ChartContainerTextContainer,
  ChartText,
  ChartTextChecked,
  MenuFlatList,
  MenuFlatListItem,
  MenuTitle,
  ContainerAtividades,
  AtividadeItem,
  TextContainer,
  Icon,
  TextRed,
  SubTitleAtividade,
  LineLeft,
  Void,
  TextRedSmall,
} from "./styles";
const Bitcoin = () => {
  return (
    <Container>
      <Header>
        <Name>CAP-GUVG8E77-1JVPAU-1</Name>
      </Header>
      <SubHeader>
        <SubHeaderIcon>
          <IconBitcoin>
            <FontAwesome name="bitcoin" size={28} color="#ffa726" />
          </IconBitcoin>
        </SubHeaderIcon>
        <SubHeaderText>
          <SubHeaderTextContainer>
            <SubHeaderTextLeft>0.038411</SubHeaderTextLeft>
            <SubHeaderTextRight> BTC</SubHeaderTextRight>
          </SubHeaderTextContainer>
          <SubHeaderTextContainer>
            <Name>2.113,84 BRL</Name>
          </SubHeaderTextContainer>
        </SubHeaderText>
      </SubHeader>
      <TextContainer>
        <SubHeaderText>
          <Name>BRC/BRL</Name>
        </SubHeaderText>
        <SubHeaderText>
          <Void>
            <SubHeaderTextRight>55.032,20 BRL</SubHeaderTextRight>
            <TextRedSmall>-8,56%</TextRedSmall>
          </Void>
        </SubHeaderText>
      </TextContainer>
      <ChartContainer>
        <Chart />
      </ChartContainer>
      <ChartContainerTextContainer>
        <ChartTextChecked>1 dia</ChartTextChecked>
        <ChartText>5 dias</ChartText>
        <ChartText>1 mês</ChartText>
        <ChartText>1 ano</ChartText>
      </ChartContainerTextContainer>
      <MenuFlatList horizontal={true}>
        <MenuFlatListItem>
          <Icon>
            <Feather
              name="bar-chart-2"
              size={24}
              color="rgba(0, 102, 255,0.6)"
            />
          </Icon>
          <MenuTitle>Pagar Conta</MenuTitle>
        </MenuFlatListItem>
        <MenuFlatListItem>
          <Icon>
            <AntDesign name="retweet" size={24} color="rgba(0, 102, 255,0.6)" />
          </Icon>
          <MenuTitle>Converter</MenuTitle>
        </MenuFlatListItem>
        <MenuFlatListItem>
          <Icon>
            <FontAwesome
              name="arrow-down"
              size={21}
              color="rgba(0, 102, 255,0.6)"
            />
          </Icon>
          <MenuTitle>Depositar</MenuTitle>
        </MenuFlatListItem>
      </MenuFlatList>
      <ContainerAtividades>
        <ChartText style={{ fontWeight: "bold", fontSize: 15 }}>
          Atividade CapConta
        </ChartText>
        <AtividadeItem>
          <View>
            <Icon>
              <Feather
                name="bar-chart-2"
                size={24}
                color="rgb(255, 255, 255)"
              />
            </Icon>
          </View>
          <View>
            <SubTitleAtividade>17 Janeiro</SubTitleAtividade>
            <Void>
              <SubHeaderTextRight>Pagamento de Conta</SubHeaderTextRight>
              <TextRed>0.000485 BTC</TextRed>
            </Void>
          </View>
        </AtividadeItem>
        <LineLeft />
        <AtividadeItem>
          <View>
            <Icon>
              <MaterialIcons
                name="subdirectory-arrow-right"
                size={24}
                color="rgb(255, 255, 255)"
              />
            </Icon>
          </View>
          <View>
            <SubTitleAtividade>16 Janeiro</SubTitleAtividade>
            <Void>
              <SubHeaderTextRight>Transferência Enviada</SubHeaderTextRight>
              <TextRed>0.000687 BTC</TextRed>
            </Void>
          </View>
        </AtividadeItem>
        <LineLeft />
      </ContainerAtividades>
    </Container>
  );
};

export default Bitcoin;
