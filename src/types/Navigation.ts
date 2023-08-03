import type {
  NavigationProp
} from '@react-navigation/native'

  export type RootStackParamList = {
    Download: undefined
    Setting: undefined
    DownloadList: undefined
  }

  export type RootNavigationProp = NavigationProp<RootStackParamList>;