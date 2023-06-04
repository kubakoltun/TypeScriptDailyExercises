export class validate_pin {
  static validatePin(pin: string): boolean {
    const pinLen: number = pin.length;
    
    if ((pinLen == 4 && pin.match(/^[0-9]+$/)) || (pinLen == 6 && pin.match(/^[0-9]+$/))) {
      return true;
    }
    
    return false;
  }
}
