import { Text } from "react-native";
import { textPropsType } from "../../types/components/text";
import { Color, FontSize } from "../utils/styleguide";

export const MediumText = ({ title, textStyle }: textPropsType) => {
  return (
    <Text
      style={[
        {
          fontSize: FontSize.homeProfileName,
          color: Color.white,
        },
        textStyle,
      ]}
    >
      {title}
    </Text>
  );
};

export const SmallText = ({ title, textStyle = {} }: textPropsType) => {
  return (
    <Text
      style={[
        {
          fontSize: FontSize.md_text,
          color: Color.white,
        },
        textStyle,
      ]}
    >
      {title}
    </Text>
  );
};
