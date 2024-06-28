import React, { useEffect, useState } from "react";
import { Container, Title } from "./Home.styles";
import HomeHeader from "../../components/HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { FlatList, Text, View } from "react-native";
import { OccurrenceStatusEnum } from "@/types";
import Status from "../../components/Status";
import OccurrenceCard from "@/components/OccurrenceCard";
import Loading from "@/components/Loading";
import { useAuth } from "@/hooks/useAuth";
import { useOccurrence } from "@/hooks/useOccurrence";

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);
  const { navigate } = useNavigation<AppNavigatorRoutesProps>();

  const { user } = useAuth();

  const { occurrenceCards } = useOccurrence();

  const handleNavigateToOccurrence = (id: string) => {
    navigate("occurrence", { occurrenceId: id });
  };

  const OccurrenceFilter: Record<string, string> = {
    all: "Todas",
    mine: "Minhas",
    pending: OccurrenceStatusEnum.PENDING,
    solved: OccurrenceStatusEnum.SOLVED,
    cancelled: OccurrenceStatusEnum.CANCELLED,
  };

  const occurrenceKeys = Object.keys(OccurrenceFilter);

  useEffect(() => {
    if (occurrenceCards.length > 0 || occurrenceCards.length === 0) {
      setIsLoading(false);
    }
  }, [occurrenceCards]);

  return (
    <Container>
      <HomeHeader />

      <FlatList
        data={occurrenceKeys.filter(
          (item) => user.admin || item !== "cancelled"
        )}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Status
            name={OccurrenceFilter[item]}
            variant={activeFilter === item ? "active" : "inactive"}
            onPress={() => setActiveFilter(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <Title>Ocorrências:</Title>

      {isLoading ? (
        <Loading />
      ) : occurrenceCards.length === 0 ? (
        <View>
          <Text>Não há ocorrências disponíveis no momento.</Text>
        </View>
      ) : (
        <FlatList
          data={occurrenceCards}
          renderItem={({ item }) => (
            <OccurrenceCard
              image={item.image}
              notifiersNumber={item.likes}
              status={item.status}
              title={item.title}
              date={item.date}
              onInteract={() => handleNavigateToOccurrence(item._id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
};

export default Home;
