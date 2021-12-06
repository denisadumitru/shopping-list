import { useNavigation as useReactNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

type NavigationProps = StackNavigationProp<any>;

/** Hook that overrides react navigation hook to add proper types  */
function useNavigation() {
  const navigation = useReactNavigation<NavigationProps>();

  return navigation;
}

export default useNavigation;
