import { Address, BigInt } from "@graphprotocol/graph-ts";
import {
  assert,
  afterAll,
  beforeAll,
  clearStore,
  describe,
  test,
} from "matchstick-as/assembly/index";
import { Approval as ApprovalEvent } from "../generated/BlastMagicLP/BlastMagicLP";
import { Approval } from "../generated/schema";
import { handleApproval } from "../src/blast-magic-lp";
import { createApprovalEvent } from "./blast-magic-lp-utils";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    const owner = Address.fromString(
      "0x0000000000000000000000000000000000000001",
    );
    const spender = Address.fromString(
      "0x0000000000000000000000000000000000000001",
    );
    const amount = BigInt.fromI32(234);
    const newApprovalEvent = createApprovalEvent(owner, spender, amount);
    handleApproval(newApprovalEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Approval created and stored", () => {
    assert.entityCount("Approval", 1);

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Approval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001",
    );
    assert.fieldEquals(
      "Approval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "spender",
      "0x0000000000000000000000000000000000000001",
    );
    assert.fieldEquals(
      "Approval",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234",
    );

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});
