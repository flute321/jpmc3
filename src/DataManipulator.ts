import { ServerRespond } from './DataStreamer';

export interface Row {
  price_abc: number,
  price_def: number,
  ratio: number,
  trigger_alert: number | undefined,
  upper_bound: number,
  lower_bound: number,
  timestamp: Date,
}


export class DataManipulator {
  static generateRow(serverResponds: ServerRespond[]) {
    return serverResponds.map((el: any) => {
      return {
        price_abc: priceABC,
        price_def: priceDEF,
        ratio,
        trigger_alert: (ration>upperBound || ration <lowerBound)?ratio:undefined,
        upper_bound: upperBound,
        lower_bound: lowerBound,
        timestamp: serverRespond[0].timestamp > serverRespond[1].timestamp?serverRespond[0].timestamp:serverRespond[1].timestamp,
      }
      };
    })
  }
}
