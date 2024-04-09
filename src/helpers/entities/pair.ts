import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { Pair } from "../../../generated/schema";

export function getOrCreatePair(pairAddress: Address): Pair {
  let pair = Pair.load(pairAddress);

  if (pair === null) {
    pair = new Pair(pairAddress);

    pair.baseToken = Bytes.empty();
    pair.quoteToken = Bytes.empty();
    pair.creator = Bytes.empty();
    pair.lpFeeRate = BigInt.zero();
    pair.maintainerFeeRateModel = Bytes.empty();
    pair.i = BigInt.zero();
    pair.k = BigInt.zero();
    pair.baseReserve = BigInt.zero();
    pair.quoteReserve = BigInt.zero();
    pair.removed = false;
    // pair.swapCount = BigInt.zero();

    pair.save();
  }

  return pair;
}
