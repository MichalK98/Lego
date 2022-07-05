import styled from 'styled-components';
import * as theme from '@Components/theme';

import { Part } from '@Interfaces';
import Button from '@Components/Button';

type StyledPartProps = {
  background: string;
};

const StyledList = styled.div`
  margin: 20px 0;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const StyledPart = styled.a<StyledPartProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px 15px;
  background: ${theme.colors.white};
  border-bottom: 6px solid #${({ background }) => background};
  color: ${theme.colors.blue};

  p {
    position: absolute;
    right: 15px;
    bottom: 10px;
  }
`;

interface PartsListProps {
  parts: Part[];
}

const PartsList: React.FC<PartsListProps> = ({ parts }) => {
  return (
    <StyledList>
      {parts.map((data: any, index) => {
        return (
          <StyledPart
            key={index}
            href={data.part.part_url}
            background={data.color.rgb}
          >
            <img width="80" src={data.part.part_img_url} alt={data.part.name} />
            <p>{data.quantity}x</p>
          </StyledPart>
        );
      })}
    </StyledList>
  );
};

export default PartsList;