// tslint:disable-next-line:no-namespace
export namespace Model {
  export interface Runner {
    RunnerName: string;
    RunnerUKAN: string;
  }

  export interface RunnerDetail {
    Name: string;
    listOfRaces: Extra;
    ukaNumber: number;
  }

  export interface Extra {
    RaceActualTime: string;
    RaceDate: string;
    RaceDistance: string;
    RaceID: any;
    RaceTargetTime: string;
    RaceTitle: string;
    TargetTime: any;
  }
}
// Here I have created interfaces that will be the types of my objects and arrays that will hold the runner data
// This is so if I'm working in a group other people who use the code will know if they haven't inserted correct data
