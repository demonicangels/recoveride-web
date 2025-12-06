"use client";

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material"
import { Check } from "lucide-react"
import { useNavigate } from "react-router-dom"

export function SubscriptionsSection() {
  const plans = [
    {
      name: "Basic",
      price: "€9.99",
      period: "per month",
      description: "Essential protection for your e-bike",
      features: [
        "GPS tracker included",
        "Real-time location tracking via fin my app",
        "Police reporting assistance",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Premium",
      price: "€14.99",
      period: "per month",
      description: "Complete protection with recovery service",
      features: [
        "Everything in Basic",
        "Bike recovery services",
        "Assistance in police/insurer documents",
        "24/7 priority support",
        "Extended GPS battery life",
      ],
      popular: true,
    },
    {
      name: "Family",
      price: "€24.99",
      period: "per month",
      description: "Protect up to 4 e-bikes",
      features: [
        "Everything in Premium",
        "Up to 4 GPS trackers",
        "Multi-bike management",
        "Maintenance check every 2 years",
      ],
      popular: false,
    },
  ]

  const navigate = useNavigate()

  const handleGetStarted = () => {
    navigate("/auth")
  }

  return (
    <Box component="section" id="subscriptions" sx={{ bgcolor: "#F9FAFB", py: { xs: 10, md: 16 } }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: "primary.main" }}>
            Subscriptions
          </Typography>
        </Box>
        <Box sx={{ maxWidth: "48rem", mx: "auto", mb: 8, textAlign: "center" }}>
          <Typography variant="h2" sx={{ mb: 2, fontSize: { xs: "2rem", md: "3rem" }, fontWeight: "bold" }}>
            Choose Your Protection Plan
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.125rem", lineHeight: 1.7, color: "text.secondary" }}>
            All plans include a GPS tracker and 30-day money-back guarantee
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {plans.map((plan, index) => (
            <Card
              key={index}
              sx={{
                position: "relative",
                border: "none",
                boxShadow: 3,
                height: "100%",
                display: "flex",
                padding: 0,
                flexDirection: "column",
                bgcolor: "white",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: 6,
                },
                ...(plan.popular && {
                  outline: "4px solid",
                  outlineColor: "primary.main",
                }),
                overflow: "visible",
              }}
            >
              {plan.popular && (
                <Box sx={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", zIndex: 10 }}>
                  <Chip
                    label="Most Popular"
                    sx={{
                      bgcolor: "primary.main",
                      color: "white",
                      fontWeight: "bold",
                      px: 2,
                      py: 1,
                      boxShadow: 2,
                    }}
                  />
                </Box>
              )}
              
              <CardContent sx={{ textAlign: "center", pb: 2, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
                  {plan.name}
                </Typography>
                <Box sx={{ mb: 1 }}>
                  <Typography component="span" variant="h3" sx={{ fontWeight: "bold" }}>
                    {plan.price}
                  </Typography>
                  <Typography component="span" variant="body1" sx={{ color: "text.secondary" }}>
                    {" "}
                    {plan.period}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                  {plan.description}
                </Typography>

                <List sx={{ mb: 3, flexGrow: 1 }}>
                  {plan.features.map((feature, featureIndex) => (
                    <ListItem key={featureIndex} disablePadding sx={{ mb: 1.5 }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <Check size={20} color="#4FD1C5" />
                      </ListItemIcon>
                      <ListItemText
                        primary={feature}
                      />
                    </ListItem>
                  ))}
                </List>

                <Button
                  variant="contained"
                  fullWidth
                  href="#contact"
                  sx={{
                    borderRadius: "50px",
                    py: 1.5,
                    bgcolor: plan.popular ? "black" : "primary.main",
                    color: "white",
                    "&:hover": {
                      bgcolor: plan.popular ? "#374151" : "primary.dark",
                    },
                  }}
                  onClick={() => handleGetStarted()}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>


        <Typography variant="body2" sx={{ mt: 4, textAlign: "center", color: "text.secondary" }}>
          All prices include VAT. Cancel anytime, no questions asked.
        </Typography>
      </Container>
    </Box>
  )
}
