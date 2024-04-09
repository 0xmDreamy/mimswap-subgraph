import {
  Approval as ApprovalEvent,
  BuyShares as BuySharesEvent,
  FlashLoan as FlashLoanEvent,
  LogBlastGasClaimed as LogBlastGasClaimedEvent,
  LogBlastNativeClaimableEnabled as LogBlastNativeClaimableEnabledEvent,
  LogBlastTokenClaimableEnabled as LogBlastTokenClaimableEnabledEvent,
  LogBlastTokenClaimed as LogBlastTokenClaimedEvent,
  LogFeeToChanged as LogFeeToChangedEvent,
  OperatorChanged as OperatorChangedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ParametersChanged as ParametersChangedEvent,
  PausedChanged as PausedChangedEvent,
  RChange as RChangeEvent,
  SellShares as SellSharesEvent,
  Swap as SwapEvent,
  TargetChanged as TargetChangedEvent,
  TokenRescue as TokenRescueEvent,
  Transfer as TransferEvent,
} from "../../../../generated/BlastMagicLP/BlastMagicLP";
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
} from "../../../../generated/schema";
import { fillEvent } from "../../common/fillEvent";
import { getOrCreatePair } from "../pair";
import { getOrCreateToken } from "../token";
import { getOrCreateUser } from "../user";

export function createApproval(event: ApprovalEvent): Approval {
  const entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.owner = getOrCreateUser(event.params.owner).id;
  entity.spender = getOrCreateUser(event.params.spender).id;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createBuyShares(event: BuySharesEvent): BuyShares {
  const entity = new BuyShares(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.to = getOrCreateUser(event.params.to).id;
  entity.increaseShares = event.params.increaseShares;
  entity.totalShares = event.params.totalShares;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createFlashLoan(event: FlashLoanEvent): FlashLoan {
  const entity = new FlashLoan(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.borrower = getOrCreateUser(event.params.borrower).id;
  entity.assetTo = getOrCreateUser(event.params.assetTo).id;
  entity.baseAmount = event.params.baseAmount;
  entity.quoteAmount = event.params.quoteAmount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogBlastGasClaimed(
  event: LogBlastGasClaimedEvent,
): LogBlastGasClaimed {
  const entity = new LogBlastGasClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.recipient = event.params.recipient;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogBlastNativeClaimableEnabled(
  event: LogBlastNativeClaimableEnabledEvent,
): LogBlastNativeClaimableEnabled {
  const entity = new LogBlastNativeClaimableEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.contractAddress = event.params.contractAddress;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogBlastTokenClaimableEnabled(
  event: LogBlastTokenClaimableEnabledEvent,
): LogBlastTokenClaimableEnabled {
  const entity = new LogBlastTokenClaimableEnabled(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.contractAddress = event.params.contractAddress;
  entity.token = event.params.token;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogBlastTokenClaimed(
  event: LogBlastTokenClaimedEvent,
): LogBlastTokenClaimed {
  const entity = new LogBlastTokenClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.recipient = event.params.recipient;
  entity.token = event.params.token;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogFeeToChanged(
  event: LogFeeToChangedEvent,
): LogFeeToChanged {
  const entity = new LogFeeToChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.feeTo = event.params.feeTo;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createOperatorChanged(
  event: OperatorChangedEvent,
): OperatorChanged {
  const entity = new OperatorChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.operator = event.params.operator;
  entity.status = event.params.status;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createOwnershipTransferred(
  event: OwnershipTransferredEvent,
): OwnershipTransferred {
  const entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.user = event.params.user;
  entity.newOwner = event.params.newOwner;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createParametersChanged(
  event: ParametersChangedEvent,
): ParametersChanged {
  const entity = new ParametersChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.newLpFeeRate = event.params.newLpFeeRate;
  entity.newI = event.params.newI;
  entity.newK = event.params.newK;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createPausedChanged(event: PausedChangedEvent): PausedChanged {
  const entity = new PausedChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.paused = event.params.paused;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createRChange(event: RChangeEvent): RChange {
  const entity = new RChange(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.newRState = event.params.newRState;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createSellShares(event: SellSharesEvent): SellShares {
  const entity = new SellShares(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.payer = getOrCreateUser(event.params.payer).id;
  entity.to = getOrCreateUser(event.params.to).id;
  entity.decreaseShares = event.params.decreaseShares;
  entity.totalShares = event.params.totalShares;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createSwap(event: SwapEvent): Swap {
  const entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.fromToken = getOrCreateToken(event.params.fromToken).id;
  entity.toToken = getOrCreateToken(event.params.toToken).id;
  entity.fromAmount = event.params.fromAmount;
  entity.toAmount = event.params.toAmount;
  entity.trader = getOrCreateUser(event.params.trader).id;
  entity.receiver = getOrCreateUser(event.params.receiver).id;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createTargetChanged(event: TargetChangedEvent): TargetChanged {
  const entity = new TargetChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.newBaseTarget = event.params.newBaseTarget;
  entity.newQuoteTarget = event.params.newQuoteTarget;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createTokenRescure(event: TokenRescueEvent): TokenRescue {
  const entity = new TokenRescue(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.token = event.params.token;
  entity.to = event.params.to;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createTransfer(event: TransferEvent): Transfer {
  const entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pair = getOrCreatePair(event.address).id;
  entity.from = getOrCreateUser(event.params.from).id;
  entity.to = getOrCreateUser(event.params.to).id;
  entity.amount = event.params.amount;

  fillEvent(entity, event);

  entity.save();
  return entity;
}
