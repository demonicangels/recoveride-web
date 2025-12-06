"use client";

import { useState } from "react"
import { Box, Container, Card, CardContent, TextField, Button, Typography, Alert, Tabs, Tab } from "@mui/material"
import { User, Mail, Lock, ArrowLeft } from "lucide-react"

export function AuthPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [loginData, setLoginData] = useState({ email: "", password: "" })
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue)
    setError("")
  }

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    console.log("[v0] Login attempt:", { email: loginData.email })

    setTimeout(() => {
      setLoading(false)
      console.log("[v0] Login successful")
    }, 1000)
  }

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (signupData.password !== signupData.confirmPassword) {
      setError("Passwords do not match")
      return
    }

    if (signupData.password.length < 8) {
      setError("Password must be at least 8 characters long")
      return
    }

    setLoading(true)

    console.log("[v0] Signup attempt:", { name: signupData.name, email: signupData.email })

    setTimeout(() => {
      setLoading(false)
      console.log("[v0] Signup successful")
    }, 1000)
  }

  return (
    <Box
      sx={{
        minHeight: "83vh",
        bgcolor: "background.default",
        py: 8,
        marginBottom: 0,
        paddingBottom: 0,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{ mb: 4 }}>
          <Button
            href="/"
            startIcon={<ArrowLeft size={20} />}
            sx={{
              color: "text.secondary",
              "&:hover": { color: "primary.main" },
            }}
          >
            Back to Home
          </Button>
        </Box>

        <Card
          sx={{
            borderRadius: 4,
            boxShadow: 3,
          }}
        >
          <CardContent sx={{ p: { xs: 3, sm: 5 } }}>
            <Tabs
              value={activeTab}
              onChange={handleTabChange}
              centered
              sx={{
                mb: 4,
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 600,
                  minWidth: 120,
                },
              }}
            >
              <Tab label="Sign In" />
              <Tab label="Sign Up" />
            </Tabs>

            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography variant="h4" sx={{ fontWeight: 700, color: "text.primary", mb: 1 }}>
                {activeTab === 0 ? "Welcome Back" : "Join Recoveride"}
              </Typography>
              <Typography variant="body1" sx={{ color: "text.secondary" }}>
                {activeTab === 0
                  ? "Sign in to access your Recoveride account"
                  : "Create your account and protect your e-bike"}
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: 2 }}>
                {error}
              </Alert>
            )}

            {activeTab === 0 && (
              <form onSubmit={handleLoginSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                          <Mail size={20} color="#666" />
                        </Box>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                          <Lock size={20} color="#666" />
                        </Box>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                      },
                    }}
                  />

                  <Box sx={{ textAlign: "right" }}>
                    <a href="/forgot-password" style={{ textDecoration: "none" }}>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "primary.main",
                          "&:hover": { textDecoration: "underline" },
                        }}
                      >
                        Forgot password?
                      </Typography>
                    </a>
                  </Box>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      bgcolor: "black",
                      "&:hover": {
                        bgcolor: "#333",
                      },
                    }}
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </Button>
                </Box>
              </form>
            )}

            {activeTab === 1 && (
              <form onSubmit={handleSignupSubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    type="text"
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    required
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                          <User size={20} color="#666" />
                        </Box>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    required
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                          <Mail size={20} color="#666" />
                        </Box>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    required
                    helperText="Must be at least 8 characters"
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                          <Lock size={20} color="#666" />
                        </Box>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                      },
                    }}
                  />

                  <TextField
                    fullWidth
                    label="Confirm Password"
                    type="password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    required
                    InputProps={{
                      startAdornment: (
                        <Box sx={{ mr: 1, display: "flex", alignItems: "center" }}>
                          <Lock size={20} color="#666" />
                        </Box>
                      ),
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 3,
                      },
                    }}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      borderRadius: 3,
                      py: 1.5,
                      fontSize: "1rem",
                      fontWeight: 600,
                      textTransform: "none",
                      bgcolor: "black",
                      "&:hover": {
                        bgcolor: "#333",
                      },
                    }}
                  >
                    {loading ? "Creating account..." : "Create Account"}
                  </Button>

                  <Typography variant="body2" sx={{ color: "text.secondary", textAlign: "center" }}>
                    By signing up, you agree to our{" "}
                    <a href="/terms" style={{ color: "inherit", textDecoration: "underline" }}>
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="/privacy" style={{ color: "inherit", textDecoration: "underline" }}>
                      Privacy Policy
                    </a>
                  </Typography>
                </Box>
              </form>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
