import styled from "styled-components";

interface ITable {
  titles: any[];
  data: any[];
}

const Table: React.FC<ITable> = ({ titles, data }) => {
  return (
    <TableContainer>
      <TableTitlesRow>
        {titles.map((t, index) => (
          <TableTitle colWith={t.colWith} key={index}>
            {t.text}
          </TableTitle>
        ))}
      </TableTitlesRow>
      {data.map((d, index) => (
        <TableRow key={index}>
          {d.map((m: string, i: number) => (
            <TableCell colWith={titles[i].colWith} key={i}>
              {m}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableContainer>
  );
};

export default Table;

const TableContainer = styled.table<any>`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;

  border-radius: 10px;

  :nth-child(odd) {
    background-color: #8ea8ff;
    color: black;
  }
  &:nth-child(2) {
    background-color: #4b75ff;
    color: black;
  }
  :nth-child(${(props) => props.last}) {
    background-color: #2b28e6;
    color: #fff;
  }
`;

const TableTitlesRow = styled.tr`
  width: auto;
  height: auto;

  display: flex;
`;

const TableTitle = styled.td<any>`
  width: ${(props) => props.colWith + "rem"};
  height: 2.5rem;
  background-color: #2b28e6;
  color: #fff;
  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    width: ${(props) => props.colWith / 2 + "rem"};
  }
`;

const TableRow = styled.tr`
  width: auto;
  height: auto;

  display: flex;

  :nth-child(1) {
    background-color: #2b28e6;
    color: #fff;
  }
`;

const TableCell = styled.td<any>`
  width: ${(props) => props.colWith + "rem"};
  height: 2.5rem;

  border: 1px solid white;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    width: ${(props) => props.colWith / 2 + "rem"};
  }
`;
