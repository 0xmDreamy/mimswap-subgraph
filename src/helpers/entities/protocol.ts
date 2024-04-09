import { BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Protocol } from "../../../generated/schema";

export function getOrCreateProtocol(protocolId: Bytes): Protocol {
  let protocol = Protocol.load(protocolId);

  if (protocol === null) {
    protocol = new Protocol(protocolId);

    // protocol.swapCount = BigInt.zero();

    protocol.save();
  }

  return protocol;
}
