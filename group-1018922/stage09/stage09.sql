SELECT DISTINCT  
CASE 
    WHEN moves.identifier ='hydro-pump' THEN 'hydro-pump'
    ELSE 'null'
END AS attaques 
FROM pokemon 
INNER JOIN pokemon_moves 
ON pokemon.id = pokemon_moves.pokemon_id
INNER JOIN moves
ON pokemon_moves.move_id = move_id
WHERE pokemon.identifier ='Feraligatr'
AND moves.identifier = 'hydro-pump';
