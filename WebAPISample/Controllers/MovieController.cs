﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebAPISample.Data;
using WebAPISample.Models;

namespace WebAPISample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private ApplicationContext _context;
        public MovieController(ApplicationContext context)
        {
            _context = context;
        }
        // GET api/movie
        [HttpGet]
        public IActionResult Get()
        {
            // Retrieve all movies from db logic
            return Ok(_context.Movies);
        }

        // GET api/movie/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var listOfMovies = _context.Movies.Where(s => s.MovieId == id).FirstOrDefault();
            // Retrieve movie by id from db logic
            // return Ok(movie);
            return Ok(listOfMovies);
        }

        // POST api/movie
        [HttpPost]
        public IActionResult Post([FromBody]Movie value)
        {
            // Create movie in db logic

            Movie movie = new Movie
            {
                Title = value.Title,
                Director = value.Director,
                Genre = value.Genre
            };
            _context.Movies.Add(movie);
            _context.SaveChanges();

            return Ok(value);
        }

        // PUT api/movie
        [HttpPut]
        public IActionResult Put([FromBody] Movie movie)
        {
            // Update movie in db logic
            var movieInDb = _context.Movies.Where(s => s.MovieId == movie.MovieId).FirstOrDefault();
            movieInDb.Title = movie.Title;
            movieInDb.Director = movie.Director;
            movieInDb.Genre = movie.Genre;
            return Ok(movieInDb);
        }

        // DELETE api/movie/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            // Delete movie from db logic
            var movie = _context.Movies.Where(s => s.MovieId == id).FirstOrDefault();
            _context.Movies.Remove(movie);
            _context.SaveChanges();
            return Ok();
        }
    }
}