SELECT DISTINCT COUNT(pokemon_types.pokemon_id) as nb 
FROM types 
INNER JOIN pokemon_types
ON types.id = pokemon_types.type_id
INNER JOIN pokemon 
ON pokemon_types.pokemon_id = pokemon.id 
INNER JOIN pokemon_form_generations
ON pokemon_form_generations.pokemon_form_id = pokemon.id
WHERE pokemon_form_generations.generation_id = '2' AND types.identifier ='steel';