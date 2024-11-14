function bunnyroad(instructions: string[]): { x: number; y: number } {
  let position = { x: 0, y: 0 };

  for (const instruction of instructions) {
    switch (instruction) {
      case "gauche":
        position.x -= 1;
        break;
      case "droite":
        position.x += 1;
        break;
      case "nord":
        position.y += 1;
        break;
      case "sud":
        position.y -= 1;
        break;
    }
  }

  return position;
}
