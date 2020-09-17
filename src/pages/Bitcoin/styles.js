import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #1e1e27;
  flex: 1;
`;
export const Header = styled.View`
  padding: 1px;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;
export const Name = styled.Text`
  color: rgba(255, 255, 255,0.3);
  font-weight: bold;
`;
export const SubHeader = styled.View`
  padding-left: 15px;
  flex-direction: row;
`;
export const SubHeaderIcon = styled.View`
  background: rgba(242, 181, 10, 0.2);
  width: 36px;
  height: 40px;
  border-radius: 13px;
  padding: 2px;
  justify-content: center;
`;
export const IconBitcoin = styled.View`
  padding: 5px;
  align-self: center;
  justify-content: center;
`;
export const SubHeaderText = styled.View`
  flex-direction: column;
  padding: 5px;
`;
export const SubHeaderTextContainer = styled.Text`
  padding: 0px;
`;
export const SubHeaderTextLeft = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 15px;
`;
export const SubHeaderTextRight = styled.Text`
  color: #f6f6f6;
  font-weight: normal;
  font-size: 12px;
`;
export const ChartContainer = styled.View`
  align-self: center;
  height: 160px;
`;
export const ChartContainerTextContainer = styled.View`
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: center;
`;
export const ChartText = styled.Text`
  color: rgba(255, 255, 255,0.3);
  padding: 10px;
`;
export const ChartTextChecked = styled.Text`
  color: #f2f2f2;
  padding: 10px;
`;
export const TextRed = styled.Text`
  color: rgba(255, 51, 51,0.8);
  padding: 1px;
  font-size: 12px;
  padding-left:60px;
`;
export const TextRedSmall = styled.Text`
  color: rgba(255, 51, 51,0.8);
  padding: 1px;
  font-size: 12px;
  padding-left:5px;
`;
export const MenuFlatList = styled.ScrollView`
  padding: 1px 0px;
  background: #1e1e27;
  max-height: 120px;
`;
export const MenuFlatListItem = styled.TouchableOpacity`
  padding: 0px 20px;
  margin-left: 10px;
  background: rgba(67, 67, 86, 0.3);
  height: 100px;
  border-radius: 10px;
  flex-direction: column;
  justify-content: space-around;
  align-self: flex-start;
`;
export const MenuTitle = styled.Text`
  color: #f2f2f2;
  font-size: 14px;
`;
export const Icon = styled.View`
  width: 30px;
  height: 30px;
`;
export const ContainerAtividades = styled.View`
  border-top-color: rgba(255, 255, 255,0.3);
  border-top-width: 1px;
  padding-top: 5px;
  padding-left: 35px;
`;
export const AtividadeItem = styled.View`
  padding: 2px;
  flex-direction: row;
`;
export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 2px;
`;
export const SubTitleAtividade = styled.Text`
  color: rgba(255, 255, 255,0.3);
  font-size: 14px;
`;
export const LineLeft = styled.Text`
  border-left-width: 1px;
  border-color: rgba(255, 255, 255,0.3);
  margin-left: 14px;
  height:13px;
`;
export const Void = styled.View`
  flex-direction: row;
`;
