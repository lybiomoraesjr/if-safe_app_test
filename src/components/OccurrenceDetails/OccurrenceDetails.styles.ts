import styled from "styled-components/native";
import { Image } from "expo-image";

export const Container = styled.View`
  padding: 0px 20px;
`;

export const Picture = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 7px;
`;

export const Info = styled.View`
  padding: 0 10px;
`;

export const NotificationView = styled.View`
  flex-direction: row;

  align-items: center;
`;

export const NotifierCount = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;

export const Status = styled.Text``;

export const Name = styled.Text``;

export const DetailsSection = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_800};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Description = styled.Text``;

export const Date = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
