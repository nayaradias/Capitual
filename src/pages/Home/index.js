import React from "react";
import { Container, Button, Title } from "./styles";
import { StatusBar } from "expo-status-bar";
const Home = ({ navigation }) => {
  return (
    <Container>
      <StatusBar style="dark-content/" backgroundColor="#1e1e27" />
      <Button onPress={() => navigation.navigate("Bitcoin")}>
        <Title>Bitcoin</Title>
      </Button>
    </Container>
  );
};
export default Home;
