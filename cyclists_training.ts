export function temps(v0: number, slope: number, dTot: number): number {
  const Ga = 9.81 * 3.6 * 60.0;
  const D = 60.0 * 0.3 / 3.6;
  const DT = 1.0 / 60.0;
  const GT = 60 * 3.6 * 3.6;
  const M = 80.0;
  const W = 225.0;
  const DW = 0.5;
  
  let t = 0;
  let v = v0;
  let d = 0;
  let wat = W;
  while (d < dTot) {
    const g = (GT * wat) / (v * M) - D * Math.abs(v) * v / M - Ga * Math.sin(Math.atan(slope / 100));
    const a = (Math.abs(g) <= 1e-5) ? 0 : g;
    v += a * DT;
    d += v * DT / 60.0;
    wat -= DW * DT;
    if (v < 3.0) {
      return -1;
    };
    t++;
  };
  return Math.round(t * DT);
};
