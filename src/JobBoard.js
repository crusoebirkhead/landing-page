import React, { useState } from 'react';
import { Grid2, Card, CardContent, Typography, Button, TextField, MenuItem, Select, Pagination } from '@mui/material';

const JobBoard = () => {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [page, setPage] = useState(1);

  const jobs = [
    { id: 1, title: 'Software Engineer', department: 'Engineering', location: 'New York' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'San Francisco' }
    // ...other job entries
  ];

  const handleSearchChange = (e) => setSearch(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);
  const handleDepartmentChange = (e) => setDepartment(e.target.value);
  const handlePageChange = (e, value) => setPage(value);

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: 'auto'  }}>
      {/* Search and Filter Controls */}
      <Grid2 container spacing={2} alignItems="center" justifyContent="space-between" style={{ marginBottom: '20px', paddingRight: '40px' }}>
        <Grid2 item xs={12} md={6}>
          <TextField
            label="Search Titles"
            variant="outlined"
            fullWidth
            value={search}
            onChange={handleSearchChange}
          />
        </Grid2>
        <Grid2 item xs={12} md={6} container justifyContent="flex-end" spacing={2}>
          <Grid2 item xs={6} md={5}>
            <Select
              value={location}
              onChange={handleLocationChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value=""><em>All Locations</em></MenuItem>
              <MenuItem value="New York">New York</MenuItem>
              <MenuItem value="San Francisco">San Francisco</MenuItem>
            </Select>
          </Grid2>
          <Grid2 item xs={6} md={5}>
            <Select
              value={department}
              onChange={handleDepartmentChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value=""><em>All Departments</em></MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Product">Product</MenuItem>
            </Select>
          </Grid2>
        </Grid2>
      </Grid2>

      {/* Job Cards Grid */}
      <Grid2 container spacing={4} justifyContent="flex-start">
        {jobs.map((job) => (
          <Grid2 item xs={12} sm={6} md={4} key={job.id}>
            <Card>
              <CardContent>
                <Typography variant="h6">{job.title}</Typography>
                <Typography color="textSecondary">{job.department}</Typography>
                <Typography color="textSecondary">{job.location}</Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>Apply</Button>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>

      {/* Pagination */}
      <Pagination
        count={10}  // This would dynamically change based on data
        page={page}
        onChange={handlePageChange}
        color="primary"
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      />
    </div>
  );
};

export default JobBoard;
