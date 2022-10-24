package tn.esprit.spring.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.spring.entities.Film;
import tn.esprit.spring.services.FilmServices;

import java.util.List;
@RestController
@CrossOrigin(origins = "*")
//
@RequestMapping("/")

public class FilmController {

    @Autowired
    private FilmServices FilmServices;

    @PostMapping(value="/add")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Film> createFilm(@RequestBody Film film){
        return new ResponseEntity<>(FilmServices.addFilm(film), HttpStatus.OK);
    }

    @PutMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Film> updateFilm(@PathVariable(value = "id") int id,
                                           @RequestBody Film film){
        return new ResponseEntity<>(FilmServices.updateFilm(id, film), HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Film> deleteFilm(@PathVariable(value = "id") int id){
        FilmServices.deleteFilm(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(value="/getAll")
    @ResponseStatus(HttpStatus.OK)
    public List<Film> getAllFilms(){
        return FilmServices.GetFilms();
    }

    @GetMapping(value = "/{id}", produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Film> searchFilm(@PathVariable(value = "id") int id){
        return new ResponseEntity<>(FilmServices.findFilm(id) , HttpStatus.OK);
    }
 /*   @PutMapping("/affecter/{id_categorie_film}/{id}")
    @ResponseStatus(HttpStatus.OK)
    public String affecter(@PathVariable("id_categorie_film") int id_categorie_film ,@PathVariable("id") int id ){
       boolean test= FilmServices.affecter(id_categorie_film, id);
        if(test) {
            return "oui";
        }else{
            return "no";
        }
    }*/
}
