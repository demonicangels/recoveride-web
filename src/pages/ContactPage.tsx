import { useState } from "react"
import { Container, Box, Typography, TextField, Button, Card, CardContent, Alert } from "@mui/material"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <>
      <Box sx={{ bgcolor: "background.default", minHeight: "100vh", py: 8 }}>
        <Container maxWidth="lg">
          {/* Top Section */}
          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography
              variant="overline"
              sx={{
                color: "primary.main",
                fontWeight: 600,
                fontSize: "1rem",
                letterSpacing: 1,
              }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "2rem", md: "3rem" },
                mt: 2,
                mb: 2,
              }}
            >
              We're Here to Help
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.125rem",
                maxWidth: 600,
                mx: "auto",
              }}
            >
              Have questions about our e-bike recovery service? We'd love to hear from you. Our team is ready to
              assist you.
            </Typography>
          </Box>

            {/* Contact Information Cards */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
                justifyContent: "center",
                mb: 8,
              }}
            >
              <Card
                sx={{
                  bgcolor: "rgba(79, 209, 197, 0.08)",
                  borderRadius: 4,
                  border: "none",
                  boxShadow: "none",
                  flex: 1,
                  maxWidth: { md: 320 },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      bgcolor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Mail size={24} color="#4FD1C5" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Email Us
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                    Send us an email anytime
                  </Typography>
                  <Typography variant="body1" sx={{ color: "primary.main", fontWeight: 500 }}>
                    recoveridenl@gmail.nl
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  bgcolor: "rgba(79, 209, 197, 0.08)",
                  borderRadius: 4,
                  border: "none",
                  boxShadow: "none",
                  flex: 1,
                  maxWidth: { md: 320 },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      bgcolor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <Phone size={24} color="#4FD1C5" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Call Us
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                    Mon-Fri from 8am to 6pm
                  </Typography>
                  <Typography variant="body1" sx={{ color: "primary.main", fontWeight: 500 }}>
                    +31 20 123 4567
                  </Typography>
                </CardContent>
              </Card>

              <Card
                sx={{
                  bgcolor: "rgba(79, 209, 197, 0.08)",
                  borderRadius: 4,
                  border: "none",
                  boxShadow: "none",
                  flex: 1,
                  maxWidth: { md: 320 },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      bgcolor: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    <MapPin size={24} color="#4FD1C5" />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Visit Us
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                    Come say hello
                  </Typography>
                  <Typography variant="body1" sx={{ color: "primary.main", fontWeight: 500 }}>
                    Rachelsmolen 1, Eindhoven, Netherlands
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {/* Contact Form */}
            <Card
              sx={{
                bgcolor: "white",
                borderRadius: 4,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                maxWidth: 800,
                mx: "auto",
                width: "100%",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                  Send Us a Message
                </Typography>

                {submitted && (
                  <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
                    Thank you for reaching out! We'll get back to you as soon as possible.
                  </Alert>
                )}

                <form onSubmit={handleSubmit}>
                  <Box sx={{ display: "grid", gap: 3 }}>
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                        gap: 3,
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        sx={{
                          "& .MuiOutlinedInput-root": {
                            borderRadius: 2,
                          },
                        }}
                      />
                    </Box>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={6}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 2,
                        },
                      }}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      fullWidth
                      endIcon={<Send size={18} />}
                      sx={{
                        bgcolor: "black",
                        color: "white",
                        borderRadius: "50px",
                        py: 1.5,
                        fontSize: "1rem",
                        fontWeight: 600,
                        textTransform: "none",
                        "&:hover": {
                          bgcolor: "#333",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Box>
                </form>
              </CardContent>
            </Card>
        </Box>
      </Box>
    </>
  )
}
