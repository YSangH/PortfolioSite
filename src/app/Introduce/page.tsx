import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contents from "@/components/Contents";
import Title from "@/components/Title";
import { Box, Container } from "@mui/material";

export default function Introduce() {
  return (
    <>
      <Header />
      <Title titleText="Introduce" />
      <Box sx={{ height: "60vh" }}>
        <Container
          sx={{
            // display: "grid",
            // gridTemplateColumns: "repeat(1, 4fr)",
            // justifyContent: "center", // 중앙 정렬
            alignItems: "center", // 세로 정렬
            marginTop: "5vh",
            paddingBottom: "20vh",
          }}
        >
          <Contents
            titles={[
              "성장 과정",
              "직무 경험",
              "성격의 장단점",
              "입사 포부",
              "활동 및 경력",
              "자격증",
            ]}
            contents={[
              // 성장 과정
              `[디자인에서 프론트엔드 개발로의 전환]

              저의 성장 과정은 디자인 중심의 배경에서 시작하여 프론트엔드 개발자로의 전환을 이루는 여정으로 채워져 있습니다.
              대학교 시절, 일러스트레이터와 포토샵을 통해 디자인 편집 기술을 익히며
              동시에 디자인의 중요성과 그 배경에 대한 깊이 있는 이해를 넓혔습니다.
              이러한 학습 경험은 단순히 디자인의 기술을 배우는 것에 그치지 않고,
              프레임워크와 컴퓨터 언어를 익혀 정적인 이미지가 아닌 한 단계 더 나아가
              동적인 웹 사이트를 사용자가 아닌 직접 개발하고 싶어 프론트엔드로 전향하게 되었습니다.`,

              //  직무 경험
              `[협업과 UI/UX를 중요시하는 주니어 개발자]

              로고 공모전 참여와 제작을 하는 과정에서 
              저는 사용자 피드백을 적극적으로 수렴하는 방법을 익혔고, 
              그런 피드백이 실제로 디자인에 큰 영향을 미친다는 것을 경험했습니다.  
              특히, 온라인 스토어를 운영하면서 상세페이지를 직접 제작 및 편집 경험을 하면서 
              UI/UX 디자인에 대해 깊이 있게 다룰 기회가 많았습니다. 
              웹 개발자 실무 양성과정 교육을 받으면서, 팀원들과 GitHub를 이용하여 
              협업의 중요성을 깊고 넓게 이해하게 되었으며, 협업 능력 또한 발전시켜주었습니다.
              그리고 아르바이트와 일용직을 경험하면서 소통의 중요성과 다양한 상황에 유연하게 대처를 할 수 있는 방법을 알게 되었습니다.`,

              //  성격의 장단점
              `[소통과 대처능력을 바탕으로 효율적인 문제 해결]

              저는 두 가지 핵심적인 성격 특성을 보유하고 있습니다.

              첫 번째는 소통입니다.
              제가 운영했던 온라인 스토어에서는 제품 페이지와 문의사항을 관련하여 구매자와 소통을 통해 응대를 했으며, 
              로고 디자인을 하면서도 의뢰자의 피드백의 중요성을 알고, 
              일용직에서도 소통이 잘 안되면 업무 배정에 혼란이 생기는 것을 알기에 중요시합니다. 

              두 번째는 대처능력입니다.
              웹 개발자 실무 양성과정 교육에서 프로젝트에 참여와 아르바이트, 일용직을 했을 당시에 
              여러 상황에 직면해야 했고, 그때마다 신속한 판단력과 유연한 대처가 요구되었습니다.
              그런 상황이 닥칠 때 여러 가지의 방안을 생각해 보고 가장 최선인 방향으로 해결하려는 자세를 지니게 되었습니다.

              단점은 여러 상황이 동시에 닥칠 때에는 놓치거나 잊어버리는 경우가 있는데
              이 점을 극복하기 위해서 메모와 할 일 리스트, 블로그 등으로 기록하는 습관을 들이고 있습니다. `,

              //  입사 포부
              `[명확한 목표 설정과 기여]

              첫 번째로 팀에 빠르게 적응하고 동료들과 효과적으로 협력하여 시너지를 창출하는 것입니다. 
              이를 통해 현재 진행 중인 프로젝트에 깊이 있게 기여하며 팀의 일원으로서의 역할을 확고히 하고, 
              회사의 문화에 적극적으로 녹아들고자 하는 결심입니다.

              두 번째로 프론트엔드 기술 및 프레임워크에 대한 지식을 심화하고 싶습니다. 
              특히, React, Vue.js와 같은 최신 기술을 활용하여 실무 경험을 쌓고, 
              이를 통해 제 기술적 역량을 한층 강화하여 추후에 프로젝트를 주도하는 것이 저의 목표입니다.
              `,
              {
                title: "",
                text: [
                  `스마트스토어 운영(엔코체어)`,
                  `로고 공모전 참여(라우드소싱)`,
                ],
                buttonText: ["이미지 보기", "이미지 보기"], // 버튼 텍스트
                modalContent: [
                  "/assets/onlinestore.png",
                  "/assets/onlinestore.png",
                ],
              },
              `
              웹디자인 기능사

              GTQ 일러스트 2급
              
              GTQ 포토샵 2급
              `,
            ]}
          />
        </Container>
      </Box>
      <Footer />
    </>
  );
}
