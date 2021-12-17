export interface IDrone {
  id: number,
  name: string,
  photoUrl: string,
  videoUrl: string,
  description: string
}

export interface IDroneExtended {
  id: number,
  name: string,
  photoUrl: string[],
  videoUrl: string,
  description: string,
  specs: {
    cost: number,
    iq: number,
    maxHight: number,
    speed: number,
    wight: number,
    workTime: number,
  }
}