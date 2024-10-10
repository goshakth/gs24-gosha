import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  title: string;
  content: string | string[]; // section의 content도 string[]을 허용하도록 수정
  section?: {
    title: string;
    content: string | string[]; // section의 content도 string[]을 허용하도록 수정
    icon?: string; // 선택 사항으로 변경
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
