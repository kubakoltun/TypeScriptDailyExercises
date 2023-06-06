export function temps(v0:number, slope:number, dTot:number): number {
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
    const slopeFactor = (Math.atan(slope / 100) * 180) / Math.PI;
    const slopeEffect = GRAVITY_ACC * Math.sin(slopeFactor); 

    const acceleration = -slopeEffect - (DRAG * Math.abs(v) * v / MASS);

    if (watts > 0 && v > 0) {
      const thrust = G_THRUST * watts / (v * MASS);
      gamma = acceleration + thrust;
    } else {
      gamma = acceleration;
    }

    if (Math.abs(gamma) <= 1e-5) {
      gamma = 0;
    }

    v = v + gamma * DELTA_T;
    d = d + (v * DELTA_T) / 60.0;
    watts = watts - (D_WATTS * DELTA_T);

    if (v - 3.0 <= 1e-2) {
      return -1;
    }

    t++;
  }

  return Math.round(t);
}
