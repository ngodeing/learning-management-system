"use client";
import { useState } from "react";
import { Box, Container, TextField, MenuItem, Typography, Grid2 } from "@mui/material";
import CourseCard from "./CourseCard";
import { courses } from "../../data/courseDummy";

export default function CourseList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [sortOption, setSortOption] = useState("newest");
  const popularSearches = ["Next.js", "Python", "Data Science", "Python"];

  const filteredCourses = courses
    .filter((course) => course.title.toLowerCase().includes(searchTerm.toLowerCase()) && (!filterCategory || course.category === filterCategory))
    .sort((a, b) => {
      if (sortOption === "totalCustomers") return b.totalCustomers - a.totalCustomers;
      if (sortOption === "rating") return b.rating - a.rating;
      return b.id - a.id; // Assume newest is by ID
    });

  return (
    <Container className="flex flex-col py-5 bg-slate-100">
      <Box className="flex gap-2">
        <TextField
            select
            label="Filter"
            variant="outlined"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="md:w-[200px]"
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="Web Development">Web Development</MenuItem>
            <MenuItem value="Data Science">Data Science</MenuItem>

        </TextField>
        <Box className="flex gap-2" sx={{ flex: 1 }}>
          <TextField label="Search Courses" variant="outlined" className="w-full" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <TextField
            select
            label="Sort By"
            variant="outlined"
            value={sortOption}
            className="md:w-[200px]"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <MenuItem value="newest">Newest</MenuItem>
            <MenuItem value="totalCustomers">Total Customers</MenuItem>
            <MenuItem value="rating">Rating</MenuItem>
          </TextField>
        </Box>
      </Box>
      <Box className="flex flex-row justify-between gap-2 px-1">
        <Box className="flex gap-2 items-center">
              <Typography variant="body2">Suggestion:</Typography>
              {popularSearches.slice(0, 3).map((suggestion, index) => (
                <Typography key={index} variant="body2" className="cursor-pointer text-orange-400" onClick={() => setSearchTerm(suggestion)}>
                  {suggestion}
                </Typography>
              ))}
        </Box>
        <Typography variant="body2" gutterBottom className="mt-2">
          {filteredCourses.length} results found
        </Typography>
      </Box>
      <Grid2 container className="mt-5 flex  items-center gap-2">
        {filteredCourses.map((course) => (
          <Grid2 
            key={course.id}
          >
            <CourseCard {...course} />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
}
