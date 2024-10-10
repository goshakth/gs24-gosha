import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              {Array.isArray(content) ? (
              content.map((paragraph, index) => (
                <p key={index}>{t(paragraph)}</p>  // 각 문장을 <p> 태그로 출력
              ))
            ) : (
              <p>{t(content)}</p>  // content가 배열이 아닌 경우 단일 문장으로 출력
            )}
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("about")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                  {typeof section === "object" &&
                    section.map(
                      (
                        item: {
                          title: string;
                          content: string | string[]; // section의 content도 string[]을 허용하도록 수정
                          icon?: string; // icon을 선택 사항으로 처리
                        },
                        id: number
                      ) => {
                        return (
                          <Col key={id} span={11}>
                            <MinTitle>{t(item.title)}</MinTitle>
                            <MinPara>{t(item.content)}</MinPara>
                          </Col>
                        );
                      }
                    )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
