// import { BigInt, Bytes, Entity } from "@graphprotocol/graph-ts";
// import { ProtocolSnapshot } from "../../../generated/schema";
// import { FREQUENCY_DURATION_MAP } from "../../constants";

// function zeroStatistics(entity: Entity):

//   export function getOrCreateStatisticsSnapshot(protocolId: Bytes, frequency: string, blockTimestamp: BigInt): ProtocolSnapshot {
//     const epoch = blockTimestamp.div(FREQUENCY_DURATION_MAP.get(frequency));
//     const id = protocolId
//       .concat(Bytes.fromUTF8(frequency))
//       .concat(Bytes.fromBigInt(epoch));
//     let protocolSnapshot = ProtocolSnapshot.load(id);

//     if (protocolSnapshot === null) {
//       protocolSnapshot = new ProtocolSnapshot(id);

//     }
//   }
