import React from "react";
import Container from './Components/Container/Container';
import CustomCard from './Components/Card/Card';
import Section from './Components/Section/Section';

export default function Home() {
  return (
    <div>
    <Container>
    <CustomCard />
    <Section/>
    </Container>
    </div>
  );
}