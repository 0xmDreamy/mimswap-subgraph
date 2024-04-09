import { Address, BigInt } from "@graphprotocol/graph-ts";

export const protocolId = Address.zero();

export const ONE = BigInt.fromString("1000000000000000000");

export const usdReferenceTokenMap = new Map<string, Address>().set(
  "blast-mainnet",
  Address.fromString("0x4300000000000000000000000000000000000003"),
);

export const FREQUENCY_HOURLY = "HOURLY";
export const FREQUENCY_DAILY = "DAILY";
export const FREQUENCY_WEEKLY = "WEEKLY";

export const FREQUENCY_DURATION_MAP = new Map<string, BigInt>()
  .set(FREQUENCY_HOURLY, BigInt.fromU64(3600))
  .set(FREQUENCY_DAILY, BigInt.fromU64(86400))
  .set(FREQUENCY_WEEKLY, BigInt.fromU64(604800));
