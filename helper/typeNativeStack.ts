import { RootStackParamList } from "@/App";

import type { RouteProp } from "@react-navigation/native";
import {
    NativeStackNavigationProp,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

export type RootStackNavProp<T extends keyof RootStackParamList> =
  NativeStackNavigationProp<RootStackParamList, T>;

export type RootStackRouteProp<T extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, T>;