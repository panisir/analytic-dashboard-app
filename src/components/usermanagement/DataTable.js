import React, { useContext, useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { APIContext } from '../../context/APIContext';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'firstname', headerName: 'First name', width: 130 },
  { field: 'lastname', headerName: 'Last name', width: 130 },
  {
    field: 'email',
    headerName: 'E-mail',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  { field: 'role', headerName: 'Role', width: 130 },
];

const DataTable = () => {

  const { listUsers } = useContext(APIContext);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await listUsers();
        usersData.map((user, index) => {
          user.id = index + 1;
          return user;
        });
        setUsers(usersData);
      } catch (error) {
          console.error('Error while fetching users', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={users}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

export default DataTable;