export function temps(v0: number, slope: number, dTot: number): number {
 const GRAVITY_ACC = 9.81 * 3.6 * 60.0; 
  const DRAG = 60.0 * 0.3 / 3.6; 
  const DELTA_T = 1.0 / 60.0; 
  const G_THRUST = 60 * 3.6 * 3.6; 
  const MASS = 80.0; 
  const WATTS0 = 225.0; 
  const D_WATTS = 0.5; 

  let t = 0; 
  let gamma = 0; 
  let v = v0; 
  let d = 0; 
  let watts = WATTS0; 

  while (d < dTot) {
    const slopeFactor = slope / 100.0;
    const acceleration = -GRAVITY_ACC * slopeFactor + (DRAG * Math.abs(v) * Math.abs(v)) / MASS;
    const thrust = (watts > 0 && v > 0) ? (G_THRUST * watts) / (v * MASS) : 0;

    gamma = acceleration + thrust;
    if (Math.abs(gamma) <= 1e-5) {
      gamma = 0;
    }

    v = v + gamma * DELTA_T;
    if (v - 3.0 <= 1e-2) {
      return -1; 
    }

    d = d + v * DELTA_T * 60.0; 

    t++;
    watts = watts - D_WATTS * DELTA_T;
  }

  return Math.round(t);
}
