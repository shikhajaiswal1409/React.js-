import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems, setPagination } from '../../redux/itemsSlice';
import { useEffect } from 'react';

const columns = [
//  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true,
    renderCell: (para)=>(
        <div>
            {para.value} 
        </div>
    )
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
    editable: true,
    renderCell: (para)=>(
        <div>
            {para.value} 
        </div>
    )
  },
  {
    field: 'rating',
    headerName: 'Rating',
    type: 'number',
    width: 110,
    editable: true,
    renderCell: (para)=>(
        <div>
            {para.value} 
        </div>
    )
  },
  {
    field: 'category',
     headerName: 'Category',
    type: 'number',
    width: 110,
    editable: true,
    renderCell: (para)=>(
        <div>
            {para.value} 
        </div>
    )
  },

  //params.value = row[field]

  {
    field: 'price',
     headerName: 'Price',
    type: 'number',
    width: 110,
    editable: true,
    renderCell: (para)=>(
        <div>
            {para.value} 
        </div>

    )
    
  },

  {
    field: 'imageUrl',
    headerName: 'Image',
    renderCell:(para)=>(
      
<img src={para.row.imageUrl} alt='image' width="20px" height="20px" />
    )
    
  }
];



const Table=()=>{
      const dispatch = useDispatch()    

      const item = useSelector((state) => state.items.items)
      const pagination = useSelector((state)=>state.items.pagination)
      const loading = useSelector((state) => state.items.loading);

      console.log(item, "itemmmmmm")

      useEffect(()=>{
dispatch(fetchItems({
  page: pagination.currentPage,
  limit: pagination.itemsPerPage
}))
      },[dispatch, pagination.currentPage, pagination.itemsPerPage])


    
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid 
        rows={item}
        columns={columns}
        getRowId={(row) => row._id}
        loading={loading}

        paginationMode="server"
        rowCount={pagination.totalItems}

        pageSizeOptions={[5, 10, 20, 50]}

        paginationModel={{
          page: pagination.currentPage - 1,
        pageSize: pagination.itemsPerPage
        }}

        

        onPaginationModelChange={(model) => {
  
  dispatch(fetchItems({
    page: model.page + 1,
    limit: model.pageSize,
  }));
  dispatch(setPagination({
    page: model.page + 1,      // DataGrid = 0-based
    limit: model.pageSize,
  }));

}}

      />
    </Box>
  );
}
export default Table;
/*
🧠 What is renderCell?

renderCell lets you fully control how a cell is rendered instead of showing plain text.

By default, DataGrid does this:

"Baloon"
With renderCell, you can render:

images 🖼️
buttons 🔘
icons ⭐
formatted text
links 🔗
badges / chips
multiple values in one cell


How you should THINK when writing code
Ask these questions in this order:

1️⃣ Who owns pagination?
→ Backend

2️⃣ Who stores pagination state?
→ Redux

3️⃣ Who shows pagination buttons?
→ DataGrid

4️⃣ What triggers page change?
→ User click

5️⃣ What do I do on page change?
→ Call API with page number

Final mental model (remember this)

DataGrid never fetches data
Redux never decides pages
Backend never knows UI
*/

