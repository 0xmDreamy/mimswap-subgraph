import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  assert,
  afterAll,
  beforeAll,
  clearStore,
  describe,
  test,
} from "matchstick-as/assembly/index";
import { LogBlastNativeClaimableEnabled as LogBlastNativeClaimableEnabledEvent } from "../generated/BlastMIMSwapFactory/BlastMIMSwapFactory";
import { LogBlastNativeClaimableEnabled } from "../generated/schema";
import { handleLogBlastNativeClaimableEnabled } from "../src/blast-mim-swap-factory";
import { createLogBlastNativeClaimableEnabledEvent } from "./blast-mim-swap-factory-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    const contractAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001",
    );
    const newLogBlastNativeClaimableEnabledEvent =
      createLogBlastNativeClaimableEnabledEvent(contractAddress);
    handleLogBlastNativeClaimableEnabled(
      newLogBlastNativeClaimableEnabledEvent,
    );
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("LogBlastNativeClaimableEnabled created and stored", () => {
    assert.entityCount("LogBlastNativeClaimableEnabled", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "LogBlastNativeClaimableEnabled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractAddress",
      "0x0000000000000000000000000000000000000001",
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
