import React from "react";
import OcurrenceDetails from "../../components/OccurrenceDetails";
import { ocurrenceDetailsMock } from "../../utils/ocurrenceDetailsMock";
import HomeHeader from "../../components/HomeHeader";
import { Divider } from "@rneui/base";
import { Container, Title } from "./OccurrenceDetailScreen.styles";
import OccurrenceFooter from "../../components/OccurrenceFooter";
import ScreenHeader from "../../components/ScreenHeader";

const OccurrenceDetailScreen: React.FC = () => {
  return (
    <Container>
      <ScreenHeader title="Ocorrência" />

      <Title>Ocorrência:</Title>
      <Divider style={{ margin: 18 }} />

      <OcurrenceDetails
        title={ocurrenceDetailsMock.title}
        description={ocurrenceDetailsMock.description}
        imageUri={ocurrenceDetailsMock.imageUri}
        author={ocurrenceDetailsMock.author}
        date={ocurrenceDetailsMock.date}
        notifiersIDs={ocurrenceDetailsMock.notifiersIDs}
        status={ocurrenceDetailsMock.status}
      />

      <OccurrenceFooter
        notifiersNumber={ocurrenceDetailsMock.notifiersIDs.length}
        commentsNumber={ocurrenceDetailsMock.comments.length}
        comments={ocurrenceDetailsMock.comments}
      />
    </Container>
  );
};

export default OccurrenceDetailScreen;
