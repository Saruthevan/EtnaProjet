SELECT COUNT(pokemon.identifier) AS nb 
FROM pokemon
INNER JOIN pokemon_types 
ON pokemon.id =
pokemon_types.pokemon_id
INNER JOIN types 
ON pokemon_types.type_id = types.id WHERE types.identifier = "ice";