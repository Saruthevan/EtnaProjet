SELECT moves.identifier as attack
FROM pokemon_moves
INNER JOIN pokemon
ON pokemon_moves.pokemon_id = pokemon.id 
INNER JOIN moves ON pokemon_moves.move_id = moves.id
WHERE pokemon.identifier = "snorlax"
LIMIT 5;