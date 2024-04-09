import {
  LogBlastNativeClaimableEnabled,
  LogCreated,
  LogPoolAdded,
  LogPoolRemoved,
  LogSetImplementation,
  LogSetMaintainer,
  LogSetMaintainerFeeRateModel,
  OwnershipTransferred,
} from "../../generated/BlastMIMSwapFactory/BlastMIMSwapFactory";
import { BlastMagicLP as BlastMagicLPContract } from "../../generated/BlastMagicLP/BlastMagicLP";
import { BlastMagicLP as BlastMagicLPTemplate } from "../../generated/templates";
import {
  createLogBlastNativeClaimableEnabled,
  createLogCreated,
  createLogPoolAdded,
  createLogPoolRemoved,
  createLogSetImplementation,
  createLogSetMaintainer,
  createLogSetMaintainerFeeRateModel,
  createOwnershipTransferred,
} from "../helpers/entities/events/mimswapFactory";
import { getOrCreatePair } from "../helpers/entities/pair";
import { getOrCreateToken } from "../helpers/entities/token";
// import { updatePrice } from "../helpers/updates/price";
import { getOrCreateUser } from "../helpers/entities/user";

export function handleLogBlastNativeClaimableEnabled(
  event: LogBlastNativeClaimableEnabled,
): void {
  createLogBlastNativeClaimableEnabled(event);
}

export function handleLogCreated(event: LogCreated): void {
  createLogCreated(event);
}

export function handleLogPoolAdded(event: LogPoolAdded): void {
  createLogPoolAdded(event);

  BlastMagicLPTemplate.create(event.params.pool);

  const magicLpContract = BlastMagicLPContract.bind(event.params.pool);
  const pair = getOrCreatePair(event.params.pool);
  pair.baseToken = getOrCreateToken(event.params.baseToken).id;
  pair.quoteToken = getOrCreateToken(event.params.quoteToken).id;
  pair.creator = getOrCreateUser(event.params.creator).id;
  pair.lpFeeRate = magicLpContract._LP_FEE_RATE_();
  pair.maintainerFeeRateModel = magicLpContract._MT_FEE_RATE_MODEL_();
  pair.i = magicLpContract._I_();
  pair.k = magicLpContract._K_();
  pair.baseReserve = magicLpContract._BASE_RESERVE_();
  pair.quoteReserve = magicLpContract._QUOTE_RESERVE_();
  pair.removed = false;
  pair.save();

  // updatePrice(event.params.pool);
}

export function handleLogPoolRemoved(event: LogPoolRemoved): void {
  createLogPoolRemoved(event);

  const pair = getOrCreatePair(event.params.pool);

  pair.removed = true;

  pair.save();
}

export function handleLogSetImplementation(event: LogSetImplementation): void {
  createLogSetImplementation(event);
}

export function handleLogSetMaintainer(event: LogSetMaintainer): void {
  createLogSetMaintainer(event);
}

export function handleLogSetMaintainerFeeRateModel(
  event: LogSetMaintainerFeeRateModel,
): void {
  createLogSetMaintainerFeeRateModel(event);
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  createOwnershipTransferred(event);
}
