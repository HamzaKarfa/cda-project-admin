import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
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

