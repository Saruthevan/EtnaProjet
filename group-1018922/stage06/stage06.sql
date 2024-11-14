SELECT types.identifier as type
FROM types
INNER JOIN pokemon_types
ON types.id = pokemon_types.type_id 
INNER JOIN pokemon
ON pokemon.id = pokemon_types.pokemon_id 
WHERE pokemon.identifier = "scyther";
