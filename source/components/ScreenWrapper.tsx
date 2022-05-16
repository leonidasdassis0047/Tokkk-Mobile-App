import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = ScrollViewProps & {
  children: React.ReactNode;
  contentContainerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  isScrollable?: boolean;
};
const ScreenWrapper: React.FunctionComponent<Props> = ({
  children,
  isScrollable = false,
  style,
  contentContainerStyle,
}) => {
  const insets = useSafeAreaInsets();

  const containerStyles = [
    styles.container,
    {
      backgroundColor: '#fff',
      paddingLeft: insets.left,
      paddingRight: insets.right,
      paddingBottom: insets.bottom,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {isScrollable ? (
        <ScrollView
          contentContainerStyle={[containerStyles, contentContainerStyle]}
          style={[containerStyles]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyles, style]}>{children}</View>
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
