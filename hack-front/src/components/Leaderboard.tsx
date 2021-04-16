import React, { FC } from 'react';

import { DataGrid, GridColDef, GridSortDirection } from '@material-ui/data-grid';

import styled from 'styled-components';

import StyledAvatar from './styled/StyledAvatar';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', width: 120 },
  { field: 'aff', headerName: 'Affiliation', width: 120 },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 120,
  },
];

const rows = [
  { id: 1, aff: 'Snow', name: 'Jon', score: 35 },
  { id: 2, aff: 'Lannister', name: 'Cersei', score: 42 },
  { id: 3, aff: 'Lannister', name: 'Jaime', score: 45 },
  { id: 4, aff: 'Stark', name: 'Arya', score: 16 },
  { id: 5, aff: 'Targaryen', name: 'Daenerys', score: null },
  { id: 6, aff: null, name: 'Melisandre', score: 150 },
  { id: 7, aff: 'Clifford', name: 'Ferrara', score: 44 },
  { id: 8, aff: 'Frances', name: 'Rossini', score: 36 },
  { id: 9, aff: 'Roxie', name: 'Harvey', score: 65 },
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
    <StyledAvatar />
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
