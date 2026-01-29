// // import React, { useEffect, useRef } from 'react'

// // const Focus = () => {
// //     const inputRef = useRef(null);

// //     useEffect(()=>{
// //         inputRef.current.focus();
// //     },[]);
// //   return (
// //    <>
// //     <input type='text'
// //     placeholder='I am focused on mount'
// //     ref={inputRef} />
// //    </>
// //   )
// // }

// // export default Focus

// import * as React from 'react';
// import { useState } from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function BasicModal() {
//   const [open, setOpen] = useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

// const handleClick=()=>{
//   setOpen(!open)
// }
//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Typography id="modal-modal-title" variant="h6" component="h2">
//             Text in a modal
//           </Typography>

//           <div onClick={handleClick}>X</div>

//           {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//             Duis mollis, est non commodo luctus, nisi erat porttitor ligula.

//           </Typography> */}

//           <Typography>bfhjvfhjfkjdfhf</Typography>
//         </Box>
//       </Modal>
//     </div>
//   );
// }


// import * as React from 'react';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';

// export default function BasicModal() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   // const[menu, setMenu] = React.useState([
  
//   // ])
//   const menu = [{

//        id: 1,
//      name: "b hgyt"
      

//      },
//      {
//       id: 2,
//      name: "fhjf"
//      },

//   ]
//   const[selected, setSelected] = React.useState('');

  
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {

//     setAnchorEl(null);

//   };

//   const handleMenuClick=(it)=>{
//     console.log(it.id)
//     // console.log(e.target.innerText)
//     // setMenu(e.target.innerText)
//     setSelected(it.name)
//     console.log(selected)
//     handleClose()
//   }

//   React.useEffect(()=>{
//     console.log(selected,'inside useeffect')
//   },[selected]);

//   return (
//     <div>
//       <Button
//         id="basic-button"
//         aria-controls={open ? 'basic-menu' : undefined}    // ARIA= Accessible Rich Internet Applications
//         aria-haspopup="true"
//         aria-expanded={open ? 'true' : undefined}
//         onClick={handleClick}
//       >
//         Dashboard
//       </Button>
//       <Menu
//         id="basic-menu"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         slotProps={{
//           list: {
//             'aria-labelledby': 'basic-button',
//           },
//         }}
//       >
//       {menu &&  menu.map((item, index)=>(
//         <MenuItem key={index} onClick={()=>handleMenuClick(item)}>{item.name}</MenuItem>
//         ))}
//         {/* <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem> */}
//       </Menu>
//     </div>
//   );
// }


// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
// import MenuList from '@mui/material/MenuList';
// import MenuItem from '@mui/material/MenuItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Typography from '@mui/material/Typography';
// import ContentCut from '@mui/icons-material/ContentCut';
// import ContentCopy from '@mui/icons-material/ContentCopy';
// import ContentPaste from '@mui/icons-material/ContentPaste';
// import Cloud from '@mui/icons-material/Cloud';

// export default function BasicModal() {
//   return (
//     <Paper sx={{ width: 320, maxWidth: '100%' }}>
//       <MenuList>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentCut fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Cut</ListItemText>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             ⌘X
//           </Typography>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentCopy fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Copy</ListItemText>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             ⌘C
//           </Typography>
//         </MenuItem>
//         <MenuItem>
//           <ListItemIcon>
//             <ContentPaste fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Paste</ListItemText>
//           <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//             ⌘V
//           </Typography>
//         </MenuItem>
//         <Divider />
//         <MenuItem>
//           <ListItemIcon>
//             <Cloud fontSize="small" />
//           </ListItemIcon>
//           <ListItemText>Web Clipboard</ListItemText>
//         </MenuItem>
//       </MenuList>
//     </Paper>
//   );
// }



import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

