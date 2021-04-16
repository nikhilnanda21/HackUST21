import Trophy from 'assets/trophy.svg';

import React, { FC } from 'react';

import { DataGrid, GridColDef, GridSortDirection } from '@material-ui/data-grid';

import styled from 'styled-components';

import Avatar from './styled/StyledAvatar';

const StyledAvatar = styled(Avatar)`
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const columns: GridColDef[] = [
  { field: 'company', headerName: 'Company', width: 200 },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 150,
  },
];

const rows = [
  {
    id: '0b20acab-9360-49b9-94ba-954f46742f7d',
    company: 'Futurize',
    score: 665,
  },
  {
    id: '10452c15-bae7-43a2-8e89-c7b881ff69a7',
    company: 'Lingoage',
    score: 522,
  },
  {
    id: '0a44d567-dd3d-456a-832a-04bfe9d00e0d',
    company: 'Magnina',
    score: 943,
  },
  {
    id: '5ce37d8f-a68d-458d-a2b3-ec2a46f709a0',
    company: 'Tropoli',
    score: 984,
  },
  {
    id: 'd3c7b6e1-bf51-44dd-9000-869f53d86f7e',
    company: 'Cubicide',
    score: 749,
  },
  {
    id: 'ffd88af7-6c50-4384-b03b-74a22e97fdcf',
    company: 'Pheast',
    score: 598,
  },
  {
    id: 'a7c83921-3d8a-4789-8ec4-9ebb69bdaae3',
    company: 'Hometown',
    score: 281,
  },
  {
    id: '66ed8c62-ad8e-468f-9b61-2ac5050fffc9',
    company: 'Buzzopia',
    score: 253,
  },
  {
    id: '11cf316d-f1e4-4e96-857b-12f0724345ac',
    company: 'Enerforce',
    score: 292,
  },
];

const LeaderboardContainer = styled.div`
  height: 100%;
  width; 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledDataGrid = styled(DataGrid)`
  width: 100%;
`;

const Leaderboard: FC = () => (
  <LeaderboardContainer>
    <StyledAvatar src={Trophy} alt="Trophy" variant="square" />
    <StyledDataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      sortModel={[
        {
          field: 'score',
          sort: 'desc' as GridSortDirection,
        },
      ]}
    />
  </LeaderboardContainer>
);
export default Leaderboard;
