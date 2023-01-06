import styled from "styled-components";
import * as moment from "jalali-moment";
import Table from "../../../shared/Table/Table";

interface IShareHolder {
  name: string;
  amount: string;
  created_at: string;
  updated_at: string;
  id: number;
}

interface IShare {
  shareHolders: IShareHolder[];
  loading: boolean;
  error: boolean;
}

export interface IAboutStructure {
  shareholder: IShare;
  structure: any;
  pic: string;
  title: string;
}

const AboutStructure: React.FC<IAboutStructure> = ({
  shareholder,
  structure,
  pic,
  title,
}) => {
  var totalAmount = 0;

  var tableData: any = [];
  shareholder.shareHolders.map((s) => {
    totalAmount = parseInt(s.amount) + totalAmount;
  });
  shareholder.shareHolders.map((s) => {
    tableData = [
      ...tableData,
      [s.name, s.amount, ((parseInt(s.amount) / totalAmount) * 100).toFixed(2)],
    ];
  });

  tableData = [...tableData, ["مجموع", totalAmount, 100]];

  const tableHeaders = [
    { text: "نام سهامدار", colWith: 24 },
    { text: "تعداد سهام", colWith: 12 },
    { text: "درصد", colWith: 12 },
  ];

  return (
    <Container>
      <BannerContainer>
        <Banner src={pic} alt={title} />
        <BannerTitle>درباره ما</BannerTitle>
        <BannerDescription>{title}</BannerDescription>
      </BannerContainer>

      <DescriptionContainer>
        <DescriptionTitle>
          میزان سرمایه و تعداد سهام شرکت بیمه اتکایی سامان
        </DescriptionTitle>
        <Description>
          {"سرمایه شرکت به مبلغ" +
            structure.shareHolderStructure.capital_amount +
            "میلیارد ریال تمام پراخت شده منقسم به" +
            structure.shareHolderStructure.composition +
            "میلیون سهم 1,000 ریالی با نام می باشد."}
        </Description>
        <DescriptionTitle>
          ترکیب سهامداران شرکت بیمه اتکایی سامان
        </DescriptionTitle>
        <Description>
          {"ترکیب سهامداران شرکت بیمه اتکا یی سامان در تاریخ" +
            moment(structure.shareHolderStructure.updated_at)
              .locale("fa")
              .format("YYYY/MM/DD") +
            "،به شرح جدول ذیل است:"}
        </Description>
      </DescriptionContainer>
      <TableContainer>
        <Table titles={tableHeaders} data={tableData}></Table>
      </TableContainer>
    </Container>
  );
};

export default AboutStructure;

const Container = styled.div`
  width: 100%;
  height: auto;
`;

const BannerContainer = styled.div`
  position: relative;
  text-align: center;
`;

const Banner = styled.img`
  width: 70%;
  height: 70vh;
  margin-top: 2rem;
  border-radius: 0.6rem;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.6);
  filter: brightness(50%);
`;

const BannerTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2vw;
`;

const BannerDescription = styled.h2`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f3f3f3;
  font-family: "BRoyaBold";
  font-size: 2.6vw;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DescriptionTitle = styled.h3`
  font-family: "BRoyaBold";
  width: clamp(20rem, 75%, 64rem);
  margin: 2rem 0 1rem 0;
  color: #000;
  font-size: 1.6rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const Description = styled.p`
  width: clamp(20rem, 75%, 64rem);
  margin: 1rem;
  color: #000;
  text-align: justify;
  font-size: 1.3rem;
  line-height: 1.5;
  white-space: pre-wrap;
`;

const TableContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 2rem 0;
`;
