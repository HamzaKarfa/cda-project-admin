import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Title } from 'ra-ui-materialui';
import { bgcolor } from '@mui/system';
import { purple, grey } from '@mui/material/colors';
export default function CardInfoDashBoard (props){
    return (  
    <Card sx={{ width: '40%', margin:2,  boxShadow: 4, background: props.color}} >
        <CardHeader
            align="center"
            title={props.title}
        />
        <CardContent >
        <Typography variant="h2" align="center" color={grey[900]}>
               <b color="primary">{props.ressource.total}</b>
        </Typography>
        </CardContent>
    </Card>
)
}

