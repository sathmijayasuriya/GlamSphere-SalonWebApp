import React from 'react'
import { Box, Grid, Typography, Link } from '@mui/material';
import { Facebook, Twitter, WhatsApp, Instagram, YouTube } from '@mui/icons-material';

export default function FooterAuth() {
  return (
    <>
 <Box
      component="footer"
      sx={{
        backgroundColor: '#343a40',
        padding: '20px 0',
        color: 'white',
      }}
    >
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item xs={12}>
          <Typography variant="h5" sx={{ display: 'flex', alignItems: 'center' }}>
            <i className="bi bi-geo-alt-fill" style={{ marginRight: '8px' }}></i>
            State of Rio de Janeiro, Brazil
          </Typography>
          <Link href="mailto:info@company.com" sx={{ display: 'block', marginTop: '10px', color: 'white' }}>
            info@company.com
          </Link>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="body2" sx={{ marginBottom: '0' }}>
            Copyright © Nomad Force 2021
            <br />
            Design: <Link href="https://templatemo.com/page/1" target="_parent" sx={{ color: 'white' }}>TemplateMo</Link>
          </Typography>
        </Grid>

        <Grid item lg={3} xs={5} sx={{ marginLeft: 'auto' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" sx={{ color: 'white' }}>
              <Facebook />
            </Link>
            <Link href="#" sx={{ color: 'white' }}>
              <Twitter />
            </Link>
            <Link href="#" sx={{ color: 'white' }}>
              <WhatsApp />
            </Link>
            <Link href="#" sx={{ color: 'white' }}>
              <Instagram />
            </Link>
            <Link href="#" sx={{ color: 'white' }}>
              <YouTube />
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </>
  )
}
