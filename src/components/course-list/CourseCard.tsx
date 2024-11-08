import { Card, CardMedia, CardContent, Typography, Box, Stack } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';

interface CourseCardProps {
  image: string;
  category: string;
  price: number;
  title: string;
  rating: number;
  totalCustomers: number;
}

const CourseCard: React.FC<CourseCardProps> = ({ image, category, price, title, rating, totalCustomers }) => {
  return (
    <Card 
      className="cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 md:w-[378px] w-full"
      sx={{ borderRadius: 1 }}
    >
      <CardMedia 
        component="img" 
        image={image} 
        alt={title} 
        className="h-[200px]"
      />

      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography 
            variant="overline" 
            color="text.secondary" 
            sx={{ fontWeight: 'bold', color: '#f55d42', borderRadius: 1, paddingX: 1, backgroundColor: '#fef2f2' }}
          >
            {category}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            ${price}
          </Typography>
        </Box>

        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <StarIcon fontSize="small" sx={{ color: '#ffa726' }} />
            <Typography variant="body2">{rating.toFixed(1)}</Typography>
          </Stack>
          
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <PersonIcon fontSize="small" sx={{ color: '#9e9e9e' }} />
            <Typography variant="body2" color="text.secondary">
              {totalCustomers.toLocaleString()} students
            </Typography>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
