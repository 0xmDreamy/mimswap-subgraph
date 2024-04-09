import { Address, BigInt, ethereum } from "@graphprotocol/graph-ts";
import { newMockEvent } from "matchstick-as";
import {
  LogBlastNativeClaimableEnabled,
  LogCreated,
  LogPoolAdded,
  LogPoolRemoved,
  LogSetImplementation,
  LogSetMaintainer,
  LogSetMaintainerFeeRateModel,
  OwnershipTransferred,
} from "../generated/BlastMIMSwapFactory/BlastMIMSwapFactory";

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

export function createLogCreatedEvent(
  clone_: Address,
  baseToken_: Address,
  quoteToken_: Address,
  creator_: Address,
  lpFeeRate_: BigInt,
  maintainerFeeRateModel: Address,
  i_: BigInt,
  k_: BigInt,
): LogCreated {
  const logCreatedEvent = changetype<LogCreated>(newMockEvent());

  logCreatedEvent.parameters = new Array();

  logCreatedEvent.parameters.push(
    new ethereum.EventParam("clone_", ethereum.Value.fromAddress(clone_)),
  );
  logCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "baseToken_",
      ethereum.Value.fromAddress(baseToken_),
    ),
  );
  logCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "quoteToken_",
      ethereum.Value.fromAddress(quoteToken_),
    ),
  );
  logCreatedEvent.parameters.push(
    new ethereum.EventParam("creator_", ethereum.Value.fromAddress(creator_)),
  );
  logCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "lpFeeRate_",
      ethereum.Value.fromUnsignedBigInt(lpFeeRate_),
    ),
  );
  logCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "maintainerFeeRateModel",
      ethereum.Value.fromAddress(maintainerFeeRateModel),
    ),
  );
  logCreatedEvent.parameters.push(
    new ethereum.EventParam("i_", ethereum.Value.fromUnsignedBigInt(i_)),
  );
  logCreatedEvent.parameters.push(
    new ethereum.EventParam("k_", ethereum.Value.fromUnsignedBigInt(k_)),
  );

  return logCreatedEvent;
}

export function createLogPoolAddedEvent(
  baseToken: Address,
  quoteToken: Address,
  creator: Address,
  pool: Address,
): LogPoolAdded {
  const logPoolAddedEvent = changetype<LogPoolAdded>(newMockEvent());

  logPoolAddedEvent.parameters = new Array();

  logPoolAddedEvent.parameters.push(
    new ethereum.EventParam("baseToken", ethereum.Value.fromAddress(baseToken)),
  );
  logPoolAddedEvent.parameters.push(
    new ethereum.EventParam(
      "quoteToken",
      ethereum.Value.fromAddress(quoteToken),
    ),
  );
  logPoolAddedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator)),
  );
  logPoolAddedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool)),
  );

  return logPoolAddedEvent;
}

export function createLogPoolRemovedEvent(pool: Address): LogPoolRemoved {
  const logPoolRemovedEvent = changetype<LogPoolRemoved>(newMockEvent());

  logPoolRemovedEvent.parameters = new Array();

  logPoolRemovedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool)),
  );

  return logPoolRemovedEvent;
}

export function createLogSetImplementationEvent(
  implementation: Address,
): LogSetImplementation {
  const logSetImplementationEvent = changetype<LogSetImplementation>(
    newMockEvent(),
  );

  logSetImplementationEvent.parameters = new Array();

  logSetImplementationEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation),
    ),
  );

  return logSetImplementationEvent;
}

export function createLogSetMaintainerEvent(
  newMaintainer: Address,
): LogSetMaintainer {
  const logSetMaintainerEvent = changetype<LogSetMaintainer>(newMockEvent());

  logSetMaintainerEvent.parameters = new Array();

  logSetMaintainerEvent.parameters.push(
    new ethereum.EventParam(
      "newMaintainer",
      ethereum.Value.fromAddress(newMaintainer),
    ),
  );

  return logSetMaintainerEvent;
}

export function createLogSetMaintainerFeeRateModelEvent(
  newMaintainerFeeRateModel: Address,
): LogSetMaintainerFeeRateModel {
  const logSetMaintainerFeeRateModelEvent =
    changetype<LogSetMaintainerFeeRateModel>(newMockEvent());

  logSetMaintainerFeeRateModelEvent.parameters = new Array();

  logSetMaintainerFeeRateModelEvent.parameters.push(
    new ethereum.EventParam(
      "newMaintainerFeeRateModel",
      ethereum.Value.fromAddress(newMaintainerFeeRateModel),
    ),
  );

  return logSetMaintainerFeeRateModelEvent;
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
