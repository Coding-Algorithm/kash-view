import { Text } from "react-native";
import { textPropsType } from "../../types/components/text";
import { Color, FontSize } from "../utils/styleguide";

export const SmallText = ({ title }: textPropsType) => {
  return (
    <Text
      style={{
        fontSize: FontSize.homeProfileName,
        color: Color.white
      }}
    >
      {title}
    </Text>
  );
};
