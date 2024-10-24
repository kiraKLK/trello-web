import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Stack from '@mui/material/Stack';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Button from '@mui/material/Button';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
function App() {

  return (
    <>
      <AccessAlarm />
      <ThreeDRotation />
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Stack direction="row" spacing={3}>
        <HomeIcon />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
        <HomeIcon color="success" />
        <HomeIcon color="action" />
        <HomeIcon color="disabled" />
        <HomeIcon sx={{ color: pink[500] }} />
      </Stack>
    </>
  )
}

export default App
