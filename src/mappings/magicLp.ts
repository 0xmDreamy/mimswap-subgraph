import {
  Approval,
  BuyShares,
  FlashLoan,
  LogBlastGasClaimed,
  LogBlastNativeClaimableEnabled,
  LogBlastTokenClaimableEnabled,
  LogBlastTokenClaimed,
  LogFeeToChanged,
  OperatorChanged,
  OwnershipTransferred,
  ParametersChanged,
  PausedChanged,
  RChange,
  SellShares,
  Swap,
  TargetChanged,
  TokenRescue,
  Transfer,
} from "../../generated/BlastMagicLP/BlastMagicLP";
import {
  createApproval,
  createBuyShares,
  createFlashLoan,
  createLogBlastGasClaimed,
  createLogBlastNativeClaimableEnabled,
  createLogBlastTokenClaimableEnabled,
  createLogBlastTokenClaimed,
  createLogFeeToChanged,
  createOperatorChanged,
  createOwnershipTransferred,
  createParametersChanged,
  createPausedChanged,
  createRChange,
  createSellShares,
  createSwap,
  createTargetChanged,
  createTokenRescure,
  createTransfer,
} from "../helpers/entities/events/magicLp";
import { getOrCreatePair } from "../helpers/entities/pair";
// import { updatePrice } from "../helpers/updates/price";
// import { updateVolume } from "../helpers/updates/volume";

export function handleApproval(event: Approval): void {
  createApproval(event);
}

export function handleBuyShares(event: BuyShares): void {
  createBuyShares(event);

  // updatePrice(event.address);
}

export function handleFlashLoan(event: FlashLoan): void {
  createFlashLoan(event);

  // updatePrice(event.address);
}

export function handleLogBlastGasClaimed(event: LogBlastGasClaimed): void {
  createLogBlastGasClaimed(event);
}

export function handleLogBlastNativeClaimableEnabled(
  event: LogBlastNativeClaimableEnabled,
): void {
  createLogBlastNativeClaimableEnabled(event);
}

export function handleLogBlastTokenClaimableEnabled(
  event: LogBlastTokenClaimableEnabled,
): void {
  createLogBlastTokenClaimableEnabled(event);
}

export function handleLogBlastTokenClaimed(event: LogBlastTokenClaimed): void {
  createLogBlastTokenClaimed(event);
}

export function handleLogFeeToChanged(event: LogFeeToChanged): void {
  createLogFeeToChanged(event);
}

export function handleOperatorChanged(event: OperatorChanged): void {
  createOperatorChanged(event);
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  createOwnershipTransferred(event);
}

export function handleParametersChanged(event: ParametersChanged): void {
  createParametersChanged(event);

  const pair = getOrCreatePair(event.address);
  pair.i = event.params.newI;
  pair.k = event.params.newK;
  pair.save();

  // updatePrice(event.address);
}

export function handlePausedChanged(event: PausedChanged): void {
  createPausedChanged(event);
}

export function handleRChange(event: RChange): void {
  createRChange(event);

  // updatePrice(event.address);
}

export function handleSellShares(event: SellShares): void {
  createSellShares(event);

  // updatePrice(event.address);
}

export function handleSwap(event: Swap): void {
  createSwap(event);

  // updatePrice(event.address);
  // updateVolume(
  //   event.address,
  //   event.params.trader,
  //   event.params.fromToken,
  //   event.params.toToken,
  //   event.params.toAmount,
  //   event.params.fromAmount,
  // );
}

export function handleTargetChanged(event: TargetChanged): void {
  createTargetChanged(event);
}

export function handleTokenRescue(event: TokenRescue): void {
  createTokenRescure(event);
}

export function handleTransfer(event: Transfer): void {
  createTransfer(event);
}
