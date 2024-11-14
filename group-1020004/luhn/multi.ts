function multi(A: number, B: number): void {
  for (let i = 0; i < B + 1; i++) {
    console.log(A, " x ", i, " = ", A * i);
  }
}

multi(2, 10);
