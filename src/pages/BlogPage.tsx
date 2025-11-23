import { 
  Container, 
  Typography, 
  Box, 
  Card as MuiCard, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Button, 
  Stack
} from '@mui/material'
import {ArrowRight} from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const blogPosts = [
  {
    id: 1,
    title: "What To Do Immediately After Your Bike Is Stolen",
    description: "A step-by-step guide on the critical actions to take within the first 24 hours of discovering your e-bike has been stolen.",
    image: "/person-using-smartphone-to-report-bike-theft.jpg",
    date: "March 10, 2025",
    path: "/blog/what-to-do-after-bike-stolen"
  },
  {
    id: 2,
    title: "Understanding E-Bike Theft Statistics in the Netherlands",
    description: "Explore the latest data on e-bike theft trends across Dutch cities and learn which areas are most affected.",
    image: "/data-visualization-of-bike-theft-statistics.jpg",
    date: "March 5, 2025",
    path: "/blog/e-bike-theft-statistics"
  },
  {
    id: 3,
    title: "How GPS Tracking Technology Helps Recover Stolen Bikes",
    description: "Discover how modern GPS technology is revolutionizing bike recovery and increasing the chances of getting your e-bike back.",
    image: "/gps-tracker-device-on-bicycle.jpg",
    date: "February 28, 2025",
    path: "/blog/gps-tracking-technology"
  },
  {
    id: 4,
    title: "Insurance Claims: What You Need to Know",
    description: "Navigate the complexities of filing insurance claims for stolen e-bikes with our comprehensive guide to documentation and processes.",
    image: "/insurance-documents-and-paperwork.jpg",
    date: "February 15, 2025",
    path: "/blog/insurance-claims-guide"
  }
]

export function BlogPage() {
    const navigate = useNavigate();
  return (
    <Box component="section" sx={{ minHeight: '100vh', py: { xs: 10, md: 16 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ maxWidth: 800, mx: 'auto', mb: 8, textAlign: 'center' }}>
          <Typography 
            variant="overline" 
            component="span" 
            sx={{ 
              display: 'inline-block', 
              mb: 2, 
              fontWeight: 600, 
              letterSpacing: 1.5,
              color: 'text.secondary' 
            }}
          >
            Our Blog
          </Typography>
          <Typography 
            variant="h2" 
            component="h1" 
            sx={{ 
              mb: 2, 
              fontWeight: 700, 
              fontSize: { xs: '2.5rem', md: '3.5rem' }
            }}
          >
            Stay Informed, Stay Protected
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              color: 'text.secondary', 
              fontWeight: 400,
              lineHeight: 1.6
            }}
          >
            Expert advice, insights, and stories about e-bike security and recovery
          </Typography>
        </Box>

        {/* Blog Cards Column */}
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Stack spacing={4}>
            {blogPosts.map((post) => (
              <MuiCard 
                key={post.id} 
                sx={{ 
                  display: 'flex',
                  flexDirection: { xs: 'column', md: 'row' },
                  transition: 'box-shadow 0.3s ease',
                  '&:hover': {
                    boxShadow: 6
                  }
                }}
              >
                {/* Image */}
                <CardMedia
                  component="img"
                  sx={{ 
                    width: { xs: '100%', md: 300 },
                    height: { xs: 240, md: 'auto' },
                    objectFit: 'cover'
                  }}
                  image={post.image || "/placeholder.svg"}
                  alt={post.title}
                />
                
                {/* Content */}
                <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <CardContent sx={{ flex: 1, p: 3 }}>
                    <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary">
                        {post.date}
                      </Typography>
                    </Stack>
                    
                    <Typography 
                      variant="h5" 
                      component="h2" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 700,
                        mb: 1.5,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {post.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ lineHeight: 1.7 }}
                    >
                      {post.description}
                    </Typography>
                  </CardContent>
                  
                  <CardActions sx={{ p: 3, pt: 0 }}>
                    <Button 
                      variant="outlined" 
                      endIcon={<ArrowRight />}
                      sx={{
                        '&:hover .MuiSvgIcon-root': {
                          transform: 'translateX(4px)',
                          transition: 'transform 0.3s ease'
                        }
                      }}
                      onClick={() => navigate(post.path)}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Box>
              </MuiCard>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
