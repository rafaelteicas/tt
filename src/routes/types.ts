import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackTypes} from './AppStackNavigator';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackTypes {}
  }
}

export type AppStackNavType<T extends keyof StackTypes> =
  NativeStackScreenProps<StackTypes, T>;
