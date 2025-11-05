import { useState } from "react"
import { Box, Container, Typography, TextField, Button, Alert } from "@mui/material"
import { CheckCircle, Circle } from "lucide-react"
import recoverideLogo from "../assets/recoverideLogo.png"
import { BrevoAPI } from "../services/brevoAPI"

export function LandingPage() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const brevoAPI = new BrevoAPI()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    let name = "";
  
      if (email) {
        const match = email.match(/^([^@]*)@/)
        if (match) {
          name = match[1];
        }
      }
  
      const response = await brevoAPI.sendSubscriberToBrevo({ email, name })

      if (response) {
        console.log("Subscription successful:", response)
        await brevoAPI.putAllSubscribersInList()
      }

    setSubmitted(true)
    setLoading(false)
    setEmail("")
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #E0F2F1 0%, #B2DFDB 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        {/* Minimal Logo Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <img src={recoverideLogo} alt="Recoveride" width={120} height={120} style={{ margin: "0 auto" }} />
        </Box>

        {/* Main Content Card */}
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: 4,
            p: { xs: 4, md: 6 },
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          {/* Headline */}
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
              fontWeight: 800,
              color: "#1A237E",
              mb: 4,
              lineHeight: 1.2,
            }}
          >
            We handle the recovery.
            <br />
            <Box component="span" sx={{ color: "#26A69A" }}>
              You ride worry-free.
            </Box>
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontWeight: 400,
              color: "#616161",
              mb: 5,
              lineHeight: 1.6,
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            “When theft happens, you’re not alone. After you report it, we switch to recovery mode, coordinate with police/insurer, and keep you updated.”
          </Typography>

          {/* 3 Bullet Points */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              mb: 5,
              maxWidth: "500px",
              mx: "auto",       
            }}
          >
            {[
              "Install once → We discreetly place a GPS tracker in your e-bike. Location tracking stays off until you tell us there’s a problem.",
              "Report with one tap → If your bike is missing, activate recovery mode in seconds.",
              "We coordinate recovery → Live location to our team, contact with police, updates to you.",
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  textAlign: "left",
                }}
              >
                <CheckCircle size={28} color="#26A69A" style={{ flexShrink: 0 }} />
                <Typography
                  sx={{
                    fontSize: "1.1rem",
                    color: "#424242",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Newsletter Form */}
          <Box sx={{ maxWidth: "500px", mx: "auto", mb: 3 }}>
            {submitted ? (
              <Alert
                severity="success"
                sx={{
                  borderRadius: 3,
                  fontSize: "1rem",
                }}
              >
                🎉 You're on the list! We'll notify you when we launch.
              </Alert>
            ) : (
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <TextField
                    fullWidth
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                        bgcolor: "#F5F5F5",
                        fontSize: "1.1rem",
                        "& fieldset": {
                          borderColor: "transparent",
                        },
                        "&:hover fieldset": {
                          borderColor: "#26A69A",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#26A69A",
                        },
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      bgcolor: "#1A237E",
                      color: "white",
                      py: 1.8,
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      borderRadius: 3,
                      textTransform: "none",
                      boxShadow: "0 4px 14px rgba(26, 35, 126, 0.3)",
                      "&:hover": {
                        bgcolor: "#0D47A1",
                        boxShadow: "0 6px 20px rgba(26, 35, 126, 0.4)",
                      },
                    }}
                  >
                    {loading ? "Joining..." : "Join the Early Access List"}
                  </Button>
                </Box>
              </form>
            )}

            {/* Trust Line */}
            <Typography
              sx={{
                mt: 2,
                fontSize: "0.875rem",
                color: "#757575",
                fontStyle: "italic",
              }}
            >
              We track ONLY after you report theft. GDPR-compliant.
            </Typography>
          </Box>

          {/* Proof Row */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              flexWrap: "wrap",
              pt: 4,
              borderTop: "1px solid #E0E0E0",
            }}
          >
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "#616161",
                fontWeight: 500,
              }}
            >
              Partnering with local bike shops
            </Typography>
            <Circle size={8} fill="#BDBDBD" color="#BDBDBD" />
            <Typography
              sx={{
                fontSize: "0.9rem",
                color: "#616161",
                fontWeight: 500,
              }}
            >
              Coordinating with the police
            </Typography>
          </Box>
        </Box>

        {/* Minimal Footer */}
        <Typography
          sx={{
            textAlign: "center",
            mt: 4,
            fontSize: "0.875rem",
            color: "#616161",
          }}
        >
          © 2025 Recoveride. Report, Recover, Ride.
        </Typography>
      </Container>
    </Box>
  )
}