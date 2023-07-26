export interface LogoDataType {
  name: string | StaticImageData;
}

export interface NavigationDataTypes {
  id: React.Key | null | undefined;
  name: string;
  link?: string;
  dropdown?: boolean;
  Icon: IconType;
  subMenu: {
    id: React.Key | null | undefined;
    name: string;
    link: string;
    Icon: IconType;
  }[];
}

// Sample
export interface NavigationSubDataTypes {
  id: React.Key | null | undefined;
  name: string;
  link: string;
  Icon: IconType;
}
