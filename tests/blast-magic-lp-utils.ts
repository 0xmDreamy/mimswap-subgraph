import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { newMockEvent } from "matchstick-as";
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
} from "../generated/BlastMagicLP/BlastMagicLP";

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt,
): Approval {
  const approvalEvent = changetype<Approval>(newMockEvent());

  approvalEvent.parameters = new Array();

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner)),
  );
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender)),
  );
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return approvalEvent;
}

export function createBuySharesEvent(
  to: Address,
  increaseShares: BigInt,
  totalShares: BigInt,
): BuyShares {
  const buySharesEvent = changetype<BuyShares>(newMockEvent());

  buySharesEvent.parameters = new Array();

  buySharesEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to)),
  );
  buySharesEvent.parameters.push(
    new ethereum.EventParam(
      "increaseShares",
      ethereum.Value.fromUnsignedBigInt(increaseShares),
    ),
  );
  buySharesEvent.parameters.push(
    new ethereum.EventParam(
      "totalShares",
      ethereum.Value.fromUnsignedBigInt(totalShares),
    ),
  );

  return buySharesEvent;
}

export function createFlashLoanEvent(
  borrower: Address,
  assetTo: Address,
  baseAmount: BigInt,
  quoteAmount: BigInt,
): FlashLoan {
  const flashLoanEvent = changetype<FlashLoan>(newMockEvent());

  flashLoanEvent.parameters = new Array();

  flashLoanEvent.parameters.push(
    new ethereum.EventParam("borrower", ethereum.Value.fromAddress(borrower)),
  );
  flashLoanEvent.parameters.push(
    new ethereum.EventParam("assetTo", ethereum.Value.fromAddress(assetTo)),
  );
  flashLoanEvent.parameters.push(
    new ethereum.EventParam(
      "baseAmount",
      ethereum.Value.fromUnsignedBigInt(baseAmount),
    ),
  );
  flashLoanEvent.parameters.push(
    new ethereum.EventParam(
      "quoteAmount",
      ethereum.Value.fromUnsignedBigInt(quoteAmount),
    ),
  );

  return flashLoanEvent;
}

export function createLogBlastGasClaimedEvent(
  recipient: Address,
  amount: BigInt,
): LogBlastGasClaimed {
  const logBlastGasClaimedEvent = changetype<LogBlastGasClaimed>(
    newMockEvent(),
  );

  logBlastGasClaimedEvent.parameters = new Array();

  logBlastGasClaimedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient)),
  );
  logBlastGasClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return logBlastGasClaimedEvent;
}

export function createLogBlastNativeClaimableEnabledEvent(
  contractAddress: Address,
): LogBlastNativeClaimableEnabled {
  const logBlastNativeClaimableEnabledEvent =
    changetype<LogBlastNativeClaimableEnabled>(newMockEvent());

  logBlastNativeClaimableEnabledEvent.parameters = new Array();

  logBlastNativeClaimableEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress),
    ),
  );

  return logBlastNativeClaimableEnabledEvent;
}

export function createLogBlastTokenClaimableEnabledEvent(
  contractAddress: Address,
  token: Address,
): LogBlastTokenClaimableEnabled {
  const logBlastTokenClaimableEnabledEvent =
    changetype<LogBlastTokenClaimableEnabled>(newMockEvent());

  logBlastTokenClaimableEnabledEvent.parameters = new Array();

  logBlastTokenClaimableEnabledEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress),
    ),
  );
  logBlastTokenClaimableEnabledEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token)),
  );

  return logBlastTokenClaimableEnabledEvent;
}

export function createLogBlastTokenClaimedEvent(
  recipient: Address,
  token: Address,
  amount: BigInt,
): LogBlastTokenClaimed {
  const logBlastTokenClaimedEvent = changetype<LogBlastTokenClaimed>(
    newMockEvent(),
  );

  logBlastTokenClaimedEvent.parameters = new Array();

  logBlastTokenClaimedEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient)),
  );
  logBlastTokenClaimedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token)),
  );
  logBlastTokenClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return logBlastTokenClaimedEvent;
}

export function createLogFeeToChangedEvent(feeTo: Address): LogFeeToChanged {
  const logFeeToChangedEvent = changetype<LogFeeToChanged>(newMockEvent());

  logFeeToChangedEvent.parameters = new Array();

  logFeeToChangedEvent.parameters.push(
    new ethereum.EventParam("feeTo", ethereum.Value.fromAddress(feeTo)),
  );

  return logFeeToChangedEvent;
}

export function createOperatorChangedEvent(
  operator: Address,
  status: boolean,
): OperatorChanged {
  const operatorChangedEvent = changetype<OperatorChanged>(newMockEvent());

  operatorChangedEvent.parameters = new Array();

  operatorChangedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator)),
  );
  operatorChangedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status)),
  );

  return operatorChangedEvent;
}

export function createOwnershipTransferredEvent(
  user: Address,
  newOwner: Address,
): OwnershipTransferred {
  const ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent(),
  );

  ownershipTransferredEvent.parameters = new Array();

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user)),
  );
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner)),
  );

  return ownershipTransferredEvent;
}

export function createParametersChangedEvent(
  newLpFeeRate: BigInt,
  newI: BigInt,
  newK: BigInt,
): ParametersChanged {
  const parametersChangedEvent = changetype<ParametersChanged>(newMockEvent());

  parametersChangedEvent.parameters = new Array();

  parametersChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newLpFeeRate",
      ethereum.Value.fromUnsignedBigInt(newLpFeeRate),
    ),
  );
  parametersChangedEvent.parameters.push(
    new ethereum.EventParam("newI", ethereum.Value.fromUnsignedBigInt(newI)),
  );
  parametersChangedEvent.parameters.push(
    new ethereum.EventParam("newK", ethereum.Value.fromUnsignedBigInt(newK)),
  );

  return parametersChangedEvent;
}

export function createPausedChangedEvent(paused: boolean): PausedChanged {
  const pausedChangedEvent = changetype<PausedChanged>(newMockEvent());

  pausedChangedEvent.parameters = new Array();

  pausedChangedEvent.parameters.push(
    new ethereum.EventParam("paused", ethereum.Value.fromBoolean(paused)),
  );

  return pausedChangedEvent;
}

export function createRChangeEvent(newRState: i32): RChange {
  const rChangeEvent = changetype<RChange>(newMockEvent());

  rChangeEvent.parameters = new Array();

  rChangeEvent.parameters.push(
    new ethereum.EventParam(
      "newRState",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newRState)),
    ),
  );

  return rChangeEvent;
}

export function createSellSharesEvent(
  payer: Address,
  to: Address,
  decreaseShares: BigInt,
  totalShares: BigInt,
): SellShares {
  const sellSharesEvent = changetype<SellShares>(newMockEvent());

  sellSharesEvent.parameters = new Array();

  sellSharesEvent.parameters.push(
    new ethereum.EventParam("payer", ethereum.Value.fromAddress(payer)),
  );
  sellSharesEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to)),
  );
  sellSharesEvent.parameters.push(
    new ethereum.EventParam(
      "decreaseShares",
      ethereum.Value.fromUnsignedBigInt(decreaseShares),
    ),
  );
  sellSharesEvent.parameters.push(
    new ethereum.EventParam(
      "totalShares",
      ethereum.Value.fromUnsignedBigInt(totalShares),
    ),
  );

  return sellSharesEvent;
}

export function createSwapEvent(
  fromToken: Address,
  toToken: Address,
  fromAmount: BigInt,
  toAmount: BigInt,
  trader: Address,
  receiver: Address,
): Swap {
  const swapEvent = changetype<Swap>(newMockEvent());

  swapEvent.parameters = new Array();

  swapEvent.parameters.push(
    new ethereum.EventParam("fromToken", ethereum.Value.fromAddress(fromToken)),
  );
  swapEvent.parameters.push(
    new ethereum.EventParam("toToken", ethereum.Value.fromAddress(toToken)),
  );
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "fromAmount",
      ethereum.Value.fromUnsignedBigInt(fromAmount),
    ),
  );
  swapEvent.parameters.push(
    new ethereum.EventParam(
      "toAmount",
      ethereum.Value.fromUnsignedBigInt(toAmount),
    ),
  );
  swapEvent.parameters.push(
    new ethereum.EventParam("trader", ethereum.Value.fromAddress(trader)),
  );
  swapEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver)),
  );

  return swapEvent;
}

export function createTargetChangedEvent(
  newBaseTarget: BigInt,
  newQuoteTarget: BigInt,
): TargetChanged {
  const targetChangedEvent = changetype<TargetChanged>(newMockEvent());

  targetChangedEvent.parameters = new Array();

  targetChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newBaseTarget",
      ethereum.Value.fromUnsignedBigInt(newBaseTarget),
    ),
  );
  targetChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newQuoteTarget",
      ethereum.Value.fromUnsignedBigInt(newQuoteTarget),
    ),
  );

  return targetChangedEvent;
}

export function createTokenRescueEvent(
  token: Address,
  to: Address,
  amount: BigInt,
): TokenRescue {
  const tokenRescueEvent = changetype<TokenRescue>(newMockEvent());

  tokenRescueEvent.parameters = new Array();

  tokenRescueEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token)),
  );
  tokenRescueEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to)),
  );
  tokenRescueEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return tokenRescueEvent;
}

export function createTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt,
): Transfer {
  const transferEvent = changetype<Transfer>(newMockEvent());

  transferEvent.parameters = new Array();

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from)),
  );
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to)),
  );
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "amount",
      ethereum.Value.fromUnsignedBigInt(amount),
    ),
  );

  return transferEvent;
}
