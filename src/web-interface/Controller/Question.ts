/**
 * 
 * @title : Question.ts
 * @brief : Question controller
 *              Pages : 
 *                  1/ GET & POST /question
 *                  2/ GET /question/list
 */

/**
 * 
 * IMPORTS
 * 
 */
import express from 'express'; // express




exports.displayQPage = function(req, res) {
    res.render("questions", {title : 'Créez votre question | QuizzBot'});
};

exports.formQPage = function(req, res) {
    res.send(req.body);
};
