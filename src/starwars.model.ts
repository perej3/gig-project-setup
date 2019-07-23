export interface ShipModule<T> {
  name: string;
  value: T;
}

export interface StarshipValue {
  name: string;
  pilotUrls: string[];
}

export interface PilotValue {
  name: string;
  height: number;
}

export interface ShipAnswers {
  type: string;
  name: string;
  message: string;
  choices: ShipModule<StarshipValue>[];
}

export interface StarshipAnswer {
  starship: StarshipValue;
}

export interface PilotAnswer {
  pilot: PilotValue;
}
