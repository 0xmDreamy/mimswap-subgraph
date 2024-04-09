import { Address } from "@graphprotocol/graph-ts";
import { IERC20 } from "../../../generated/BlastMIMSwapFactory/IERC20";
import { Token } from "../../../generated/schema";

export function getOrCreateToken(tokenAddress: Address): Token {
  let token = Token.load(tokenAddress);

  if (token === null) {
    token = new Token(tokenAddress);

    const tokenContract = IERC20.bind(tokenAddress);
    const name = tokenContract.try_name();
    if (!name.reverted) {
      token.name = name.value;
    }

    const symbol = tokenContract.try_symbol();
    if (!symbol.reverted) {
      token.symbol = symbol.value;
    }

    const decimals = tokenContract.try_decimals();
    if (!decimals.reverted) {
      token.decimals = decimals.value;
    }

    token.save();
  }

  return token;
}
