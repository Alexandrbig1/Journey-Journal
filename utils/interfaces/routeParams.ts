import { RouteProp } from "@react-navigation/native";
import { Post, User } from "@/App";
import { Screens } from "@/utils/enums/routes";

export type RouteParams = {
  [key: string]: any;
  photoUri?: string | undefined;
  user?: User | undefined;
  post?: Post | undefined;
};

export type PostScreenRouteProp = RouteProp<
  RouteParams,
  Screens.RegistrationScreen
>;

export type MapScreenRouteProp = RouteProp<RouteParams, Screens.Map>;
