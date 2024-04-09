import {
  LogBlastNativeClaimableEnabled as LogBlastNativeClaimableEnabledEvent,
  LogCreated as LogCreatedEvent,
  LogPoolAdded as LogPoolAddedEvent,
  LogPoolRemoved as LogPoolRemovedEvent,
  LogSetImplementation as LogSetImplementationEvent,
  LogSetMaintainer as LogSetMaintainerEvent,
  LogSetMaintainerFeeRateModel as LogSetMaintainerFeeRateModelEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
} from "../../../../generated/BlastMIMSwapFactory/BlastMIMSwapFactory";
import {
  LogBlastNativeClaimableEnabled,
  LogCreated,
  LogPoolAdded,
  LogPoolRemoved,
  LogSetImplementation,
  LogSetMaintainer,
  LogSetMaintainerFeeRateModel,
  OwnershipTransferred,
} from "../../../../generated/schema";
import { fillEvent } from "../../common/fillEvent";

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

export function createLogCreated(event: LogCreatedEvent): LogCreated {
  const entity = new LogCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.clone = event.params.clone_;
  entity.baseToken = event.params.baseToken_;
  entity.quoteToken = event.params.quoteToken_;
  entity.creator = event.params.creator_;
  entity.lpFeeRate = event.params.lpFeeRate_;
  entity.maintainerFeeRateModel = event.params.maintainerFeeRateModel;
  entity.i = event.params.i_;
  entity.k = event.params.k_;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogPoolAdded(event: LogPoolAddedEvent): LogPoolAdded {
  const entity = new LogPoolAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.baseToken = event.params.baseToken;
  entity.quoteToken = event.params.quoteToken;
  entity.creator = event.params.creator;
  entity.pool = event.params.pool;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogPoolRemoved(
  event: LogPoolRemovedEvent,
): LogPoolRemoved {
  const entity = new LogPoolRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.pool = event.params.pool;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogSetImplementation(
  event: LogSetImplementationEvent,
): LogSetImplementation {
  const entity = new LogSetImplementation(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.implementation = event.params.implementation;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogSetMaintainer(
  event: LogSetMaintainerEvent,
): LogSetMaintainer {
  const entity = new LogSetMaintainer(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.newMaintainer = event.params.newMaintainer;

  fillEvent(entity, event);

  entity.save();
  return entity;
}

export function createLogSetMaintainerFeeRateModel(
  event: LogSetMaintainerFeeRateModelEvent,
): LogSetMaintainerFeeRateModel {
  const entity = new LogSetMaintainerFeeRateModel(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  );
  entity.newMaintainerFeeRateModel = event.params.newMaintainerFeeRateModel;

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
