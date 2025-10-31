import { Box, Container, Typography, TextField, Button } from "@mui/material"
import { useState } from "react"
import { Mail } from "lucide-react"

export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("success")
    setEmail("")
    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <Box
      component="section"
      sx={{
        py: 10,
        background: "linear-gradient(to bottom right, #06B6D4, #14B8A6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 256,
          height: 256,
          bgcolor: "white",
          opacity: 0.1,
          borderRadius: "50%",
          transform: "translate(50%, -50%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 384,
          height: 384,
          bgcolor: "white",
          opacity: 0.1,
          borderRadius: "50%",
          transform: "translate(-50%, 50%)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 10 }}>
        <Box sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              bgcolor: "white",
              borderRadius: "50%",
              mb: 3,
            }}
          >
            <Mail size={32} color="#06B6D4" />
          </Box>

          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "2rem", md: "3rem" }, fontWeight: "bold", color: "white", mb: 2 }}
          >
            Stay Updated on E-Bike Security
          </Typography>

          <Typography variant="h6" sx={{ color: "white", opacity: 0.9, mb: 4 }}>
            Get the latest tips on protecting your e-bike, recovery success stories, and exclusive offers delivered to
            your inbox.
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2, maxWidth: "36rem", mx: "auto" }}
          >
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "50px",
                  bgcolor: "white",
                  "& fieldset": {
                    border: "none",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                bgcolor: "black",
                color: "white",
                borderRadius: "50px",
                fontWeight: 600,
                fontSize: "1.125rem",
                whiteSpace: "nowrap",
                "&:hover": {
                  bgcolor: "#1F2937",
                },
              }}
            >
              Subscribe Now
            </Button>
          </Box>

          {status === "success" && (
            <Typography variant="body1" sx={{ mt: 2, color: "white", fontWeight: 500 }}>
              Thank you for subscribing! Check your inbox for confirmation.
            </Typography>
          )}

          <Typography variant="body2" sx={{ mt: 3, color: "white", opacity: 0.7 }}>
            We respect your privacy. Unsubscribe at any time.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
