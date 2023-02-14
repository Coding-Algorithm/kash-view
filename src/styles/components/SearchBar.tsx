import { StyleSheet } from "react-native";
import { Color, Padding, Radius } from "../../utils/styleguide";

export const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 50,
        flexDirection: 'row',
        paddingHorizontal: Padding.xsm,
        backgroundColor: Color.white,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: Radius.sm,
        borderColor: Color.searchBarBorder
    },
    textInput: {
        width: "100%",
        height: "100%",
        color: Color.searchBarCursor
    }

});
